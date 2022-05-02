#cheese

from Cheese.Logger import Logger
from Cheese.testError import MockError

class MockManager:

    mocks = {}

    @staticmethod
    def setMock(mock):
        MockManager.mocks[mock.repoName.upper()] = mock

    @staticmethod
    def returnMock(repositoryName, methodName, kwargs):

        if (repositoryName.upper() in MockManager.mocks.keys()):
            mock = MockManager.mocks[repositoryName.upper()]

            if (methodName in mock.whenReturns.keys()): # try to find whenReturn
                method = mock.whenReturns[methodName]

                for ret in method:
                    if (kwargs == ret["KWARGS"]):
                        return ret["RESPONSE"]

            if (methodName in mock.catch.keys()): # try to find catch
                method = mock.catch[methodName]
                for key in method["KWARGS"].keys(): # runs through all condition arguments
                    if (key not in kwargs.keys()):
                        raise MockError(repositoryName, methodName, key)

                    if (kwargs[key] != method["KWARGS"][key]): # if any of conditions is not acomplished
                        return None

                if (method["ARG_NAME"] not in kwargs): # if cached argument is not in kwargs of real method
                    raise MockError(repositoryName, methodName, method["ARG_NAME"])

                method["OBJECT"] = kwargs[method["ARG_NAME"]]              
        
        return None