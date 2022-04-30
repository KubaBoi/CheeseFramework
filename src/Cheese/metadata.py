#cheese

import os
import json

from Cheese.resourceManager import ResMan
from Cheese.Logger import Logger

class Metadata:
    
    repos = None
    contr = None

    getEndpoints = {}
    postEndpoints = {}

    @staticmethod
    def loadMedatada():
        try:
            with open(ResMan.metadata(), "r") as f:
                data = json.loads(f.read())

            Metadata.repos = data["REPOSITORIES"]
            Metadata.contr = data["CONTROLLERS"]

            Metadata.prepareEndpoints()
        except Exception as e:
            Logger.fail("Error while loading metadata", e, False, False)
            Logger.warning("Didn't you forgot to build application?", False, False)
            Logger.warning("Build will be triggered when application is in debug mode", False, False)
            raise SystemError("Error while loading metadata", e)

    @staticmethod
    def prepareEndpoints():
        for key in Metadata.contr.keys():
            controller = Metadata.contr[key]
            mainEndpoint = controller["CONTROLLER"]

            for methodKey in controller["METHODS"].keys():
                method = controller["METHODS"][methodKey]
                for endpointKey in method.keys():
                    eKey = mainEndpoint + method[endpointKey]

                    path = controller["FILE"].split("/")
                    a = __import__(path[0])
                    for i in range(1, len(path)):
                        a = getattr(a, path[i])
                    
                    methodObj = getattr(a, methodKey)

                    if (endpointKey == "GET"):
                        Metadata.getEndpoints[eKey] = methodObj
                    elif (endpointKey == "POST"):
                        Metadata.postEndpoints[eKey] = methodObj

    @staticmethod
    def findMethod(endpoint, httpMethod):
        if (httpMethod.upper() == "GET"):
            if (endpoint in Metadata.getEndpoints):
                return Metadata.getEndpoints[endpoint]

        return False 

    @staticmethod
    def getRepository(userRepository):
        for repo in Metadata.repos.keys():
            repos = Metadata.repos[repo]
            for repoKey in repos.keys():
                if (repos[repoKey]["FILE"] == userRepository):
                    return repo
        raise SyntaxError(f"Repository {userRepository} was not found")

    @staticmethod
    def getRepositoryFromClass(userRepository):
        if (userRepository in Metadata.repos.keys()):
            return Metadata.repos[userRepository]
        raise SyntaxError(f"Repository {userRepository} was not found")


    @staticmethod
    def getMethod(repository, methodName):
        if (methodName in repository["METHODS"].keys()):
            return repository["METHODS"][methodName]
        raise SyntaxError(f"Method {methodName} in {repository['FILE']} was not found")

    @staticmethod
    def getModel(repository):
        return repository["DBMODEL"]
        