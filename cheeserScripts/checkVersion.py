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
    def checkUpdate():
        Updater.starter()

        print("Checking latest Cheese release...")
        print("")
        aversion = requests.get("https://kubaboi.github.io/CheeseFramework/public/version.html").text
        props = Updater.getRelease()

        if (props['release'] != aversion):
            print(f"You have got release {props['release']}, but latest Cheese is {aversion}")
            accept = input("Would you like to update? [y/n]")
            if (accept.startswith("y")):
                Updater.update()


    @staticmethod
    def update():
        subprocess.run("git pull", shell=True)
        version = Updater.getRelease()["release"]
        print("")
        print(f"Cheese was update on release {version} :)")
        print("")

    @staticmethod
    def getRelease():
        with open("./cheese/cheeseproperties.json", "r") as f:
            return json.loads(f.read())
