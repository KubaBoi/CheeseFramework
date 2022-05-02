#cheese

import os
import json

from Cheese.resourceManager import ResMan
from Cheese.Logger import Logger

class Metadata:
    
    repos = None
    contr = None
    tests = None

    getEndpoints = {}
    postEndpoints = {}
    @staticmethod
    def loadMetadata():
        try:
            with open(ResMan.metadata(), "r") as f:
                data = json.loads(f.read())

            Metadata.repos = data["REPOSITORIES"]
            Metadata.contr = data["CONTROLLERS"]
            Metadata.tests = data["TESTS"]

            Metadata.createInits(data)
            Metadata.prepareControllers()
            Metadata.prepareTests()
            Metadata.cleanInits()
        except Exception as e:
            Logger.fail("Error while loading metadata", False, False)
            Logger.warning("Didn't you forgot to build application?", False, False)
            Logger.warning("Build will be triggered when application is in debug mode", False, False)
            Metadata.cleanInits()
            raise SystemError("Error while loading metadata", e)

    @staticmethod
    def cleanInits():
        for root, dirs, files in os.walk(ResMan.root()):
            for file in files:
                if (file == "__init__.py"):
                    os.remove(os.path.join(root, file))

    @staticmethod
    def createInits(data):
        Metadata.cleanInits()
        keys = data.keys()
        for key in keys:
            
            modules = data[key]
            for moduleKey in modules.keys():
                module = modules[moduleKey]
                path = module["FILE"].replace(ResMan.getFileName(module["FILE"]), "")[:-1]
                
                splited = path.split("/")
                for i, pth in enumerate(splited):
                    with open(os.path.join(*splited[:i], pth, "__init__.py"), "a") as f:
                        if (len(splited) == 1 and splited[0] == ""): continue
                        f.write(f"from {'.'.join(splited)} import *\n")

                with open(os.path.join(ResMan.root(), path, "__init__.py"), "a") as f:
                    f.write(f"from {module['FILE'].replace('/', '.')} import {moduleKey}\n")

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
    def prepareControllers():
        for key in Metadata.contr.keys():
            structure = Metadata.contr[key]
            mainEndpoint = structure["CONTROLLER"]

            for methodKey in structure["METHODS"].keys():
                method = structure["METHODS"][methodKey]
                for endpointKey in method.keys():
                    eKey = mainEndpoint + method[endpointKey]

                    try:
                        methodObj = Metadata.getObjMethod(methodKey, structure["FILE"])
                    except:
                        methodObj = Metadata.getObjMethod(methodKey, structure["FILE"], key)

                    if (endpointKey == "GET"):
                        Metadata.getEndpoints[eKey] = methodObj
                    elif (endpointKey == "POST"):
                        Metadata.postEndpoints[eKey] = methodObj

    @staticmethod
    def prepareTests():
        for key in Metadata.tests.keys():
            structure = Metadata.tests[key]

            for methodKey in structure["METHODS"].keys():
                method = structure["METHODS"][methodKey]
                try:
                    methodObj = Metadata.getObjMethod(methodKey, structure["FILE"])
                except:
                    methodObj = Metadata.getObjMethod(methodKey, structure["FILE"], key)

                method["OBJECT"] = methodObj

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
        