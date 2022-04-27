
import os
import git

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

repoDir = os.path.abspath(os.path.join(os.path.dirname( __file__ )))
frameworkDir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

if (not os.path.exists(os.path.join(repoDir, "CheeseFramework"))):
    git.Git(repoDir).clone("https://github.com/KubaBoi/CheeseFramework.git")

repoDir = os.path.join(repoDir, "CheeseFramework")

readmeFile = os.path.abspath(os.path.join(repoDir, "README.md"))
readmeOrigFile = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "README.md"))

with open(readmeOrigFile, "r") as f:
    data = f.read()

releaseIndex = data.find("### Release ")
releaseLine = data[releaseIndex:releaseIndex+len("### Release v(xx.xx.xx.xx.xx)")]
print(releaseDate)

with open(readmeFile, "w") as f:
    f.write(data.replace(releaseLine, f"### Release v({releaseDate})"))

for root, dirs, files in os.walk(os.path.join(repoDir, "src", "Cheese")):
    for file in files:
        if (file == "__init__.py"): continue
        os.remove(os.path.join(root, file))

for root, dirs, files in os.walk(frameworkDir):
    if (root.find(".github") != -1 and root.find("template")):
        continue

    print(root)
    for file in files:
        if (file.endswith(".py")):
            with open(os.path.join(root, file), "r") as f:
                data = f.read()

            if (data.startswith("#cheese")):
                print(file)

                for imp in imps:
                    data = replaceImports(data, imp)

                newFile = os.path.join(repoDir, "src", "Cheese", file)
                if (os.path.exists(newFile)):
                    os.remove(newFile)

                with open(newFile, "w") as f:
                    f.write(data)

#repo = git.Repo(repoDir)
#repo.index.add(["*"])
#repo.index.commit("automatic build for pip")
#origin = repo.remote('origin')
#origin.push()