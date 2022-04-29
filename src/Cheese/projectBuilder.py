#cheese

from distutils.command.build import build
import os
import json
import shutil
import ctypes

from Cheese.resourceManager import ResMan
from Cheese.Logger import Logger
from Cheese.controllerBuilder import ControllerBuilder
from Cheese.repositoriesBuilder import RepositoriesBuilder

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

        Logger.okGreen("Build successfull:", False, False)
        Logger.info(f"Controllers: {len(contrs)}", False, False)
        Logger.info("GET methods: {gets}", False, False)
        Logger.info("POST methods: {posts}", False, False)
        Logger.info("", False, False)
        Logger.info(f"Repositories: {len(repos)}", False, False)
        Logger.info(f"query methods: {queries}", False, False)
        Logger.info(f"commit methods: {commits}", False, False)
        Logger.info("", False, False)
        Logger.info(f"Models: {len(mods)}", False, False)
        
        if (len(mods) != len(repos)):
            Logger.warning("====WARNING=====", False, False)
            Logger.warning("Theres is different count of models and repositories", False, False)
            Logger.warning("Didn't you forget to annotate anything?", False, False)


