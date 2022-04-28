
from Cheese.cheeseController import CheeseController as cc
from Cheese.appSettings import Settings

#@authorization disabled;
class Authorization:

    @staticmethod
    def authorize(server, path, method):
        if (Authorization.isException(method, path)):
            return {"role": 0}
        return {"role": 1}

    @staticmethod
    def isException(method, path):
        pathNoArgs = cc.getPath(path)

        for exception in Settings.authExcepts:
            if (exception["method"] == method):

                excpPath = exception["path"].replace("*", "")
                if (exception["path"].startswith("*")):
                    if (pathNoArgs.endswith(excpPath)): return True
                elif (exception["path"].endswith("*")):
                    if (pathNoArgs.startswith(excpPath)): return True
                else:
                    if (pathNoArgs == excpPath): return True

        return False