#cheese

import inspect

class CheeseModel:
    """
    ```CheeseModel``` is non-static class for storing data from database.
    """
    
    def __init__(self, modelName, scheme):
        """
        Model documentation:
        https://kubaboi.github.io/CheeseFramework/#73-models

        ```modelName``` name of model for better orientation. 
        It can be changed with ```#@dbmodel ;``` annotation.

        ```scheme``` database scheme as list of strings. 
        It can be changed with ```#@dbscheme ;``` annotation.
        """
        self.modelName = modelName
        self.scheme = scheme

    def toJson(self, allData=True) -> dict:
        """
        return model data as dictionary

        ```allData``` 
        - if ```True``` than in returned json will be 
        every attribute of object except for ```modelName``` and ```scheme```
        - if ```False``` than in returned json will be 
        only attributes from ```scheme```
        """
        scheme = self.scheme
        if (allData):
            scheme = self.__getAttrs()

        jsn = {}
        for attr in scheme:
            if (attr == "modelName" or attr == "scheme"): continue
            jsn[attr.upper()] = self.convert(getattr(self, attr))
        return jsn

    def convert(self, value):
        """
        converts lists and CheeseModels into json
        """
        if (type(value) is list):
            newList = []
            for v in value:
                newList.append(self.convert(v))
            return newList
        elif (isinstance(value, CheeseModel)):
            return value.toJson()
        return value

    def toModel(self, jsn) -> None:
        """
        converts ```dict``` or anything iterable into ```model```

        ```jsn``` is an object with data
        - if it is NOT ```dict``` than it need to be iterable and 
        it needs to be in same order as ```scheme``` is. (tuple, list...)
        """
        if (type(jsn).__name__ == "dict"):
            for attr in self.scheme:
                if (attr.upper() == "ID"): continue
                if (attr in jsn.keys()):
                    setattr(self, attr, jsn[attr])
                if (attr.upper() in jsn.keys()):
                    setattr(self, attr, jsn[attr.upper()])
        else: #(type(jsn) == list or
            #type(jsn) == tuple):

            for attr, value in zip(self.scheme, jsn):
                setattr(self, attr, value)

    def setAttrs(self, **attrs) -> None:
        """
        converts ```kwargs``` into model such as ```toModel()``` method

        ```**attrs``` is an kwargs object. 
        It will be passed to ```toModel()``` method as ```dict```.
        """
        self.toModel(attrs)

    def __getAttrs(self):
        """
        returns every attribute in ```self``` object
        """
        attributes = inspect.getmembers(self, lambda a:not(inspect.isroutine(a)))
        attributes = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))]
        return attributes
