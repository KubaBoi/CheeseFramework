#cheese

from Cheese.appSettings import SecuritySettings
from Cheese.cheeseController import CheeseController as cc
from Cheese.database import Database

class Security:

    @staticmethod
    def authenticate(server, path):
        if (not SecuritySettings.authentication["enabled"]):
            return True

        if (server.headers.get("Authorization") != None):
            auth = str(server.headers.get("Authorization"))
            
            for type in SecuritySettings.authentication["types"]:
                dict = Security.fitPatern(auth, type["patern"])
                if (dict != None):
                    valid = Security.validate(dict, type["validation"])
                    if (valid):
                        role = Security.findRole(dict, type["roleId"])
                    break

        print(role)


        server.do_AUTHHEAD()
        return False

    @staticmethod
    def findRole(dict, roleIdSql):
        for key in dict.keys():
            validation = roleIdSql.replace(f"${key}$", f"'{dict[key]}'")

        db = Database()
        response = db.query(roleIdSql)
        db.done()
        roleId = str(response[0][0])

        if (roleId not in SecuritySettings.roles):
            return None
        return SecuritySettings.roles[roleId]

    @staticmethod
    def validate(dict, validation):
        for key in dict.keys():
            validation = validation.replace(f"${key}$", f"'{dict[key]}'")

        db = Database()
        response = db.query(f"select case when exists ({validation}) then cast(1 as bit) else cast(0 as bit) end")
        db.done()
        return bool(response[0][0])

    @staticmethod
    def fitPatern(auth, patern):
        vars = patern.split("$")[1::2]
        unvars = patern.split("$")[0::2]

        for un in unvars:
            if (un == ""): continue
            auth = auth.replace(un, " ")

        auth = auth.strip().split(" ")
        if (len(auth) != len(vars)):
            return None
        
        authDict = {}
        for name, var in zip(vars, auth):
            authDict[name] = var
        return authDict