from Cheese.cheeseModel import CheeseModel

#@model
class Hello(CheeseModel):

    def __init__(self, id=None, hello_value=None):
        self.id = id
        self.hello_value = hello_value

    def toJson(self):
        response = {
            "ID": self.id,
            "HELLO_VALUE": self.hello_value
        }
        return response

    def toModel(self, json):
            self.id = json["ID"]
            self.hello_value = json["HELLO_VALUE"]