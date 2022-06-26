#cheese

from urllib.parse import unquote
import os
import json
import time

from Cheese.httpClientErrors import *
from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings
from Cheese.Logger import Logger

class CheeseController:
    """
    ```CheeseController``` is static class for controlling endpoints. 

    Controller documentation:
    https://kubaboi.github.io/CheeseFramework/#71-api-controllers
    """
    
    @staticmethod
    def getClientAddress(server) -> str:
        """
        return client's address

        ```server``` is instance of http handler
        """
        return server.client_address[0]

    @staticmethod
    def getHeaders(server) -> list:
        """
        return requests headers
        
        ```server``` is instance of http handler
        """
        return server.headers._headers

    @staticmethod
    def getHeadersDict(server) -> dict:
        """
        return request headers as dict

        ```server``` is instance of http handler
        """
        headers = {}
        for header in server.headers._headers:
            headers[header[0]] = header[1]
        return headers

    @staticmethod
    def modulesToJsonArray(modules) -> list:
        """
        return json array from list of modules

        ```modules``` is list of CheeseModel instances
        """        
        jsonArray = []
        for m in modules:
            jsonArray.append(m.toJson())
        return jsonArray

    @staticmethod
    def getTime(addTime=0) -> int:
        """
        return now time and add argument in seconds

        ```addTime``` is time in ```seconds``` which will be added to now time. It can be negative value.
        """
        return int(time.time()) + addTime

    @staticmethod
    def validateJson(keys, dict) -> bool:
        """
        return true if all keys are in dictionary

        ```keys``` is list of keys that should be in ```dict```

        ```dict``` is tested dictionary
        """
        for key in keys:
            if (key not in dict):
                return False
        return True

    @staticmethod
    def checkJson(keys, dict) -> BadRequest:
        """
        raise BadRequest exception if any key is missing in json

        ```keys``` is list of keys that should be in ```dict```

        ```dict``` is tested dictionary
        """
        if (CheeseController.validateJson(keys, dict)): return
        raise BadRequest("Wrong json structure")

    @staticmethod
    def getPath(url) -> str:
        """
        return path without arguments

        ```url``` is url of request

        splits url by ```?``` and return first part

        example:
        ```
        "hello/world?foo=0" -> "hello/world"
        ```
        """
        return url.split("?")[0]

    @staticmethod
    def getEndpoints(url) -> list:
        """
        return list of endpoints

        ```url``` is url of request

        splits url by ```/``` and returns this list

        example:
        ```
        "hello/world/gut" -> ["hello", "world", "gut"]
        ```
        """
        url = CheeseController.getPath(url).replace("/", " ").strip()
        return url.split(" ")

    @staticmethod
    def getArgs(url, decode=True) -> dict:
        """
        return arguments from rest request url

        ```url``` is url of request

        ```decode``` if true than decode URL-encoded format
        """
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

    @staticmethod
    def readBytes(server) -> bytes:
        """
        return bytes from post body

        ```server``` is instance of http handler
        """
        try:
            content_len = int(server.headers.get('Content-Length'))
            post_body = server.rfile.read(content_len)
            return post_body
        except:
            return False

    @staticmethod
    def readArgs(server) -> dict:
        """
        return arguments from body of request as dictionary

        ```server``` is instance of http handler
        """
        try:
            content_len = int(server.headers.get('Content-Length'))
            post_body = server.rfile.read(content_len).decode("utf-8")
            return json.loads(post_body)
        except:
            return {}

    @staticmethod
    def getCookies(server) -> dict:
        """
        return cookies as dictionary from request header

        ```server``` is instance of http handler 
        """
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

    @staticmethod
    def serveFile(server, file, header="text/html") -> None:
        """
        sends file located in ```/web``` directory

        ```server``` is instance of http handler

        ```file``` is string path to any file located in ```/web``` directory

        ```header``` is string of header for http response 
        """
        file = unquote(file)
        file = ResMan.joinPath(ResMan.web(), file)

        Logger.info(f"Serving file: {file}")
        
        if (not os.path.exists(f"{file}")):
            with open(os.path.join(ResMan.error(), "error404.html"), "rb") as f:
                CheeseController.sendResponse(server, (f.read(), 404, {"Content-type": "text/html"}))
            return

        if (file.endswith(".html")):
            with open(f"{file}", "r", encoding="utf-8") as f:
                data = f.read()

            if (Settings.allowDebug):
                if (data.find("</body>") != -1):
                    data = (data.split("</body>")[0] + "<label style='position: fixed;left: 5px;bottom: 5px; font-family: Arial, Helvetica, sans-serif;'>"
                    + f"{Settings.name} v({Settings.version}) </label></body>{data.split('</body>')[1]}")
            
            if (not CheeseController.checkLicense()):
                if (data.find("</body>") != -1):
                    data = (data.split("</body>")[0] + "<label style='position: fixed;right: 5px;bottom: 5px; font-family: Arial, Helvetica, sans-serif;'>"
                    + "Powered By <a href='https://kubaboi.github.io/CheeseFramework/'"
                    + "style='color: var(--text-color);' target='_blank'>Cheese Framework</a> </label></body>" + data.split("</body>")[1])

            CheeseController.sendResponse(server, (bytes(data, "utf-8"), 200, {"Content-type": header}))
        else:
            with open(f"{file}", "rb") as f:
                CheeseController.sendResponse(server, (f.read(), 200, {"Content-type": header}))

    @staticmethod
    def createResponse(dict, code=200, headers={"Content-type": "text/html"}) -> tuple:
        """
        create response as tuple
        
        ```dict``` is response dictionary. Dictionary will be dumped by ```json``` library 
        and coded into bytes with ```utf-8``` coding. 

        ```code``` is http status code as ```int```

        ```headers``` is dict with headers and its values
        """

        if ("Content-type" not in headers.keys()):
            headers["Content-type"] = "text/html"

        return (bytes(json.dumps(dict, indent=4, sort_keys=True, default=str), "utf-8"), code, headers)

    @staticmethod
    def sendResponse(server, response) -> None:
        """
        send response to client

        ```server``` is instance of http handler

        ```response``` is tuple (response object created in ```CheeseController.createResponse(...)``` method)
        """
        server.send_response(response[1])
        for headerKey in response[2].keys():
            server.send_header(headerKey, response[2][headerKey])
        server.end_headers()

        server.wfile.write(response[0])

    @staticmethod
    def checkLicense() -> bool:
        """
        checks license
        """
        if (Settings.activeLicense == "me" or Settings.activeLicense == "full access"):
            return True
        return False
