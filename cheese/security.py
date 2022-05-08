
from Cheese.appSettings import SecuritySettings
from Cheese.cheeseController import CheeseController as cc

class Security:

    @staticmethod
    def authenticate(server, path):
        if (not SecuritySettings.authentication["enabled"]):
            return True

        Security.cookieAuth(server)

    
    @staticmethod
    def cookieAuth(server):
        if ("cookies" not in SecuritySettings.authentication):
            return None

        attribs = SecuritySettings.authentication["cookies"]["attributes"]
        cookies = cc.getCookies(server)
        print(cookies)

        for key in attribs.keys():
            attributes = key.split("&")
            print(attributes)