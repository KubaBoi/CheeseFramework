
import os
import sys
import git

from datetime import datetime, timedelta, timezone

def replaceImports(data, imp):
    return data.replace("from " + imp, "from Cheese.")

args = sys.argv
if (len(args) == 1):
    sys.exit(2)

message = " ".join(args[1:])

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
                    data = data.replace("RELEASE", releaseDate)

                newFile = os.path.join(frameworkDir, "src", "Cheese", file)
                if (os.path.exists(newFile)):
                    os.remove(newFile)

                with open(newFile, "w") as f:
                    f.write(data)

commitMessage = f"Test build - {releaseDate}"

if (message == "build"):
    commitMessage = f"Build - {releaseDate}"
    readmeFile = os.path.abspath(os.path.join(frameworkDir, "README.md"))

    with open(readmeFile, "r") as f:
        data = f.read()
        dataLines = data.split("\n")

    oldLine = ""
    for line in dataLines:
        if (line.startswith("### Release")):
            oldLine = line
            break

    with open(readmeFile, "w") as f:
        f.write(data.replace(oldLine, f"### Release datestamp {releaseDate}"))
    sys.exit(commitMessage)
    
elif (message == "test build"):
    sys.exit(commitMessage)
else:
    sys.exit(2)
