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
            Logger.fail("Error while loading metadata", False, False)
            Logger.warning("Didn't you forgot to build application?", False, False)
            Logger.warning("Build will be triggered when application is in debug mode", False, False)
            raise SystemError("Error while loading metadata", e)

    @staticmethod
    def getObjMethod(methodName, file, className=""):
        path = file.split("/")
        parent = __import__(path[0])
        for i in range(1, len(path)):
            parent = getattr(parent, path[i])

        if (className != ""):
            parent = getattr(parent, className)
        return getattr(parent, methodName)

    @staticmethod
    def prepareEndpoints():
        for key in Metadata.contr.keys():
            controller = Metadata.contr[key]
            mainEndpoint = controller["CONTROLLER"]

            for methodKey in controller["METHODS"].keys():
                method = controller["METHODS"][methodKey]
                for endpointKey in method.keys():
                    eKey = mainEndpoint + method[endpointKey]

                    methodObj = Metadata.getObjMethod(methodKey, controller["FILE"], key)

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
        for repoKey in Metadata.repos.keys():
            repo = Metadata.repos[repoKey]
            if (ResMan.getFileName(repo["FILE"]) == userRepository):
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

    @staticmethod
    def getScheme(repository):
        schs = repository["DBSCHEME"].replace("(", "").replace(")", "").split(",")
        retScheme = []
        for s in schs:
            retScheme.append(s.strip()) 
        return retScheme    
        