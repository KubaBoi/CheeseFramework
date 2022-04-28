#cheese

from cheese.variables import Variables
from cheeserScripts.checkVersion import Updater
Updater.checkUpdate(Variables.release)

from cheeserScripts.builders.projectGenerator import ProjectGenerator
from cheeserScripts.builders.projectBuilder import ProjectBuilder
from cheeserScripts.api.createByDb import CreateByDB
from cheeserScripts.api.createApi import ApiControllerCreator as api
from cheeserScripts.api.generateApi import ApiGenerator as apiG
from cheese.resourceManager import ResMan


__author__ = "Jakub Anderle"
__version__ = "1.0.0"
__maintainer__ = "Jakub Anderle"
__email__ = "jakubanderle@outlook.cz"
__status__ = "Development"

class Cheeser:

    @staticmethod
    def help():
        print("Cheeser.generate(<path>, generateFiles=True)")
        print("    - generates empty project for Cheese Application")
        print("    - path needs to be full from root")
        print("    - generateFiles - if True - generate templates for controllers, models and repositories")
        
        print("Cheeser.database()")
        print("    - generates models and repositories from tables of database")
        print("    - need to set appProperties.json")

        print("Cheeser.controllers()")
        print("    - generate controllers by api.html")
        
        print("Cheeser.createApi()")
        print("    - tool for creating api.html")

        print("Cheeser.build()")
        print("    - builds application (creates necessary files)")
        print("    - THIS IS CALLED ON START OF APPLICATION - no need to do it manually")


    @staticmethod
    def generate(path, generateFiles=True):
        ProjectGenerator.generate(path, generateFiles)

    @staticmethod
    def build():
        builder = ProjectBuilder()
        builder.build()

    @staticmethod
    def database(path):
        print("Sorry this is still WIP")
        return
        CreateByDB.createFiles()

    @staticmethod
    def controllers(path):
        print("Sorry this is still WIP")
        return
        api.createApiControllers()

    @staticmethod
    def createApi(path):
        print("Sorry this is still WIP")
        return

        apiG.generateApi()
