#cheese

import json

from http.server import HTTPServer, BaseHTTPRequestHandler
from socketserver import ThreadingMixIn

from Cheese.metadata import Metadata
from Cheese.appSettings import Settings
from Cheese.cheeseController import CheeseController as cc
from Cheese.adminManager import AdminManager
from Cheese.Logger import Logger
from Cheese.httpClientErrors import *
from Cheese.httpServerError import *
from Cheese.ErrorCodes import Error
from Cheese.security import Security

"""
File generated by Cheese Framework

server handler of Cheese Application
"""

class CheeseServerMulti(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""

class CheeseServer(HTTPServer):
    """Handle requests in one thread."""

class CheeseHandler(BaseHTTPRequestHandler):
    def do_AUTHHEAD(self):
        self.send_response(401)
        self.send_header(
            'WWW-Authenticate', 'Basic realm="Demo Realm"')
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        if (self.path.startswith("/admin")):
            AdminManager.controller(self)
            return
        self.__log()
        if (self.path == "/alive"):
            cc.sendResponse(self, cc.createResponse({"RESPONSE": "Yes"}, 200))
            return
        try:
            auth = Security.authenticate(self, self.path)

            if (auth == False):
                raise Unauthorized("Wrong credentials")

            endpoint = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoint, "GET")
            if (not controller):
                if (self.path.endswith(".css")):
                    cc.serveFile(self, self.path, "text/css")
                    return
                else:
                    if (self.path == "/"):
                        cc.serveFile(self, "index.html")
                        return
                    else:
                        cc.serveFile(self, self.path)
                        return
            else:
                response = controller(self, self.path, auth)
                cc.sendResponse(self, response)

        except Exception as e:
            Error.handleError(self, e)

    def do_POST(self):
        self.__log()
        try:
            auth = Security.authenticate(self, self.path)

            if (auth == False):
                raise Unauthorized("Wrong credentials")

            endpoints = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoints, "POST")
            if (not controller):
                raise NotFound("Endpoint not found :(")
            else:
                response = controller(self, self.path, auth)
                cc.sendResponse(self, response)

        except Exception as e:
            Error.handleError(self, e)

    def end_headers(self):
        if (Settings.allowCORS):
            self.send_header("Access-Control-Allow-Origin", "*")
        BaseHTTPRequestHandler.end_headers(self)

    def log_message(self, format, *args):
        return

    def __log(self):
        Logger.okGreen(f"{self.client_address[0]} - {self.command} \"{self.path}\"")

