#cheese

import os
import json

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class ControllerBuilder:
    def __init__(self):
        self.contJson = {"CONTROLLERS": []}

    def build(self):
        self.controllers = []

        for root, dirs, files in os.walk(ResMan.src()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "controller")): 
                    self.controllers.append(path)

        self.doControllersJson()

        with open(os.path.join(ResMan.metadata(), "contMetadata.json"), "w") as f:
            f.write(json.dumps(self.contJson))

    def doControllersJson(self):
        for contr in self.controllers:
            with open(contr, "r") as f:
                data = f.read()

            mainEndpoint = Finder.getAnnotation(data, "#@controller", contr)[0]

            methods = []
            methods.extend(self.findMethods(data, contr))
            methods.extend(self.findMethods(data, contr, "post"))

            self.contJson["CONTROLLERS"].append(
                {
                    "FILE": ResMan.getFileName(contr).replace(".py", ""),
                    "MAIN_ENDPOINT": mainEndpoint,
                    "METHODS": methods
                }
            )

    def findMethods(self, data, contr, type="get"):
        fr = 0
        methods = []
        while True:
            qr = Finder.getAnnotation(data, "#@"+type, contr, fr, False)
            if (not qr):
                break
            endpoint = qr[0]
            fr = qr[1]

            met = Finder.getName(data, "def", contr, fr)
            if (not met):
                raise SyntaxError(f"Cannot find method for endpoint {endpoint} in {contr}")
            metn = met[0]
            fr = met[1]

            methods.append(
                {
                    "METHOD": metn,
                    "ENDPOINT": endpoint,
                    "TYPE": type
                }
            )
        return methods
