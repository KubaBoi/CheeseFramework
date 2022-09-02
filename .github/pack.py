
import os

scriptsPath = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "scripts"))
mdScriptsPath = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "mdConverter"))

cheesePath = os.path.join(scriptsPath, "cheese.js")
mdPath = os.path.join(mdScriptsPath, "pack.js")
mdStylePath = os.path.join(mdScriptsPath, "style.css")

print("Packing Cheese scripts")
fullData = ""
for root, dirs, files in os.walk(scriptsPath):
    for file in files:
        if (file == "cheese.js"): continue
        print(f"File: {file}")
        with open(os.path.join(root, file), "r", encoding="utf-8") as f:
            data = f.read()

        fullData += f"\n// {file.upper()}\n{data}\n\n"

with open(cheesePath, "w", encoding="utf-8") as f:
    f.write(fullData)

print("Packing MarkDown converter scripts")
fullData = ""
for root, dirs, files in os.walk(mdScriptsPath):
    for file in files:
        if (not file.endswith(".js")): continue
        if (file == "pack.js"): continue
        print(f"File: {file}")
        with open(os.path.join(root, file), "r", encoding="utf-8") as f:
            data = f.read()

        fullData += f"\n// {file.upper()}\n{data}\n\n"

with open(mdPath, "w", encoding="utf-8") as f:
    f.write(fullData)

print("Packing MarkDown converter styles")
fullData = ""
for root, dirs, files in os.walk(mdScriptsPath):
    for file in files:
        if (not file.endswith(".css")): continue
        if (file == "style.js"): continue
        print(f"File: {file}")
        with open(os.path.join(root, file), "r", encoding="utf-8") as f:
            data = f.read()

        fullData += f"\n/* {file.upper()} */\n{data}\n\n"

with open(mdStylePath, "w", encoding="utf-8") as f:
    f.write(fullData)