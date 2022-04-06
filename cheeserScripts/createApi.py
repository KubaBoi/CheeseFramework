import os
import json
from bs4 import BeautifulSoup
from cheese.resourceManager import ResMan

from cheeserScripts.createByDb import CreateByDB

class ApiControllerCreator:

    @staticmethod
    def createApiControllers(path):
        ResMan.setPath(path)

        with open(f"{ResMan.web()}/api.html", "r") as f:
            api = f.read()

        ApiControllerCreator.soup = BeautifulSoup(api)

        spans = ApiControllerCreator.soup.findAll("span")
        for span in spans:
            if (span["id"].find(".") == -1 and not span.text.endswith("WIP")):
                ApiControllerCreator.createController(span)

    @staticmethod
    def createController(span):
        controllerFileName = span.text.replace("/", "").capitalize() + "Controller"
        if (os.path.exists(f"{ResMan.pythonSrc()}/controllers/{controllerFileName}.py")):
            return
        print(f"Creating controller: {span.text}")

        content = "#!/usr/bin/env python\n"
        content += "# -*- coding: utf-8 -*-\n\n"
        content += "from cheese.modules.cheeseController import CheeseController as cc\n"
        content += "from cheese.ErrorCodes import Error\n\n"
        content += f"#@controller {span.text}\n"
        content += f"class {controllerFileName}(cc):\n\n"

        spans = ApiControllerCreator.soup.findAll("span")
        for subSpan in spans:
            if (subSpan["id"].startswith(span["id"]) and subSpan["id"].find(".") != -1):
                print(f"Endpoint: {subSpan.text}")
                parent = subSpan.parent
                figures = parent.findAll("figure")

                httpMethod = subSpan.text.split(" ")[-1].lower()
                methodName = subSpan.text.split(" ")[0]
                content += f"\t#@{httpMethod} {methodName}\n"
                content += "\t@staticmethod\n"
                content += f"\tdef {methodName.replace('/', '')}(server, path, auth):\n"

                errorBadRequest = None
                for fig in figures:
                    if (fig.figcaption.text.endswith("400:")):
                        errorBadRequest = ApiControllerCreator.getCodeFromFigure(fig)
                        break 

                responseOKRequest = None
                for fig in figures:
                    if (fig.figcaption.text.endswith("200:")):
                        responseOKRequest = ApiControllerCreator.getCodeFromFigure(fig)
                        break 

                for figure in figures:
                    ftext = figure.figcaption.text
                    if (ftext.find("Accepts") != -1):
                        variables = ""
                        
                        if (ftext.find("bytes") > -1):
                            content += "\t\targs = cc.readBytes(server)\n"
                            content += "\t\tif (not args):\n"
                        elif (ftext.find("nothing") == -1):
                            if (ftext.find("path") > -1):
                                content += "\t\targs = cc.getArgs(path)\n\n"
                            elif (ftext.find("cookies") > -1):
                                content += "\t\targs = cc.getCookies(server)\n\n"
                            elif (ftext.find("body") > -1):
                                content += "\t\targs = cc.readArgs(server)\n\n"

                            args = ApiControllerCreator.getCodeFromFigure(figure)
                            for arg in args:
                                varName = CreateByDB.removeSpaces(arg.lower(), arg.lower()[0]) 
                                variables += f"\t\t{varName} = args[\"{arg}\"]\n"
                            
                            content += f"\t\tif (not cc.validateJson({list(args.keys())}, args)):\n"

                        if (ftext.find("nothing") == -1):
                            content += f"\t\t\tError.sendCustomError(server, \"{errorBadRequest['ERROR']}\", 400)\n"
                            content += "\t\t\treturn\n\n"
                            content += variables + "\n"

                        content += f"\t\tresponse = cc.createResponse({responseOKRequest}, 200)\n"
                        content += "\t\tcc.sendResponse(server, response)\n\n"

        with open(f"{ResMan.pythonSrc()}/controllers/{controllerFileName}.py", "w") as f:
            f.write(content)

    @staticmethod
    def getCodeFromFigure(figure):
        code = ""
        txt = figure.code.text
        lines = txt.split("\n")
        for line in lines:
            pars = line.strip().split("//")
            if (pars[0] != ""):
                code += pars[0]
        return json.loads(code)