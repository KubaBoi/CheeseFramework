import os
import json

props = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "cr.json"))

if (not os.path.exists(props)):
    print("Not building - missing credentials")
    raise Exception

with open(props, "r") as f:
    data = json.loads(f.read())

os.remove(props)

userName = props["name"]
password = props["pass"]

with open("~/.pypirc", "r") as f:
    data = f.read()

with open("~/.pypirc", "a") as f:
    f.write(f"username = {userName}")
    f.write(f"password = {password}")



