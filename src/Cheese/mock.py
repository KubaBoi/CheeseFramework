#cheese

from Cheese.cheeseTests import CheeseTests

class Mock:

    def __init__(self, repositoryName):
        self.whenReturns = {}
        self.repoName = repositoryName
        CheeseTests.setMock(self)

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