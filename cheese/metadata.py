#cheese

import os
import json

from cheese.resourceManager import ResMan

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
                        return endpoint, method
        return False

