from importlib.resources import contents
import os
import json
from bs4 import BeautifulSoup
from cheese.resourceManager import ResMan

from cheeserScripts.createByDb import CreateByDB

class ApiControllerCreator:

    @staticmethod
    def createApiControllers():
        ApiControllerCreator.notSorted = []

        with open(f"{ResMan.web()}/api.html", "r") as f:
            api = f.read()

        ApiControllerCreator.soup = BeautifulSoup(api, features="html.parser")

        spans = ApiControllerCreator.soup.findAll("span")
        for span in spans:
            if (span["id"].find(".") == -1 and not span.text.endswith("WIP")):
                ApiControllerCreator.createController(span)

        print(10*"=")
        print("DONE")
        if (len(ApiControllerCreator.notSorted) > 0):
            print("WARNING - there are some endpoints that was not generated by any patern:")
            for endpoint in ApiControllerCreator.notSorted:
                print(endpoint)

    @staticmethod
    def createController(span):
        contName = span.text.replace("/", "")
        name = contName[0].upper() + contName[1:]
        controllerClassName = name + "Controller"
        controllerFileName = name[0].lower() + name[1:] + "Controller"
        if (os.path.exists(f"{ResMan.pythonSrc()}/controllers/{controllerFileName}.py")):
            return
        print(f"Creating controller: {span.text}")

        content = "#!/usr/bin/env python\n"
        content += "# -*- coding: utf-8 -*-\n\n"
        content += "from cheese.ErrorCodes import Error\n"
        content += "from cheese.modules.cheeseController import CheeseController as cc\n\n"
        content += f"from python.repositories.{name}Repository import {name}Repository\n\n"
        content += f"from python.models.{name} import {name}\n\n"
        content += f"#@controller {span.text}\n"
        content += f"class {controllerClassName}(cc):\n\n"

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

                errorUnauthorized = None
                for fig in figures:
                    if (fig.figcaption.text.endswith("401:")):
                        errorUnauthorized = ApiControllerCreator.getCodeFromFigure(fig)
                        break 

                responseOKRequest = None
                for fig in figures:
                    if (fig.figcaption.text.endswith("200:")):
                        responseOKRequest = ApiControllerCreator.getCodeFromFigure(fig)
                        break 

                content += ApiControllerCreator.getAuthorization(parent, errorUnauthorized)

                for figure in figures:
                    ftext = figure.figcaption.text
                    if (ftext.find("Accepts") != -1):
                        variables = ""
                        
                        if (ftext.find("bytes") > -1):
                            content += "\t\targs = cc.readBytes(server)\n\n"
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
                                variables += f"\t\t{ApiControllerCreator.toVariable(arg)} = args[\"{arg}\"]\n"
                            
                            content += f"\t\tif (not cc.validateJson({list(args.keys())}, args)):\n"

                        if (ftext.find("nothing") == -1):
                            content += f"\t\t\tError.sendCustomError(server, \"{errorBadRequest['ERROR']}\", 400)\n"
                            content += "\t\t\treturn\n\n"
                            content += variables + "\n"

                        if (methodName.startswith("/create")):
                            content += ApiControllerCreator.createScript(name, args)
                        elif (methodName.startswith("/update")):
                            content += ApiControllerCreator.updateScript(name, args, responseOKRequest)
                        elif (methodName.startswith("/delete")):
                            content += ApiControllerCreator.removeScript(name, responseOKRequest)
                        elif (methodName.startswith("/get")):
                            content += ApiControllerCreator.getScript(name, args, methodName)
                        else:
                            content += f"\t\tresponse = cc.createResponse({responseOKRequest}, 200)\n"
                            content += "\t\tcc.sendResponse(server, response)\n\n"
                            ApiControllerCreator.notSorted.append(f"{span.text}{subSpan.text}")
                            

        with open(f"{ResMan.pythonSrc()}/controllers/{controllerFileName}.py", "w") as f:
            f.write(content)

    @staticmethod
    def createScript(name, args):
        newVariable = ApiControllerCreator.toVariable(name) + "Model"

        content = f"\t\tnewId = {name}Repository.findNewId()\n"
        content += f"\t\t{newVariable} = {name}()\n"
        
        content += f"\t\t{newVariable}.id = newId\n"
        for arg in args:
            content += f"\t\t{newVariable}.{arg.lower()} = {ApiControllerCreator.toVariable(arg)}\n"

        content += f"\t\t{name}Repository.save({newVariable})\n\n"
        content += "\t\tresponse = cc.createResponse({\"ID\": newId}, 200)\n"
        content += "\t\tcc.sendResponse(server, response)\n\n"
        return content

    @staticmethod
    def updateScript(name, args, responseOKRequest):
        newVariable = ApiControllerCreator.toVariable(name) + "Model"

        content = f"\t\t{newVariable} = {name}Repository.findById(id)\n"
        
        for arg in args:
            content += f"\t\t{newVariable}.{arg.lower()} = {ApiControllerCreator.toVariable(arg)}\n"

        content += f"\t\t{name}Repository.update({newVariable})\n\n"
        content += f"\t\tresponse = cc.createResponse({responseOKRequest}, 200)\n"
        content += "\t\tcc.sendResponse(server, response)\n\n"
        return content

    @staticmethod
    def removeScript(name, responseOKRequest):
        newVariable = ApiControllerCreator.toVariable(name) + "Model"

        content = f"\t\t{newVariable} = {name}Repository.findById(id)\n"

        content += f"\t\t{name}Repository.delete({newVariable})\n\n"
        content += f"\t\tresponse = cc.createResponse({responseOKRequest}, 200)\n"
        content += "\t\tcc.sendResponse(server, response)\n\n"
        return content

    @staticmethod
    def getScript(name, args, methodName):
        content = ""
        newVariable = ApiControllerCreator.toVariable(name) + "Array"

        filters = methodName.split("By")
        if (len(filters) == 1):
            if (methodName == "/getAll"):
                content += f"\t\t{newVariable} = {name}Repository.findAll()\n"
            elif (methodName == "/get"):
                newVariable = newVariable.replace("Array", "Model")
                for arg in args:
                    id = ApiControllerCreator.toVariable(arg)
                content += f"\t\t{newVariable} = {name}Repository.find({id})\n"
                content += "\t\tjsonResponse = {}\n"
                content += f"\t\tjsonResponse[\"{ApiControllerCreator.getSingular(name).upper()}\"] = {newVariable}.toJson()\n\n"
                content += "\t\tresponse = cc.createResponse(jsonResponse, 200)\n"
                content += "\t\tcc.sendResponse(server, response)\n\n" 
                return content

        else:
            content += f"\t\t{newVariable} = {name}Repository.findBy("
            for arg in args:
                content += f"\"columnName-{arg.lower()}\", "
                content += ApiControllerCreator.toVariable(arg) + ")\n"
        
        name = ApiControllerCreator.fromVariable(ApiControllerCreator.getPlural(name))
        content += "\t\tjsonResponse = {}\n"
        content += f"\t\tjsonResponse[\"{name.upper()}\"] = []\n"
        content += f"\t\tfor {ApiControllerCreator.getSingular(name)} in {newVariable}:\n"
        content += f"\t\t\tjsonResponse[\"{name.upper()}\"].append({ApiControllerCreator.getSingular(name)}.toJson())\n\n"
        content += "\t\tresponse = cc.createResponse(jsonResponse, 200)\n"
        content += "\t\tcc.sendResponse(server, response)\n\n"
        return content

    @staticmethod
    def getAuthorization(li, errorUnauthorized):
        ps = li.findAll("p")
        role = None
        for p in ps:
            if (len(p.attrs) == 0): continue
            if (p["class"][0] == "role"):
                role = int(p.text.replace("Role = ", ""))

        if (role == None): return ""
        content = f"\t\tif (auth[\"role\"] > {role}):\n"
        content += f"\t\t\tError.sendCustomError(server, \"{errorUnauthorized['ERROR']}\", 400)\n"
        content += "\t\t\treturn\n\n"
        return content

    @staticmethod
    def toVariable(arg):
        return CreateByDB.removeSpaces(arg.lower(), arg.lower()[0]) 

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

    @staticmethod
    def fromVariable(arg):
        return CreateByDB.addSpaces(arg)

    @staticmethod
    def getSingular(text):
        if (text.endswith("s")):
            return text[:-1]
        return text
        
    @staticmethod
    def getPlural(text):
        if (text.endswith("s")):
            return text
        return text + "s"