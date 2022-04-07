import os
import json
from datetime import datetime, timedelta, timezone

propFile = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "cheese", "cheeseproperties.json"))
print(propFile)
with open(propFile, "r") as f:
    properties = json.loads(f.read())

now = datetime.now(timezone.utc)
properties["release"] = now.strftime("%y.%m.%d.%H")
print(properties["release"])

with open(propFile, "w") as f:
    f.write(json.dumps(properties))
