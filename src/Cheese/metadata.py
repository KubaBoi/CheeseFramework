#cheese

import os
import json
import base64

from Cheese.resourceManager import ResMan
from Cheese.Logger import Logger
from Cheese.variables import Variables
from Cheese.appSettings import Settings

class Metadata:
    """
    Class that builds and loads application metadata
    """

    maxChar = 1114111

    # this functionality has been added in v(1.4.63) 
    # so if CHEESE_VERSION is missing in metadata the build version is less than 1.4.63
    cheeseRelease = "unknown but less than 1.4.63" 
    
    repos = None
    contr = None
    tests = None

    getEndpoints = {}
    postEndpoints = {}
    @staticmethod
    def loadMetadata():
        """
        loads metadata
        """
        try:
            data = Metadata.read()

            if ("CHEESE_VERSION" in data.keys()):
                Metadata.cheeseRelease = data['CHEESE_VERSION']

            Metadata.repos = data["REPOSITORIES"]
            Metadata.contr = data["CONTROLLERS"]
            Metadata.tests = data["TESTS"]

            Metadata.admin = data["ADMIN"]
            Metadata.authentication = data["SECURITY"]["AUTHENTICATION"]
            Metadata.roles = data["SECURITY"]["ROLES"]
            Metadata.access = data["SECURITY"]["ACCESS"]
            Metadata.secrets = data["SECRETS"]

            Metadata.createInits(data)
            Metadata.prepareControllers()
            Metadata.prepareTests()
            Metadata.cleanInits()

            Settings.loadSecrets(Metadata.secrets)
        except KeyError as e:
            message = "Cannot find secrets:\n"
            for key in e.args:
                message += f"{key[0]}: {key[1]}\n"
            message += 10*"="
            Logger.warning(message)
            Logger.warning("For more information check:")
            Logger.warning(Variables.documentation)

        except PermissionError as e:
            Logger.warning("Didn't you forgot to make 'secretPass' file?")
            Logger.warning("Is decrypt key in 'secretPass' file actual?")
            Logger.warning("For more information check:")
            Logger.warning(Variables.documentation)
            raise e
        except Exception as e:
            Logger.fail("Error while loading metadata", False, False)
            Logger.warning("Didn't you forgot to build application?", False, False)
            Logger.warning("Build will be triggered when application is in debug mode", False, False)
            Metadata.cleanInits()
            raise SystemError("Error while loading metadata", e)

    @staticmethod
    def cleanInits():
        """
        Remove all __init__.py files after import
        """
        for root, dirs, files in os.walk(ResMan.root()):
            for file in files:
                if (file == "__init__.py"):
                    os.remove(os.path.join(root, file))

    @staticmethod
    def createInits(data):
        """
        Creates __init__.py files for import
        """
        Metadata.cleanInits()
        keys = data.keys()
        for key in keys:
            if (key == "CHEESE_VERSION"): continue
            
            modules = data[key]
            for moduleKey in modules.keys():
                module = modules[moduleKey]

                if (type(module) is not dict): continue
                if ("FILE" not in module.keys()): continue

                path = module["FILE"].replace(ResMan.getFileName(module["FILE"]), "")[:-1]
                
                splited = path.split("/")
                for i, pth in enumerate(splited):
                    with open(os.path.join(*splited[:i], pth, "__init__.py"), "a", encoding="utf-8") as f:
                        if (len(splited) == 1 and splited[0] == ""): continue
                        f.write(f"from {'.'.join(splited)} import *\n")

                with open(os.path.join(ResMan.root(), path, "__init__.py"), "a", encoding="utf-8") as f:
                    f.write(f"from {module['FILE'].replace('/', '.')} import {moduleKey}\n")

    @staticmethod
    def getObjMethod(methodName, file, className=""):
        """
        Returns object of method from controller or repository
        """
        path = file.split("/")
        parent = __import__(path[0])
        for i in range(1, len(path)):
            parent = getattr(parent, path[i])

        if (className != ""):
            parent = getattr(parent, className)
        return getattr(parent, methodName)

    @staticmethod
    def prepareControllers():
        """
        Imports controller methods
        """
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
        """
        Imports test methods
        """
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
        """
        Finds method by endpoint and http method
        """
        if (httpMethod.upper() == "GET"):
            if (endpoint in Metadata.getEndpoints):
                return Metadata.getEndpoints[endpoint]
        elif (httpMethod.upper() == "POST"):
            if (endpoint in Metadata.postEndpoints):
                return Metadata.postEndpoints[endpoint]

        return False

    @staticmethod
    def getRepository(userRepository):
        """
        Returns repository by class name
        """
        for repoKey in Metadata.repos.keys():
            repo = Metadata.repos[repoKey]
            if (ResMan.getFileName(repo["FILE"]) == userRepository):
                return repo
        raise SyntaxError(f"Repository {userRepository} was not found")

    @staticmethod
    def getRepositoryFromClass(userRepository):
        """
        Returns repository object by class name
        """
        if (userRepository in Metadata.repos.keys()):
            return Metadata.repos[userRepository]
        raise SyntaxError(f"Repository {userRepository} was not found")


    @staticmethod
    def getMethod(repository, methodName):
        """
        Returns repository's object method
        """
        if (methodName in repository["METHODS"].keys()):
            return repository["METHODS"][methodName]
        raise SyntaxError(f"Method {methodName} in {repository['FILE']} was not found")

    @staticmethod
    def getModel(repository):
        """
        Returns name of repository's model
        """
        return repository["DBMODEL"]

    @staticmethod
    def getScheme(repository):
        """
        Returns name of repository's db scheme as list
        """
        schs = repository["DBSCHEME"].replace("(", "").replace(")", "").split(",")
        retScheme = []
        for s in schs:
            retScheme.append(s.strip()) 
        return retScheme    

    @staticmethod
    def getRawScheme(repository):
        """
        Returns name of repository's db scheme
        """
        return repository["DBSCHEME"].replace("(", "").replace(")", "")

    @staticmethod
    def getKey():
        """
        Loads secret key
        """
        key = "Default"
        secPath = ResMan.root("secretPass")
        if (os.path.exists(secPath)):
            with open(secPath, "r", encoding="utf-8") as f:
                key = f.read().strip()
        return key

    @staticmethod
    def encode(data, key):
        """
        Encodes data with key
        """
        coded = ""
        for i, ch in enumerate(key + data):
            keyIndex = i % len(key)
            code = ord(ch) + ord(key[keyIndex])
            if (code > Metadata.maxChar):
                code -= Metadata.maxChar
            coded += chr(code)
        return coded

    @staticmethod
    def decode(data, key):
        """
        Dencodes data with key
        """
        decoded = ""
        for i, ch in enumerate(data):
            keyIndex = i % len(key)
            code = ord(ch) - ord(key[keyIndex])
            if (code < 0):
                code += Metadata.maxChar
            decoded += chr(code)

            if (i == len(key) or len(key) > len(data)):
                if (decoded[0:-1] == key and decoded[-1] == "{"):
                    decoded = "{"
                else:
                    raise PermissionError("Metadata has not been able to be decoded because decode key is invalid")
        if (key == "Default"):
            Logger.warning("You are using default decode key. Consider to change it.", False, False)
        return decoded
            
    @staticmethod
    def code64(data, coding="utf-8"):
        """
        Base64 coding
        """
        bts = base64.b64encode(data.encode(coding))
        return bts.decode(coding)

    @staticmethod
    def decode64(bts, coding="utf-8"):
        """
        Base64 decoding
        """
        return base64.b64decode(bts).decode(coding)

    @staticmethod
    def save(data):
        """
        Saves metadata in file .metadata
        """
        with open(ResMan.metadata(), "w", encoding="utf-8") as f:
            data = Metadata.encode(json.dumps(data), Metadata.getKey())
            f.write(Metadata.code64(data))

    @staticmethod
    def read():
        """
        Reads metadata from file .metadata
        """
        with open(ResMan.metadata(), "r", encoding="utf-8") as f:
            data = Metadata.decode64(f.read())
            return json.loads(Metadata.decode(data, Metadata.getKey()))
    