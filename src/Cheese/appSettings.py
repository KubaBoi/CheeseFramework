#cheese

import os
import socket
import json

from Cheese.resourceManager import ResMan

class Settings:

    allowDB = False

    @staticmethod 
    def loadSettings():
        """
        Loads settings
        """
        Settings.settings = Settings.loadJson()
        for key in Settings.settings.keys():
            setattr(Settings, key, Settings.settings[key])

        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        setattr(Settings, "host", s.getsockname()[0])
        s.close()

        Settings.activeLicense = "None"

    @staticmethod
    def loadJson():
        """
        Loads settings from json file
        """
        with open(os.path.join(ResMan.root(), "appSettings.json"), "r", encoding="utf-8") as f:
            ret = json.loads(f.read())
        return ret

    @staticmethod
    def saveJson(jsonConf):
        """
        Saves settigns in json file
        """
        with open(os.path.join(ResMan.root(), "appSettings.json"), "w", encoding="utf-8") as f:
            f.write(json.dumps(jsonConf))

    @staticmethod
    def loadSecrets(secrets):
        """
        Loads app secrets
        """
        errors = []
        for key in Settings.__dict__:
            value = str(getattr(Settings, key))
            if (not value.startswith("$")): continue

            if (value[1:] not in secrets.keys()):
                errors.append((key, value))
            else:
                setattr(Settings, key, secrets[value[1:]])

        if (len(errors) > 0):
            raise KeyError(*errors)
