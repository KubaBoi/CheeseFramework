#cheese

import re
import requests
import json

from Cheese.cheeseController import CheeseController as cc
from Cheese.metadata import Metadata
from Cheese.appSettings import Settings
from Cheese.httpClientErrors import *

if (Settings.allowDB):
    from Cheese.database import Database

class Security:

    @staticmethod
    def authenticate(server, path):
        if (not Metadata.authentication["enabled"]):
            return True

        pth = cc.getPath(path)
        try:
            acc = Metadata.access[pth]
            if (acc["minRoleId"] < 0):
                return True
        except:
            return True

        role = None
        dict = None
        userData = {}
        authHeader = server.headers.get("Authorization")

        if (authHeader != None):
            if (authHeader.startswith("Basic ")):
                authHeader = authHeader.replace("Basic ", "")

            auth = Metadata.decode64(authHeader)

            for tp in Metadata.authentication["types"]:
                dict = Security.fitPatern(auth, tp["patern"])
                if (dict != None):

                    encoders = {}
                    if ("encoders" in tp.keys()):
                        encoders = tp["encoders"]

                    valid = Security.validate(dict, tp["validation"], encoders, server)
                    if (valid):
                        role = Security.findRole(dict, tp["roleId"])

                        if ("additional" in tp.keys()):
                            additional = tp["additional"]
                            for add in additional:
                                if (not Security.validate(dict, add["validation"], encoders, server)):
                                    if ("exceptions" in add.keys()):
                                        Security.handleExceptions(add["exceptions"], dict, encoders, server)
                                    if ("raise" in add.keys()):
                                        raise Unauthorized(add["raise"])
                        
                        if ("userData" in tp.keys()):
                            db = Database()
                            sql = Security.prepareString(dict, tp["userData"], encoders, server)
                            response = db.query(sql)
                            db.done()
                            userData = response[0]
                    break
        
        if (pth in Metadata.access.keys()):
            if (role == None):
                raise Unauthorized("Wrong credentials")
            
            if (role["value"] > acc["minRoleId"]):
                raise Unauthorized("You do not have access to this endpoint")           

        return {
            "role": role,
            "login": dict,
            "userData": userData
        }

    @staticmethod
    def handleExceptions(excp, dict, encoders, server):
        """
        Handles custom exception defined in `securitySettings.json`
        """
        endpoint = excp["endpoint"]
        method = excp["method"]
        content = {}

        for cont in excp["content"].keys():
            content[cont] = Security.prepareString(dict, excp["content"][cont], encoders, server)
        
        if (method == "GET"):
            requests.get(f"http://localhost:{Settings.port}{endpoint}")
        elif (method == "POST"):
            requests.post(f"http://localhost:{Settings.port}{endpoint}", json=content)

    @staticmethod
    def findRole(dict: dict, roleIdSql: str):
        """
        Finds role id

        `dict` is dictionary of replaceable values

        `roleIdSql` sql string for finding role id
        """
        for key in dict.keys():
            roleIdSql = roleIdSql.replace(f"${key}$", f"'{dict[key]}'")

        db = Database()
        response = db.query(roleIdSql)
        db.done()

        roleId = "None"
        if (response != []):
            roleId = str(response[0][0])

        if (roleId not in Metadata.roles):
            return None
        return Metadata.roles[roleId]

    @staticmethod
    def validate(dict: dict, validation: str, encoders: dict, server):   
        """
        Takes validation string and decide if sql is valid or not

        `dict` is dictionary of replaceable values

        `validation` is sql string for replacing values

        `encoders` is dictionary of encoders

        `server` is instance of http handler
        """
        validation = Security.prepareString(dict, validation, encoders, server)

        db = Database()
        trueNess = (1, 0)
        # negace
        if (validation.startswith("!")):
            validation = validation[1:]
            trueNess = (0, 1)

        response = db.query(f"select case when exists ({validation}) then cast({trueNess[0]} as bit) else cast({trueNess[1]} as bit) end;")
        db.done()
        return bool(int(response[0][0]))

    @staticmethod
    def prepareString(dict: dict, string: str, encoders: dict, server):
        """
        `dict` is dictionary of replaceable values

        `string` is sql string for replacing values

        `encoders` is dictionary of encoders

        `server` is instance of http handler
        """
        for key in dict.keys():
            value = dict[key]
            if (key in encoders.keys()):
                value = Metadata.encode(value, getattr(Settings, encoders[key]))
            string = string.replace(f"${key}$", f"'{value}'")

        string = string.replace("$client_ip$", f"'{cc.getClientAddress(server)}'")
        string = string.replace("$headers$", json.dumps(cc.getHeadersDict(server)))

        return string

    @staticmethod
    def fitPatern(auth: str, patern: re):
        """
        `auth` is string of authentication

        `re` is regex for recognising authentication
        """
        p = re.search(patern, auth)
        if (p == None): return None
        return p.groupdict()
