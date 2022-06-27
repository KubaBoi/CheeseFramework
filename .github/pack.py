
import os

scriptsPath = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "scripts"))
cheesePath = os.path.join(scriptsPath, "cheese.js")

fullData = ""
for root, dirs, files in os.walk(scriptsPath):
    for file in files:
        if (file == "cheese.js"): continue

        with open(os.path.join(root, file), "r") as f:
            data = f.read()

        fullData += f"\n// {file.upper()}\n{data}\n\n"

with open(cheesePath, "w") as f:
    f.write(fullData)
