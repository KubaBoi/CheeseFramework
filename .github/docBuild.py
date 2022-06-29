
import os
import inspect
import json
import sys
import shutil
from datetime import datetime, timedelta, timezone

sourcePath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "src", "Cheese"))
docPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "DOC.md"))
missingPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "missingDoc.json"))

sys.path.insert(0, sourcePath)

def findClassNames(lines):
    classes = []
    for line in lines:
        line = line.strip()
        if (line.startswith("class ") and line.endswith(":")):
            classes.append(line.replace("class ", "").split("(")[0].split(":")[0])
    return classes

def changeName(name):
    return name.replace(" ", "-").lower()

def getVersion():
    setupPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "setup.cfg"))
    with open(setupPath, "r") as f:
        data = f.readlines()

    for line in data:
        if (line.startswith("version")):
            return line.split("=")[1].strip()

missingDoc = []
docStr = ""
contents = "## Contents\n\n"
for root, dirs, files in os.walk(sourcePath):
    m = 1
    for file in files:
        if (file == "__init__.py" or file.endswith(".pyc")): continue

        with open(os.path.join(root, file), "r") as f:
            data = f.readlines()

        names = findClassNames(data)
        for clsName in names:
            try:
                module = __import__(f"{file.replace('.py', '')}")

                cls = getattr(module, clsName)

                attributes = inspect.getmembers(cls, lambda a:inspect.isroutine(a))
                attributes = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))]
                print(file, clsName, attributes)

                mthStr = f"## {m}. {clsName}\n\n"
                cont = f"- [{clsName}](#{m}-{changeName(clsName)})\n"
                n = 0

                clsDoc = cls.__doc__
                if (clsDoc != None):
                    docC = ""
                    for line in clsDoc.split("\n"):
                        docC += line.strip() + "\n"
                    mthStr += docC + "\n\n"

                for attr in attributes:
                    doc = getattr(cls, attr).__doc__
                    if (doc == None):
                        missingDoc.append({clsName: {"file": file, "method": attr}})
                    else:
                        docS = ""
                        for line in doc.split("\n"):
                            docS += line.strip() + "\n"

                        n += 1
                        mthStr += f"### {m}.{n} {attr}\n\n"
                        mthStr += docS + "\n\n"
                        cont += f"    - [{attr}](#{m}{n}-{changeName(attr)})\n"

                if (n != 0):
                    docStr += mthStr
                    contents += cont
                    m += 1
            except:
                print("Error", file)

with open(missingPath, "w") as f:
    f.write(json.dumps(missingDoc, indent=4, sort_keys=True))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")
with open(docPath, "w") as f:
    f.write("# CheeseFramework documentation\n\n[Back to README](https://kubaboi.github.io/CheeseFramework/)\n\n" +
    ":bangbang: This documentantion is automaticaly generated from code documentation.\n\n" +
    f"timestamp: {releaseDate}\n\n" +
    f"Cheese version v({getVersion()})\n\n" + contents + "\n\n" + docStr)

shutil.rmtree(os.path.join(sourcePath, "__pycache__"))


        
