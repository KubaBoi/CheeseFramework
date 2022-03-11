#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import shutil

from cheese.resourceManager import ResMan
from cheeserScripts.controllerBuilder import ControllerBuilder
from cheeserScripts.repositoriesBuilder import RepositoriesBuilder

"""
Builds Cheese Application
"""

class ProjectBuilder:
    def __init__(self, pname):
        self.pname = pname

    def build(self):
        print("=====BUILDING=====")

        self.findSourceFiles()

        #build controllers
        contBuilder = ControllerBuilder(self.sourceFiles)
        contBuilder.buildControllers()

        #build repositorie
        repBuilder = RepositoriesBuilder(self.sourceFiles)
        repBuilder.buildRepositories()

        print("=====DONE======")

    def findSourceFiles(self):
        self.sourceFiles = []
        for (dirpath, dirnames, filenames) in os.walk(ResMan.pythonSrc()):
            print(f"Searching in {dirpath}")
            
            relativePath = ResMan.getRelativePathFrom(dirpath, ResMan.pythonSrc())
            relativePath = os.path.normpath(relativePath).split(os.sep)
            
            for f in filenames:
                if (not f.endswith(".py")):
                    continue

                filePath = []
                for r in relativePath:
                    filePath.append(r)
                filePath.append(f)
                self.sourceFiles.append(filePath[1:])

            


