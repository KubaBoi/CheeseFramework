#cheese

import os

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class ControllerBuilder:
    def __init__(self, parent):
        self.parent = parent

    def build(self):
        controllers = []

        for root, dirs, files in os.walk(ResMan.src()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "controller")): 
                    controllers.append(path)

        self.parent.doJson(controllers, "CONTROLLERS", 
            ["CONTROLLER"],
            [("POST", [("POST",)]), ("GET", [("GET",)])]
        )

