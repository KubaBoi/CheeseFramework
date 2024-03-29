#cheese

import os
import sys
import requests
import json
from traceback import format_exc

from Cheese.projectBuilder import ProjectBuilder
from Cheese.variables import Variables
from Cheese.metadata import Metadata
from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings
from Cheese.ErrorCodes import Error
from Cheese.Logger import Logger
from Cheese.adminManager import AdminManager

class CheeseBurger:
    """
    Application main class
    """

    @staticmethod
    def init():
        """
        Application initialization
        """
        try:
            # initialization of root directory
            ResMan.setPath(os.getcwd())

            # loads application settings
            Settings.loadSettings()

            #init logger
            Logger.initLogger()

            # application build
            if (Settings.allowDebug):
                builder = ProjectBuilder()
                if (not builder.build()):
                    sys.exit()

            # loads metadata
            Metadata.loadMetadata()

            if (Settings.allowDebug):
                from Cheese.cheeseTests import CheeseTests
                CheeseTests.testAll()

            # init errors
            Error.init()

            # log new line
            print()
            Logger.bold(10*"=" + f"Start in file {ResMan.path}" + 10*"=", False, False)

            # check licence
            CheeseBurger.loadLicence()
            Logger.warning(f"Builded with CheeseFramework v({Metadata.cheeseRelease})", silence=False)
            print()

            # connect to database
            if (Settings.allowDB):
                from Cheese.database import Database
                Logger.warning("Initializing database connection...", silence=False)
                try:
                    db = Database()
                    db.connect()
                    db.close()
                    Logger.okBlue(f"CONNECTED TO {Settings.dbHost}:{Settings.dbPort} {Settings.dbName}", silence=False)
                except Exception as e:
                    Logger.fail(f"CONNECTION TO {Settings.dbHost}:{Settings.dbPort} {Settings.dbName} CANNOT BE DONE", e, silence=False)
            else:
                Logger.warning("Database connection is turned off", silence=False)

            # initialization of admin users
            AdminManager.setAuth()

            # initialization of server
            CheeseBurger.initServer()
        except Exception as e:
            print(f"\n{20*'='}\n{repr(e)}\n{format_exc()}\n{10*'='}")
            print("")
            print("Uuups... something went wrong while implementing Cheese")
            print("Check if there are all necessary files in your project")
            print(Variables.documentation)
            print(20*"=")
            sys.exit()

    # initialization application server
    @staticmethod
    def initServer():
        """
        HTTP server intialization
        """
        from Cheese.cheeseServer import CheeseServerMulti, CheeseServer, CheeseHandler

        if (Settings.allowMultiThreading):
            CheeseBurger.server = CheeseServerMulti(("0.0.0.0", Settings.port), CheeseHandler)
        else:
            CheeseBurger.server = CheeseServer(("0.0.0.0", Settings.port), CheeseHandler)

    # start server
    @staticmethod
    def serveForever():
        """
        Starts HTTP server
        """
        Logger.info(f"Server Starts - {Settings.host}:{Settings.port}", silence=False)
        try:
            CheeseBurger.server.serve_forever()
        except KeyboardInterrupt:
            pass
        except OSError:
            Logger.warning("SHUTING SERVER DOWN")
        except Exception as e:
            Logger.fail("UNKNOWN ERROR WHILE RUNNING SERVER ", e)
        Logger.info(f"Server Stops - {Settings.host}:{Settings.port}", silence=False)
        sys.exit()

    @staticmethod
    def loadLicence():
        """
        Loads licence
        """
        Settings.activeLicense = "me"
        return
        if (not hasattr(Settings, "licenseCode")):
            Logger.warning("No license")
            Settings.activeLicense = ""
            return

        if (Settings.licenseCode == ""): 
            Logger.warning("No license")
            Settings.activeLicense = ""
            return
        
        try:
            r = requests.get(f"http://frogie.cz:6969/licence/authLic?code={Settings.licenseCode}")
            if (r.status_code == 401): 
                Logger.bold("License: none", False, False)
                Settings.activeLicense = ""
                return

            Settings.activeLicense = json.loads(r.text)["LICENCE"]
            if (Settings.activeLicense == "full access" or Settings.activeLicense == "me"):
                Logger.okGreen("License: " + Settings.activeLicense, False, False)
            elif (Settings.activeLicense == "free access"):
                Logger.warning("License: " + Settings.activeLicense, False, False)

        except Exception as e:
            Logger.warning("Unable to contact licensing server", silence=False)
            Settings.activateLincense = ""

    

