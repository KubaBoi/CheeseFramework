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
        self.debug = False

    def generate(self):
        self.generateRoot()
        self.generateStructure()
        self.copyFramework()
        self.generateFiles()
        self.removePyCache()

    def generateFolder(self, path):
        if (self.debug):
            print(f"Generating {path}")
        if not os.path.exists(path):
            os.makedirs(path)
        elif (self.debug):
            print(f"{path} already exists. Skipping")

    def generateFile(self, template, copy):
        if (self.debug):
            print(f"Generating {copy[0]}")
        for file in copy:
            if (os.path.exists(file)):
                if (self.debug):
                    print(f"{file} already exists. Skipping")
                return

        with open(f"{Path(__file__).parent.parent}/templates/{template}", "r") as r:
            with open(copy[0], "w") as w:
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
        if (self.debug):
            print("=====Generating Files=====")
        if (not os.path.exists(f"{ResMan.src()}/{self.pname}.py") and not os.path.exists(f"{ResMan.src()}/{self.pname}.pyw")):
            self.generateFile("HelloWorldController.py", [f"{ResMan.pythonSrc()}/controllers/HelloWorldController.py"])

        self.generateFile("mainTemplate.py", [f"{ResMan.src()}/{self.pname}.py", f"{ResMan.src()}/{self.pname}.pyw"])
        self.generateFile("appSettings.json", [f"{ResMan.root()}/appSettings.json"])
        self.generateFile("adminSettings.json", [f"{ResMan.root()}/adminSettings.json"])
        self.generateFile("authExceptions.json", [f"{ResMan.root()}/authExceptions.json"])
        self.generateFile("index.html", [f"{ResMan.web()}/index.html"])
        self.generateFile("api.html", [f"{ResMan.web()}/api.html"])
        self.generateFile("error404.html", [f"{ResMan.error()}/error404.html"])
        self.generateFile("authorization.py", [f"{ResMan.pythonSrc()}/authorization.py"])
        self.generateFile(".gitignore", [f"{ResMan.root()}/.gitignore"])

    def copyFramework(self):
        if (self.debug):
            print("=====Copying Framework=====")
        fmPath = f"{ResMan.src()}/cheese"
        if os.path.exists(fmPath):
            shutil.rmtree(fmPath)
        if (self.debug):
            print(f"{Path(__file__).parent.parent}/cheese", f"{ResMan.src()}/cheese")
        shutil.copytree(f"{Path(__file__).parent.parent}/cheese", f"{ResMan.src()}/cheese")

    def removePyCache(self):
        if (self.debug):
            print("Removing old pyCache")
        for (dirpath, dirnames, filenames) in os.walk(ResMan.root()):
            if (dirpath.endswith("__pycache__")):
                shutil.rmtree(dirpath)