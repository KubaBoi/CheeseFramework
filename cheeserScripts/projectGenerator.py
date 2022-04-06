#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import shutil
from pathlib import Path

from cheese.resourceManager import ResMan

"""
Generates structure of Cheese Application
"""

class ProjectGenerator:
    def __init__(self, pname):
        self.pname = pname

    def generate(self):
        self.generateRoot()
        self.generateStructure()
        self.copyFramework()
        self.generateFiles()
        self.removePyCache()

    def generateFolder(self, path):
        print(f"Generating {path}")
        if not os.path.exists(path):
            os.makedirs(path)
        else:
            print(f"{path} already exists. Skipping")

    def generateFile(self, template, copy):
        print(f"Generating {copy}")
        if (os.path.exists(copy)):
            print(f"{copy} already exists. Skipping")
        else:
            with open(f"{Path(__file__).parent.parent}/templates/{template}", "r") as r:
                with open(copy, "w") as w:
                    w.write(r.read())

    def generateRoot(self):
        self.generateFolder(ResMan.root())

    def generateStructure(self):
        self.generateFolder(ResMan.src())
        self.generateFolder(ResMan.pythonSrc())
        self.generateFolder(ResMan.resources())
        self.generateFolder(ResMan.tests())
        self.generateFolder(ResMan.web())
        self.generateFolder(ResMan.error())
        self.generateFolder(ResMan.root() + "/logs")
        self.generateFolder(ResMan.pythonSrc() + "/controllers")
        self.generateFolder(ResMan.pythonSrc() + "/models")
        self.generateFolder(ResMan.pythonSrc() + "/repositories")

    def generateFiles(self):
        print("=====Generating Files=====")
        if (not os.path.exists(f"{ResMan.src()}/{self.pname}.py")):
            pass
        self.generateFile("HelloWorldController.py", f"{ResMan.pythonSrc()}/controllers/HelloWorldController.py")

        self.generateFile("mainTemplate.py", f"{ResMan.src()}/{self.pname}.py")
        self.generateFile("appSettings.json", f"{ResMan.root()}/appSettings.json")
        self.generateFile("adminSettings.json", f"{ResMan.root()}/adminSettings.json")
        self.generateFile("index.html", f"{ResMan.web()}/index.html")
        self.generateFile("api.html", f"{ResMan.web()}/api.html")
        self.generateFile("error404.html", f"{ResMan.error()}/error404.html")
        self.generateFile("authorization.py", f"{ResMan.pythonSrc()}/authorization.py")
        self.generateFile(".gitignore", f"{ResMan.root()}/.gitignore")

    def copyFramework(self):
        print("=====Copying Framework=====")
        fmPath = f"{ResMan.src()}/cheese"
        if os.path.exists(fmPath):
            shutil.rmtree(fmPath)
        print(f"{Path(__file__).parent.parent}/cheese", f"{ResMan.src()}/cheese")
        shutil.copytree(f"{Path(__file__).parent.parent}/cheese", f"{ResMan.src()}/cheese")

    def removePyCache(self):
        print("Removing old pyCache")
        for (dirpath, dirnames, filenames) in os.walk(ResMan.root()):
            if (dirpath.endswith("__pycache__")):
                shutil.rmtree(dirpath)