#cheese

import re

from Cheese.cheeseController import CheeseController as cc
from Cheese.database import Database
from Cheese.metadata import Metadata
from Cheese.appSettings import Settings
from Cheese.httpClientErrors import *

class Security:

    @staticmethod
    def authenticate(server, path):
        if (not Metadata.authentication["enabled"]):
            return True

        role = None
        dict = None
        authHeader = server.headers.get("Authorization")

        if (authHeader != None):
            if (authHeader.startswith("Basic ")):
                authHeader = authHeader.replace("Basic ", "")

            auth = Metadata.decode64(authHeader)

            for tp in Metadata.authentication["types"]:
                dict = Security.fitPatern(auth, tp["patern"])
                if (dict != None):

                    encoders = []
                    if ("encoders" in tp.keys()):
                        encoders = tp["encoders"]

                    valid = Security.validate(dict, tp["validation"], encoders)
                    if (valid):
                        role = Security.findRole(dict, tp["roleId"])
                    break
        
        pth = cc.getPath(path)
        if (pth in Metadata.access.keys()):
            if (role == None):
                raise Unauthorized("Wrong credentials")
            
            acc = Metadata.access[pth]
            if (role["value"] > acc["minRoleId"]):
                raise Unauthorized("You do not have access to this endpoint")           

        return {
            "role": role,
            "login": dict
        }

    @staticmethod
    def findRole(dict, roleIdSql):
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
    def validate(dict, validation, encoders):   
        for key in dict.keys():
            value = dict[key]
            if (key in encoders.keys()):
                value = Metadata.encode(value, getattr(Settings, encoders[key]))
            validation = validation.replace(f"${key}$", f"'{value}'")

        db = Database()
        response = db.query(f"select case when exists ({validation}) then cast(1 as bit) else cast(0 as bit) end;")
        db.done()
        return bool(int(response[0][0]))

    @staticmethod
    def fitPatern(auth, patern):
        p = re.search(patern, auth)
        if (p == None): return None
        return p.groupdict()
