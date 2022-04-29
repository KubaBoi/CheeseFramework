#cheese

from distutils.command.build import build
import os
import json
import shutil
import ctypes

from cheese.resourceManager import ResMan
from cheeserScripts.builders.controllerBuilder import ControllerBuilder
from cheeserScripts.builders.repositoriesBuilder import RepositoriesBuilder

"""
Builds Cheese Application
"""

class ProjectBuilder:

    def build(self):
        print("=====BUILDING=====")

        if (os.path.exists(ResMan.metadata())):
            shutil.rmtree(ResMan.metadata())
        
        os.mkdir(ResMan.metadata())
        FILE_ATTRIBUTE_HIDDEN = 0x02
        ctypes.windll.kernel32.SetFileAttributesW(ResMan.metadata(), FILE_ATTRIBUTE_HIDDEN)

        #build controllers
        contBuilder = ControllerBuilder()
        contBuilder.build()

        #build repositories
        repBuilder = RepositoriesBuilder()
        repBuilder.build()

        self.count()
            
    def count(self):
        with open(os.path.join(ResMan.metadata(), "repMetadata.json"), "r") as f:
            data = json.loads(f.read())
            repos = data["REPOSITORIES"]
            mods = data["MODELS"]

        with open(os.path.join(ResMan.metadata(), "contMetadata.json"), "r") as f:
            contrs = json.loads(f.read())["CONTROLLERS"]

        gets = 0
        posts = 0
        for cont in contrs:
            for method in cont["METHODS"]:
                if (method["TYPE"] == "get"): gets += 1
                elif (method["TYPE"] == "post"): posts += 1

        queries = 0
        commits = 0
        for repo in repos:
            for method in repo["METHODS"]:
                if (method["TYPE"] == "query"): queries += 1
                elif (method["TYPE"] == "commit"): commits += 1

        print("Build successfull:")
        print(f"Controllers: {len(contrs)}")
        print("GET methods: {gets}")
        print("POST methods: {posts}")
        print("")
        print(f"Repositories: {len(repos)}")
        print(f"query methods: {queries}")
        print(f"commit methods: {commits}")
        print("")
        print(f"Models: {len(mods)}")
        
        if (len(mods) == len(repos)):
            print("")
            print("====WARNING=====")
            print("Theres is different count of models and repositories")
            print("Didn't you forget to annotate anything?")
        print("")


