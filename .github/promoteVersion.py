
import os
import sys

setupPath = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", "setup.cfg"))
with open(setupPath, "r") as f:
    data = f.read()
    dataLines = data.split("\n")

oldLine = ""
for line in dataLines:
    if (line.startswith("version")):
        oldLine = line
        break

vers = oldLine.split("=")[1].strip().split(".")

message = " ".join(sys.argv[1:])
print(message)
if (message == "test build"):
    v = int(vers[2]) + 1
    vers[2] = str(v)
    print("Promoting version: " + ".".join(vers))
#elif (message == "build"):
#    if (int(vers[2]) != 0):
#        v = int(vers[1]) + 1
#        vers[1] = str(v)
#        vers[2] = "0"
#        print("Promoting version: " + ".".join(vers))

    with open(setupPath, "w") as f:
        f.write(data.replace(oldLine, "version = " + ".".join(vers)))