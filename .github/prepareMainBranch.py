
import os
import git
import shutil

from datetime import datetime, timedelta, timezone

def replaceImports(data, imp):
    return data.replace("from " + imp, "from Cheese.")

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

repoDir = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "CheeseFramework"))
frameworkDir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

repo = git.Repo.clone_from("https://github.com/KubaBoi/CheeseFramework.git", repoDir)

repo.git.checkout("development")  

readmeFile = os.path.abspath(os.path.join(frameworkDir, "README.md"))

with open(readmeFile, "r") as f:
    data = f.read()

releaseIndex = data.find("### Release ")
releaseLine = data[releaseIndex:releaseIndex+len("### Release v(xx.xx.xx.xx.xx)")]

with open(readmeFile, "w") as f:
    f.write(data.replace(releaseLine, f"### Release v({releaseDate})"))

for root, dirs, files in os.walk(os.path.join(frameworkDir, "src", "Cheese")):
    for file in files:
        if (file == "__init__.py"): continue
        os.remove(os.path.join(root, file))

for root, dirs, files in os.walk(repoDir):
    if (root.find(".github") == -1):
        continue

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

shutil.rmtree(repoDir)
