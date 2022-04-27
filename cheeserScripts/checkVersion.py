#cheese

import json
import requests
import subprocess

class Updater:

    @staticmethod
    def starter():
        props = Updater.getRelease()

        print("")
        with open(f"./cheese/initString.txt", "r") as f:
            print(f.read())
        print(f"Cheese Framework Builder            (v{props['release']})")
        print(props['documentation'])
        print("")

    @staticmethod
    def checkUpdate(release):
        Updater.starter()

        print("Checking latest Cheese release...")
        print("")
        aversion = requests.get("https://kubaboi.github.io/CheeseFramework/public/version.html").text
        props = Updater.getRelease()

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

