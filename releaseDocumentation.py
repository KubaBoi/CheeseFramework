from datetime import datetime, timedelta, timezone

htmlFile = "./public/docVersion.html"

now = datetime.now(timezone.utc) + timedelta(hours=2)
releaseDate = now.strftime("%y.%m.%d.%H.%M")

with open(htmlFile, "w") as f:
    f.write(releaseDate)