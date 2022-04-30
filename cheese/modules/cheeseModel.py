#cheese

class CheeseModel:
    
    def __init__(self, modelName, scheme):
        self.modelName = modelName
        self.scheme = scheme

    def toJson(self):
        jsn = {}
        for attr in self.scheme:
            jsn[attr] = getattr(self, attr)
        return jsn

    def toModel(self, jsn):
        for attr in self.scheme:
            setattr(self, attr, jsn[attr])