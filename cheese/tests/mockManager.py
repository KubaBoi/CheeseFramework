#cheese

class MockManager:

    @staticmethod
    def setMock(mock):
        MockManager.mocks[mock.repoName] = mock

    @staticmethod
    def returnMock(repositoryName, methodName, **kwargs):
        if (repositoryName in MockManager.mocks.keys()):
            mock = MockManager.mocks[repositoryName]
            print(mock.whenReturns)
            print(methodName)