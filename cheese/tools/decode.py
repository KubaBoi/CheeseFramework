import json
from Cheese.cheese import CheeseBurger 
from Cheese.metadata import Metadata 
from Cheese.resourceManager import ResMan

class Decode:

    def decode():
        CheeseBurger.init()

        key = "jauukfnd" # key to decode data

        with open(ResMan.metadata(), "r", encoding="utf-8") as f:
            rawData = f.read() # loads data from file coded base64 

        codedData = Metadata.decode64(rawData) # decode base64
        rawJsonData = Metadata.decode(codedData, key) # decode by your key
        jsonData = json.loads(rawJsonData) # loads json from string into dictionary

        with open("metadata.json", "w") as f:
            f.write(json.dumps(jsonData))