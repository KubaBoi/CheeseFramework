import os
import json
from datetime import datetime, timedelta, timezone

prepFile = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "cheese", "cheeseproperties.json"))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

with open(prepFile, "r") as f:
    data = json.loads(f.read())

data["release"] = releaseDate

with open(prepFile, "w") as f:
    f.write(json.dumps(data))