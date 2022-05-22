#cheese

import json

from Cheese.mockManager import MockManager

class Mock:

    def __init__(self, repository):
        self.whenReturns = {}
        self.catch = {}
        self.repoName = repository.className()
        MockManager.setMock(self)

    def whenReturn(self, methodName, response, **kwargs):
        """
        methodName - name of method which will be mocked
        response - response which mocked return will return
        kwargs - dict of arguments singalizing that this is THE case 
        """
        if (methodName not in self.whenReturns.keys()):
            self.whenReturns[methodName] = []
        self.whenReturns[methodName].append(
            {
                "RESPONSE": response,
                "KWARGS": kwargs
            }
        )

    def catchArgs(self, pointer, argName, methodName, **kwargs):
        """
        pointer - id of object which will be filled with return 
        methodName - name of method which will be cached
        """
        if (methodName not in self.catch.keys()):
            self.catch[methodName] = []
        self.catch[methodName].append(
            {
                "POINTER": pointer,
                "ARG_NAME": argName,
                "KWARGS": kwargs
            }
        )

class ServerMock:

    def __init__(self, **kwargs):
        self.headers = HeadersMock()
        for key in kwargs.keys():
            setattr(self, key, kwargs[key])

    def mockPostBody(self, jsn):
        self.rfile = RfileMock(jsn)

class HeadersMock:

    def __init__(self, **kwargs):
        self.attrs = kwargs

    def get(self, smth):
        return 0

class RfileMock:

    def __init__(self, jsn):
        self.content = json.dumps(jsn).encode("utf-8")

    def read(self, lngth):
        return self.content