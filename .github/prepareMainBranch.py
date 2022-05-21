
import os
import sys
import git

from datetime import datetime, timedelta, timezone

def replaceImports(data, imp):
    return data.replace("from " + imp, "from Cheese.")

def getVersion():
    setupPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "setup.cfg"))
    with open(setupPath, "r") as f:
        data = f.readlines()

    for line in data:
        if (line.startswith("version")):
            return line.split("=")[1].strip()
            

message = " ".join(sys.argv[1:])

imps = [
    "cheese.admin.",
    "cheese.databaseControll.",
    "cheese.modules.",
    "cheese.server.",
    "cheese.",
    "cheeserScripts.api.",
    "cheeserScripts.builders.",
    "cheeserScripts."
]

repoDir = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "sourceCode"))
frameworkDir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


repo = git.Repo.clone_from("https://github.com/KubaBoi/CheeseFramework.git", repoDir)

repo.git.checkout("development")  
now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")
commitMessage = f"Test build - {releaseDate} v({getVersion()})"

if (message == "test build"):
    readmeFile = os.path.abspath(os.path.join(frameworkDir, "README.md"))

    with open(readmeFile, "r") as f:
        data = f.read()
        dataLines = data.split("\n")

    oldLine = ""
    for line in dataLines:
        if (line.startswith("Test version")):
            oldLine = line
            break

    with open(readmeFile, "w") as f:
        f.write(data.replace(oldLine, f"Test version v({getVersion()}) - {releaseDate}"))

elif (message == "build"):
    commitMessage = f"Build - {releaseDate} v({getVersion()})"
    readmeFile = os.path.abspath(os.path.join(frameworkDir, "README.md"))

    with open(readmeFile, "r") as f:
        data = f.read()
        dataLines = data.split("\n")

    oldLine = ""
    for line in dataLines:
        if (line.startswith("### Version")):
            oldLine = line
            break

    with open(readmeFile, "w") as f:
        f.write(data.replace(oldLine, f"### Version v({getVersion()}) - {releaseDate}"))
print(commitMessage)

for root, dirs, files in os.walk(os.path.join(frameworkDir, "src", "Cheese")):
    for file in files:
        if (file == "__init__.py"): continue
        os.remove(os.path.join(root, file))

for root, dirs, files in os.walk(repoDir):
    for file in files:
        if (file.endswith(".py")):
            with open(os.path.join(root, file), "r") as f:
                data = f.read()

            if (data.startswith("#cheese")):
                print("Found: " + file)

                for imp in imps:
                    data = replaceImports(data, imp)

                if (file == "variables.py"):
                    data = data.replace("RELEASE", getVersion())

                newFile = os.path.join(frameworkDir, "src", "Cheese", file)
                if (os.path.exists(newFile)):
                    os.remove(newFile)

                with open(newFile, "w") as f:
                    f.write(data)

# ADMIN HTML FILES
adminPath = os.path.join(repoDir, "cheese", "admin")
filesPath = os.path.join(adminPath, "files")
print("")
print("HTML FILES")

with open(os.path.join(frameworkDir, "src", "Cheese", "adminFiles.py"), "w") as f:
    f.write("class AdminFiles:\n\tdef sayHello():\n\t\tprint('hello')\n\n") 

for root, dirs, files in os.walk(filesPath):
    for file in files:
        varName = os.path.join(root.split("cheese")[1], file)
        varName = os.path.split(varName)
        varName = "_".join(varName[1:]).replace(".", "_")
        
        print(f"Found: {os.path.join(root, file)} as {varName}")

        with open(os.path.join(root, file), "r") as f:
            data = f.read()

        with open(os.path.join(frameworkDir, "src", "Cheese", "adminFiles.py"), "a") as f:
            f.write(f"\t{varName} = \"\"\"${data}\"\"\"\n\n")