import os
import json

props = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "cr.json"))
pypirc = "~/.pypirc"

if (not os.path.exists(props)):
    print("Not building - missing credentials")
    raise Exception

with open(props, "r") as f:
    data = json.loads(f.read())

os.remove(props)

userName = data["name"]
password = data["pass"]

if (not os.path.exists(pypirc)):
    with open(pypirc, "w") as f:
        f.write("[testpypi]\n")
        f.write("repository = https://test.pypi.org/legacy/")

with open("~/.pypirc", "r") as f:
    data = f.read()

with open("~/.pypirc", "a") as f:
    f.write(f"username = {userName}")
    f.write(f"password = {password}")



