import os
import json
from datetime import datetime, timedelta, timezone

prepFile = os.path.abspath(os.path.join(__file__, "..", "CheeseFramework", "cheese", "cheeseproperties.json"))
print(os.path.abspath(os.path.join(__file__, "..",)))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

with open(prepFile, "r") as f:
    data = json.loads(f.read())

data["release"] = releaseDate

with open(prepFile, "w") as f:
    f.write(data)