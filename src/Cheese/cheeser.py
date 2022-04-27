#cheese

from Cheese.variables import Variables
from Cheese.checkVersion import Updater
Updater.checkUpdate(Variables.release)

from Cheese.projectGenerator import ProjectGenerator
from Cheese.projectBuilder import ProjectBuilder
from Cheese.createByDb import CreateByDB
from Cheese.createApi import ApiControllerCreator as api
from Cheese.generateApi import ApiGenerator as apiG
from Cheese.resourceManager import ResMan


__author__ = "Jakub Anderle"
__version__ = "1.0.0"
__maintainer__ = "Jakub Anderle"
__email__ = "jakubanderle@outlook.cz"
__status__ = "Development"

class Cheeser:

    @staticmethod
    def help():
        print("Cheeser.generate(<path>)")
        print("    - generates empty project for Cheese Application")
        print("    - path needs to be full from root")
        
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
    def generate(path):
        ResMan.setPath(path)
        generator = ProjectGenerator(path)
        generator.generate()

    @staticmethod
    def build():
        builder = ProjectBuilder()
        builder.build()

    @staticmethod
    def database():
        CreateByDB.createFiles()

    @staticmethod
    def controllers():
        api.createApiControllers()

    @staticmethod
    def createApi():
        apiG.generateApi()