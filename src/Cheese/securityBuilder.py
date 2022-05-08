#cheese

import os
import json

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class SecurityBuilder:
    
    @staticmethod
    def build(parent):
        secrets = {}

        with open(ResMan.joinPath(ResMan.root(), "adminSettings.json"), "r") as f:
            data = json.loads(f.read())

        secrets["ADMIN"] = data

        secPath = ResMan.joinPath(ResMan.root(), "securitySettings.json")
        with open(secPath, "r") as f:
            data = json.loads(f.read())

        Finder.validateKey("authentication", data, secPath)
        Finder.validateKey("roles", data, secPath)
        Finder.validateKey("access", data, secPath)
        
        security = {}
        security["AUTHENTICATION"] = data["authentication"]
        security["ROLES"] = data["roles"]
        access = {}
        controllers = parent.dictJson["CONTROLLERS"]

        for key in data["access"].keys():
            if (key.endswith("*")):
                for contKey in controllers.keys():
                    if (key.replace("*", "").startwith(contKey["CONTROLLER"])):
                        # this is it
                        methodKeys = controllers[contKey]["METHODS"].keys()
                        for methodKey in methodKeys:
                            if (methodKey not in data["access"].keys()):
                                access[contKey + methodKey] = data["access"][key]
            else:
                access[key] = data["access"][key]

        security["ACCESS"] = access
        secrets["SECURITY"] = security 

        parent.dictJson["SECRETS"] = secrets

