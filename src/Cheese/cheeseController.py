#cheese

from platform import platform
from urllib.parse import unquote
import os
import json
import time
from http.cookies import SimpleCookie

from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings
from Cheese.Logger import Logger

"""
File generated by Cheese Framework

REST controller of Cheese Application
"""

class CheeseController:

    # return client address
    @staticmethod
    def getClientAddress(server):
        return server.client_address[0]

    # return response
    @staticmethod
    def createResponse(dict, code):
        return (bytes(json.dumps(dict, indent=4, sort_keys=True, default=str), "utf-8"), code)

    # return json array from array of modules
    @staticmethod
    def modulesToJsonArray(modules):
        jsonArray = []
        for m in modules:
            jsonArray.append(m.toJson())
        return jsonArray

    # return now time and add argument in seconds
    @staticmethod
    def getTime(addTime=0):
        return int(time.time()) + addTime

    # return true if all keys are in dictionary
    @staticmethod
    def validateJson(keys, dict):
        for key in keys:
            if (key not in dict):
                return False
        return True

    # return path without arguments
    @staticmethod
    def getPath(url):
        return url.split("?")[0]

    # return arguments from rest request url
    @staticmethod
    def getArgs(url, decode=True):
        arguments = {}

        if (os.name != "nt"):
            url = url.replace("\\", "/")

        argsArray = url.split("?")
        if (len(argsArray) > 1):
            argsArray = argsArray[1].split("&")
            for arg in argsArray:
                spl = arg.split("=")
                if (decode):
                    arguments[spl[0]] = unquote(spl[1])
                else:
                    arguments[spl[0]] = spl[1]
        return arguments

    # return bytes from post body
    @staticmethod
    def readBytes(server):
        try:
            content_len = int(server.headers.get('Content-Length'))
            post_body = server.rfile.read(content_len)
            return post_body
        except:
            return False

    # return arguments from body of request 
    @staticmethod
    def readArgs(server):
        try:
            content_len = int(server.headers.get('Content-Length'))
            post_body = server.rfile.read(content_len).decode("utf-8")
            return json.loads(post_body)
        except:
            return {}

    # return cookie dictionary
    @staticmethod
    def getCookies(server):
        cookieRaw = ""
        for header in server.headers._headers:
            if (header[0] == "Cookie"):
                cookieRaw = ":".join(header[1:])

        cookies = {}
        newCookieName = ""
        index = 0
        while True:
            if (index >= len(cookieRaw)): break

            if (cookieRaw[index] == " "):
                index += 1 
                continue
            
            while (cookieRaw[index] != "="):
                newCookieName += cookieRaw[index]
                index += 1

            cookies[newCookieName] = ""  
            index += 1              

            while (cookieRaw[index] != ";"):
                cookies[newCookieName] += cookieRaw[index]
                index += 1
                if (index >= len(cookieRaw)): break
            
            index += 1
            newCookieName = ""
        
        return cookies

    # send file
    @staticmethod
    def serveFile(server, file, header="text/html"):
        file = unquote(file)
        file = ResMan.joinPath(ResMan.web(), file)

        Logger.info(f"Serving file: {file}")
        
        if (not os.path.exists(f"{file}")):
            with open(os.path.join(ResMan.error(), "error404.html"), "rb") as f:
                CheeseController.sendResponse(server, (f.read(), 404))
            return

        if (file.endswith(".html") and not CheeseController.checkLicense()):
            with open(f"{file}", "r", encoding="utf-8") as f:
                data = f.read()
                if (data.find("</body>") != -1):
                    data = (data.split("</body>")[0] + "<label style='position: fixed;right: 5px;bottom: 5px; font-family: Arial, Helvetica, sans-serif;'>"
                    + "Powered By <a href='https://kubaboi.github.io/CheeseFramework/'"
                    + "style='color: var(--text-color);' target='_blank'>Cheese Framework</a> </label></body>" + data.split("</body>")[1])
                CheeseController.sendResponse(server, (bytes(data, "utf-8"), 200), header)
        else:
            with open(f"{file}", "rb") as f:
                CheeseController.sendResponse(server, (f.read(), 200), header)

    # send response
    @staticmethod
    def sendResponse(server, response, contentType="text/html"):
        server.send_response(response[1])
        server.send_header("Content-type", contentType)
        server.end_headers()

        server.wfile.write(response[0])

    # checks license
    @staticmethod
    def checkLicense():
        if (Settings.activeLicense == "me" or Settings.activeLicense == "full access"):
            return True
        return False