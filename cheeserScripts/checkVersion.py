import json
import requests
import subprocess

class Updater:

    @staticmethod
    def checkUpdate():
        aversion = requests.get("https://kubaboi.github.io/CheeseFramework/public/version.html").text
        with open("./cheese/cheeseproperties.json", "r") as f:
            version = json.loads(f.read())["release"]

        if (version != aversion):
            print(f"You have got release {version}, but latest Cheese is {aversion}")
            accept = input("Would you like to update? [y/n]")
            if (accept.startswith("y")):
                Updater.update()

    @staticmethod
    def update():
        subprocess.run("git pull", shell=True)
        with open("./cheese/cheeseproperties.json", "r") as f:
            version = json.loads(f.read())["release"]
        print(f"Cheese was update on release {version} :)")
