#cheese

import json
import requests
from importlib.metadata import version
import subprocess

class Updater:

    @staticmethod
    def checkUpdate():        
        print("Checking latest Cheese release...")
        print("")
        vers = version("CheeseFramework")
        try:
            r = requests.get("https://pypi.org/pypi/CheeseFramework/json").text
            aversion = json.loads(r)["info"]["version"]
        except:
            print("Cannot check latest Cheese version")

        if (vers != aversion):
            print(f"You have got version {vers} but the latest Cheese is {aversion}")
            accept = input("Would you like to update? [y/n] ")
            if (accept.startswith("y")):
                Updater.update()


    @staticmethod
    def update():
        subprocess.run("git pull", shell=True)
        print("")
        print(f"Cheese was updated on lastest release :)")
        print("")

