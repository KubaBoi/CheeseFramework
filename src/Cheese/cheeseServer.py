#cheese

import json

from http.server import HTTPServer, BaseHTTPRequestHandler
from socketserver import ThreadingMixIn

from Cheese.metadata import Metadata
from Cheese.appSettings import Settings
from Cheese.cheeseController import CheeseController as cc
from Cheese.adminManager import AdminManager
from Cheese.Logger import Logger
from Cheese.ErrorCodes import Error

"""
File generated by Cheese Framework

server handler of Cheese Application
"""

class CheeseServerMulti(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""

class CheeseServer(HTTPServer):
    """Handle requests in one thread."""

class CheeseHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if (self.path.startswith("/admin")):
            AdminManager.controller(self)
            return
        self.__log()
        if (self.path == "/alive"):
            cc.sendResponse(self, cc.createResponse({"RESPONSE": "Yes"}, 200))
            return
        try:
            endpoint = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoint, "GET")
            if (not controller):
                if (self.path.endswith(".css")):
                    cc.serveFile(self, self.path, "text/css")
                else:
                    if (self.path == "/"):
                        cc.serveFile(self, "index.html")
                    else:
                        cc.serveFile(self, self.path)
            else:
                controller(self, self.path, None)

        except Exception as e:
            if (type(e) is SystemError):
                error = e
                errorMessage = f"\n{Logger.WARNING}{error.args[0]}{Logger.FAIL}"
                while (len(error.args) > 1):
                    error = error.args[1]
                    errorMessage += "\n" + 20*"==" + "\n"
                    errorMessage += "\n" + f"{Logger.WARNING}{error.args[0]}{Logger.FAIL}"
                    
                Logger.fail(f"SystemError occurred: {errorMessage}", False)
                Error.sendCustomError(self, error.args[0], 500)
            elif (type(e) is SyntaxError):
                error = e
                while (len(error.args) > 1):
                    error = error.args[-1]
                Logger.fail(f"SyntaxError occurred {error.args[0]}")
                Error.sendCustomError(self, error.args[0], 500)
            else:
                Logger.fail(f"An error unknown occurred {e.args[0]}")
                Error.sendCustomError(self, "Internal server error :(", 500)

    def do_POST(self):
        self.__log()
        try:
            endpoints = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoints, "POST")
            if (not controller):
                Error.sendCustomError(self, "Endpoint not found :(", 404)
            else:
                controller(self, self.path, None)

        except Exception as e:
            if (type(e) is SystemError):
                Logger.fail("SystemError occurred")
                error = e
                while (len(error.args) > 1):
                    error = error.args[-1]
                Error.sendCustomError(self, error.args[0], 500)
            else:
                Logger.fail("An error unknown occurred")
                Error.sendCustomError(self, "Internal server error :(", 500)

    def end_headers(self):
        if (Settings.allowCORS):
            self.send_header("Access-Control-Allow-Origin", "*")
            BaseHTTPRequestHandler.end_headers(self)
        else:
            self.send_header("Content-type", "application/json")

    def log_message(self, format, *args):
        return

    def __log(self):
        Logger.okGreen(f"{self.client_address[0]} - {self.command} \"{self.path}\"")

