import json
from datetime import datetime, timedelta, timezone

with open("./../cheese/cheeseproperties.json", "r") as f:
    properties = json.loads(f.read())

now = datetime.now(timezone.utc)
properties["release"] = now.strftime("%y.%m.%d.%H")

with open("./../cheese/cheeseproperties.json", "w") as f:
    f.write(json.dumps(properties))
