import os
import json
from datetime import datetime, timedelta, timezone

prepFile = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "cheese", "cheeseproperties.json"))

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

with open(prepFile, "w") as f:
    f.write(json.dumps({"release": releaseDate}))

readmeFile = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "README.md"))

with open(readmeFile, "r") as f:
    data = f.read()

releaseIndex = data.find("### Release ")
releaseLine = data[releaseIndex:releaseIndex+len("### Release v(xx.xx.xx.xx.xx)")]

with open(readmeFile, "w") as f:
    f.write(data.replace(releaseLine, f"### Release v({releaseDate})"))