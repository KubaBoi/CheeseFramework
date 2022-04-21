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

readmeFile = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "README.md"))

with open(readmeFile, "w") as f:
    f.write(
        f"# Cheese Framework\n\n" +
        "![Release Build](https://github.com/KubaBoi/CheeseFramework/blob/main/.github/workflows/realeaseDate.yml)\n\n" +
        f"### Release v({releaseDate})\n\n" +
        "## Documentation\n\nhttps://kubaboi.github.io/CheeseFramework/"
    )