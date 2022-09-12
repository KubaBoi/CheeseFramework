#cheese

import json
import os

from Cheese.metadata import Metadata 
from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings

class Decode:

    def decode(key):
        ResMan.setPath(os.getcwd())
        setattr(Settings, "allowDebug", True)

        with open(ResMan.metadata(), "r", encoding="utf-8") as f:
            rawData = f.read() # loads data from file coded base64 

        codedData = Metadata.decode64(rawData) # decode base64
        try:
            rawJsonData = Metadata.decode(codedData, key) # decode by your key
        except PermissionError as e:
            print("Wrong decode key")
            return
        except Exception as e:
            print("Unknown error occured")
            print(e)
            return
        jsonData = json.loads(rawJsonData) # loads json from string into dictionary

        with open(ResMan.root("metadata.json"), "w") as f:
            f.write(json.dumps(jsonData, sort_keys=True, indent=4))

        print(f"File has been generated: {ResMan.root('metadata.json')}")