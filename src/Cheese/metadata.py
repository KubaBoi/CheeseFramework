#cheese

import os
import json

from Cheese.resourceManager import ResMan

class Metadata:
    
    repos = None
    models = None
    contr = None

    @staticmethod
    def loadMedatada():
        with open(os.path.join(ResMan.metadata(), "contMetadata.json"), "r") as f:
            Metadata.contr = json.loads(f.read())["CONTROLLERS"]

        with open(os.path.join(ResMan.metadata(), "repMetadata.json"), "r") as f:
            data = json.loads(f.read())
            Metadata.repos = data["REPOSITORIES"]
            Metadata.models = data["MODELS"]

    @staticmethod
    def findMethod(endpoints, httpMethod):
        for endpoint in Metadata.contr:
            if (endpoint["MAIN_ENDPOINT"] == endpoints[0]):
                for method in endpoint["METHODS"]:
                    if (method["ENDPOINT"] == endpoints[1] and method["TYPE"] == httpMethod):
                        return Metadata.getHttpMethod(endpoint, method)
        return False 

    @staticmethod
    def getHttpMethod(endpoint, method):
        path = endpoint["FILE"].split("/")
        a = __import__(path[0])
        for i in range(1, len(path)):
            a = getattr(a, path[i])
        
        return getattr(a, method["METHOD"])

    @staticmethod
    def getRepository(userRepository):
        for repo in Metadata.repos:
            if (repo["FILE"] == userRepository):
                return repo
        raise SyntaxError(f"Repository {userRepository} was not found")

    @staticmethod
    def getMethod(repository, methodName):
        for method in repository["METHODS"]:
            if (method["METHOD"] == methodName):
                return method
        raise SyntaxError(f"Method {methodName} in {repository['FILE']} was not found")

    @staticmethod
    def getModel(repository):
        for model in Metadata.models:
            if (model["CLASS"] == repository["MODEL"]):
                return model
        raise SyntaxError(f"Model {repository['MODEL']} for {repository['FILE']} was not found")
        
    @staticmethod
    def getModelObject(model):
        path = model["FILE"].split("/")
        a = __import__(path[0])
        for i in range(1, len(path)):
            a = getattr(a, path[i])
        
        return a