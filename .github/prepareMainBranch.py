
import os
import git

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

if (not os.path.exists(os.path.join(repoDir, "CheeseFramework"))):
    git.Git(repoDir).clone("https://github.com/KubaBoi/CheeseFramework.git")

repoDir = os.path.join(repoDir, "CheeseFramework")

for root, dirs, files in os.walk(os.path.join(repoDir, "src", "Cheese")):
    for file in files:
        if (file == "__init__.py"): continue
        os.remove(os.path.join(root, file))

for root, dirs, files in os.walk(frameworkDir):
    if (not root.endswith("cheese") and
        not root.endswith("CheeseFramework") and
        not root.find(".github") == -1):
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

repo = git.Repo(repoDir)
repo.index.add(["*"])
repo.index.commit("automatic build for pip")
origin = repo.remote('origin')
origin.push()