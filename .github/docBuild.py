
from opcode import opname
import os
import inspect
import json

sourcePath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "src", "Cheese"))
docPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "DOC.md"))
missingPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "missingDoc.json"))

def findClassNames(lines):
    classes = []
    for line in lines:
        line = line.strip()
        if (line.startswith("class ") and line.endswith(":")):
            classes.append(line.replace("class ", "").split("(")[0].split(":")[0])
    return classes

missingDoc = []
docStr = ""
for root, dirs, files in os.walk(sourcePath):
    m = 1
    for file in files:
        if (file == "__init__.py"): continue

        with open(os.path.join(root, file), "r") as f:
            data = f.readlines()

        names = findClassNames(data)
        for clsName in names:
            module = __import__(f"Cheese.{file.replace('.py', '')}")

            cls = getattr(getattr(module, file.replace('.py', '')), clsName)

            attributes = inspect.getmembers(cls, lambda a:inspect.isroutine(a))
            attributes = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))]
            print(file, clsName, attributes)

            mthStr = f"## {m}. {clsName}\n\n"
            n = 0

            for attr in attributes:
                doc = getattr(cls, attr).__doc__
                if (doc == None):
                    missingDoc.append({clsName: {"file": file, "method": attr}})
                else:
                    n += 1
                    mthStr += f"### {m}.{n} {attr}\n\n"
                    mthStr += doc + "\n\n"

            if (n != 0):
                docStr += mthStr
                m += 1

with open(missingPath, "w") as f:
    f.write(json.dumps(missingDoc, indent=4, sort_keys=True))

with open(docPath, "w") as f:
    f.write(docStr)


        
