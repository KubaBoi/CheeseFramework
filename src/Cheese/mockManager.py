#cheese

class MockManager:

    mocks = {}

    @staticmethod
    def setMock(mock):
        MockManager.mocks[mock.repoName] = mock

    @staticmethod
    def returnMock(repositoryName, methodName, kwargs):
        
        if (repositoryName in MockManager.mocks.keys()):
            mock = MockManager.mocks[repositoryName]

            if (methodName in mock.whenReturns.keys()):
                method = mock.whenReturns[methodName]
                
                for ret in method:
                    if (kwargs == ret["KWARGS"]):
                        return ret["RESPONSE"]
        
        raise SystemError(f"Missing mock {repositoryName}, {methodName}, {kwargs}")