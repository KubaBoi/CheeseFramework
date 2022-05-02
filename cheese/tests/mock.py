
class Mock:

    def __init__(self, cls, **kwargs):
        self.cls = cls
        self.whenReturns = {}

        for key in kwargs.keys():
            setattr(self, key, kwargs[key])

    def whenReturn(self, methodName, response, **kwargs):
        self.whenReturns[methodName] = []
        self.whenReturns[methodName].append(
            {
                "RESPONSE": response,
                "KWARGS": kwargs
            }
        )

class ServerMock:

    def __init__(self, **kwargs):

        for key in kwargs.keys():
            setattr(self, key, kwargs[key])