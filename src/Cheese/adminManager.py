#cheese

import os
import json
import time
import sys
import subprocess
import base64
import __main__
import threading

from Cheese.cheeseController import CheeseController
from Cheese.variables import Variables
from Cheese.Logger import Logger
from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings
from Cheese.ErrorCodes import Error
from Cheese.metadata import Metadata
from Cheese.adminFiles import AdminFiles

class AdminManager:

    @staticmethod
    def controller(server):
        if (not AdminManager.authorizeAsAdmin(server)):
            return

        if (server.path == "/admin"):
            AdminManager.__sendFile(server, "/admin/files/index.html") 
            return
        elif (server.path == "/admin/createUser"): #TODO
            AdminManager.__createUser(server)
            return
        elif (server.path.startswith("/admin/logs")):
            AdminManager.__showLogs(server)
            return 
        elif (server.path.startswith("/admin/deleteLog")):
            AdminManager.__deleteLog(server)
            return
        elif (server.path == "/admin/deleteAll"):
            AdminManager.__deleteAll(server)
            return
        elif (server.path == "/admin/getActiveLog"):
            AdminManager.__getActiveLog(server)
            return
        elif (server.path == "/admin/getSettings"):
            AdminManager.__getSettings(server)
            return
        elif (server.path == "/admin/restart"):
            AdminManager.__restartServer(server)
            return
        elif (server.path == "/admin/shutdown"):
            AdminManager.__shutDown(server)
            return
        elif (server.path == "/admin/changeConfiguration"):
            AdminManager.__changeConfig(server)
            return
        elif (server.path == "/admin/update"):
            AdminManager.__update(server)
            return
        elif (server.path == "/admin/cheeseRelease"):
            AdminManager.__getRelease(server)
            return
        AdminManager.__sendFile(server, server.path)        
        

    @staticmethod
    def setAuth():
        AdminManager.users = []
        for user in Metadata.admin["adminUsers"]:
            AdminManager.users.append(base64.b64encode(
                bytes('%s:%s' % (user["name"], user["password"]), 'utf-8')).decode('ascii'))

    @staticmethod
    def authorizeAsAdmin(server):
        if (server.headers.get("Authorization") != None):
            for user in AdminManager.users:
                if (server.headers.get("Authorization") == "Basic " + str(user)):
                    return True
        server.do_AUTHHEAD()
        return False


    # PRIVATE METHODS

    @staticmethod
    def __sendFile(server, file):
        file = file.replace("/", "_").replace(".", "_")
        if (file[0] == "_"):
            file = file[1:]
            
        if (not hasattr(AdminFiles, file)):
            with open(f"{ResMan.error()}/error404.html", "rb") as f:
                CheeseController.sendResponse(server, (f.read(), 404, {"Content-type": "text/html"}))
            return

        CheeseController.sendResponse(server, (bytes(getattr(AdminFiles, file), "utf-8"), 200, {"Content-type": "text/html"}))

    @staticmethod
    def __createUser(server):
        pass

    @staticmethod
    def __showLogs(server):
        CheeseController.sendResponse(server, Logger.serveLogs(server))

    @staticmethod
    def __deleteLog(server):
        args = CheeseController.getArgs(server.path)
        if (not CheeseController.validateJson(["log"], args)):
            CheeseController.sendResponse(server, Error.BadJson)
            return

        log = args["log"]
        path = ResMan.logs(log)
        if (not os.path.exists(path)):
            CheeseController.sendResponse(server, Error.FileNotFound)
            return

        try:
            os.remove(path)
            response = CheeseController.createResponse({"RESPONSE": "OK"})
            CheeseController.sendResponse(server, response)
        except Exception as e:
            Logger.fail("Error while removing log", e, silence=False)
            Error.sendCustomError(server, "File was not deleted", 500)

    @staticmethod
    def __deleteAll(server):
        for root, dirs, files in os.walk(ResMan.logs()):
            activeLog = sorted(files)[-1]

        for root, dirs, files in os.walk(ResMan.logs()):
            for file in files:
                if (file == activeLog): continue
                os.remove(ResMan.logs(file))
        response = CheeseController.createResponse({"RESPONSE": "OK"})
        CheeseController.sendResponse(server, response)

    @staticmethod
    def __getActiveLog(server):
        for root, dirs, files in os.walk(ResMan.logs()):
            activeLog = sorted(files)[-1]
        
        log = ResMan.logs(activeLog)
        with open(f"{log}", "r") as f:
            lines = f.readlines()
            min = 0
            if (len(lines) >= 1000): min = len(lines) - 1000
            onlyTable = "".join(lines[min:(min+1000)])
        response = CheeseController.createResponse({"RESPONSE": {"LOG_DESC": activeLog.replace(".html", ""), "LOG": onlyTable}})
        CheeseController.sendResponse(server, response)

    @staticmethod
    def __getSettings(server):
        js = Settings.loadJson()
        CheeseController.sendResponse(server, (bytes(json.dumps(js), "utf-8"), 200, {"Content-type": "text/html"}))

    @staticmethod
    def __restartServer(server):
        restartThread = threading.Thread(target=AdminManager.__restart, args=(server,))
        restartThread.start()
        CheeseController.sendResponse(server, CheeseController.createResponse({}))

    @staticmethod
    def __restart(server):
        time.sleep(0.5)
        server.server.socket.close()
        if (os.name == "nt"):
            subprocess.call(f"{sys.executable} \"{__main__.__file__}\"")
        else:
            subprocess.call(f"{sys.executable} \"{__main__.__file__}\"", shell=True)

    @staticmethod
    def __shutDown(server):
        Logger.adminInfo(20*"=", silence=False)
        Logger.adminInfo("REQUEST FOR SERVER SHUT DOWN SUCCESSFULLY RECIEVED", silence=False)
        Logger.adminInfo("Shut down will start in 5 seconds", silence=False)
        time.sleep(5)
        server.server.socket.close()

    @staticmethod
    def __changeConfig(server):
        args = CheeseController.getCookies(server)
        try:
            config = json.loads(args["config"])
            Settings.saveJson(config)
        except Exception as e:
            Logger.fail("ERROR while saving configuration", e)
            Error.sendCustomError(server, "Error while saving configuration", 500)
            return

        Logger.adminInfo("Configuration was updated.", silence=False)
        Logger.adminInfo("Restart to apply changes.", silence=False)
        response = CheeseController.createResponse({"STATUS": "ok"})
        CheeseController.sendResponse(server, response)
        
    @staticmethod
    def __update(server):
        Logger.adminInfo(20*"=", silence=False)
        Logger.adminInfo("Updating from git", silence=False)
        subprocess.call(f"cd {ResMan.root()}; git pull", shell=True)
        Logger.adminInfo("Project has been updated. Restart to apply changes.", silence=False)
        response = CheeseController.createResponse({"RESPONSE": "OK"})
        CheeseController.sendResponse(server, response)

    @staticmethod
    def __getRelease(server):
        response = CheeseController.createResponse({"RELEASE": Variables.release})
        CheeseController.sendResponse(server, response)