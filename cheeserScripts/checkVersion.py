#cheese

import json
import requests
import subprocess

class Updater:

    @staticmethod
    def checkUpdate(release):
        if (release == "RELEASE"):
            print("Development release")
            return
        
        print("Checking latest Cheese release...")
        print("")
        aversion = requests.get("https://kubaboi.github.io/CheeseFramework/public/version.html").text

        if (release != aversion):
            print(f"You have got release {release} but the latest Cheese is {aversion}")
            accept = input("Would you like to update? [y/n] ")
            if (accept.startswith("y")):
                Updater.update()


    @staticmethod
    def update():
        subprocess.run("git pull", shell=True)
        print("")
        print(f"Cheese was updated on lastest release :)")
        print("")

