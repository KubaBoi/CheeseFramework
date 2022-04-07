import os
import json
from datetime import datetime, timedelta, timezone
from platform import release

htmlFile = "./public/version.html"

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

with open(htmlFile, "w") as f:
    f.write(releaseDate)