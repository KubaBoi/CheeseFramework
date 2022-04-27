#cheese

import os
import shutil

from Cheese.resourceManager import ResMan
from Cheese.controllerBuilder import ControllerBuilder
from Cheese.repositoriesBuilder import RepositoriesBuilder

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

        #build repositories
        repBuilder = RepositoriesBuilder(self.sourceFiles)
        repBuilder.buildRepositories()

        gets = 0
        posts = 0
        for cont in contBuilder.controllers:
            gets += len(cont["get"])
            posts += len(cont["post"])

        query = 0
        commit = 0
        for rep in repBuilder.repositories:
            query += len(rep["queries"])
            commit += len(rep["commits"])

        print("=====DONE======")
        print(f"Created {len(contBuilder.controllers)} controllers")
        print(f"GET methods: {gets}")
        print(f"POST methods: {posts}")
        print(10*"=")
        print(f"Created {len(repBuilder.repositories)} repositories and {len(repBuilder.models)} models")
        print(f"QUERY methods: {query}")
        print(f"COMMIT methods: {commit}")

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

            


