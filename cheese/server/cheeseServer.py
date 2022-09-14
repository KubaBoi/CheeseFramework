#cheese

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
from Cheese.cheeseNone import CheeseNone

from cheese.modules.cheeseController import CheeseController

class CheeseServerMulti(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""

class CheeseServer(HTTPServer):
    """Handle requests in one thread."""

class CheeseHandler(BaseHTTPRequestHandler):
    """
    Server handler
    """

    def do_AUTHHEAD(self):
        """
        Admin auth
        """
        self.send_response(401)
        self.send_header(
            'WWW-Authenticate', 'Basic realm="Demo Realm"')
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_GET(self):
        """
        GET handler
        """
        if (self.path.startswith("/admin")):
            AdminManager.controller(self)
            return
        if (self.path == "/alive"):
            cc.sendResponse(self, cc.createResponse({"RESPONSE": "Yes"}, 200))
            return
        self.__log()
        try:
            auth = Security.authenticate(self, self.path)

            endpoint = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoint, "GET")
            if (not controller):
                if (self.path == "/"):
                    cc.serveFile(self, "index.html")
                    return
                else:
                    cc.serveFile(self, CheeseController.getPath(self.path))
                    return
            else:
                response = controller(self, self.path, auth)
                if (not isinstance(response, CheeseNone)):
                    cc.sendResponse(self, response)

        except Exception as e:
            Error.handleError(self, e)

    def do_POST(self):
        """
        GET handler
        """
        self.__log()
        try:
            auth = Security.authenticate(self, self.path)

            endpoints = cc.getPath(self.path)
            controller = Metadata.findMethod(endpoints, "POST")
            if (not controller):
                raise NotFound("Endpoint not found :(")
            else:
                response = controller(self, self.path, auth)
                if (not isinstance(response, CheeseNone)):
                    cc.sendResponse(self, response)

        except Exception as e:
            Error.handleError(self, e)

    def end_headers(self):
        """
        End headers
        """
        if (Settings.allowCORS):
            self.send_header("Access-Control-Allow-Origin", "*")
        BaseHTTPRequestHandler.end_headers(self)

    def log_message(self, format, *args):
        """
        Disable nativ server logs
        """
        return

    def __log(self):
        """
        Server logs
        """
        Logger.okGreen(f"{self.client_address[0]} - {self.command} \"{self.path}\"")

