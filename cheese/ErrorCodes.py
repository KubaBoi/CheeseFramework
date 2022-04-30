#cheese

from cheese.modules.cheeseController import CheeseController
from cheese.Logger import Logger

class Error:
    
    @staticmethod
    def init():
        Error.BadJson = CheeseController.createResponse({"ERROR": "Wrong json structure"}, 400) # Bad request
        Error.OldPass = CheeseController.createResponse({"ERROR": "Old password"}, 401) # Unauthorized
        Error.BadCred = CheeseController.createResponse({"ERROR": "Wrong credentials"}, 401) # Unauthorized
        Error.BadToken = CheeseController.createResponse({"ERROR": "Unable to authorize with this token"}, 401) # Unauthorized
        Error.AccDenied = CheeseController.createResponse({"ERROR": "Access denied"}, 401) # Unathorized
        Error.FileNotFound = CheeseController.createResponse({"ERROR": "File not found"}, 404) # File not found

    @staticmethod
    def sendCustomError(server, comment, code):
        response = CheeseController.createResponse({"ERROR": comment}, code)
        CheeseController.sendResponse(server, response)

    @staticmethod
    def handleError(server, error):
        if (type(error) is SystemError):
            errorMessage = f"\n{Logger.WARNING}{error.args[0]}{Logger.FAIL}"
            while (len(error.args) > 1):
                error = error.args[1]
                errorMessage += "\n" + 20*"==" + "\n"
                errorMessage += "\n" + f"{Logger.WARNING}{error.args[0]}{Logger.FAIL}"
                
            Logger.fail(f"SystemError occurred: {errorMessage}", False)
            Error.sendCustomError(server, error.args[0], 500)
        elif (type(error) is SyntaxError):
            while (len(error.args) > 1):
                error = error.args[-1]
            Logger.fail(f"SyntaxError occurred {error.args[0]}")
            Error.sendCustomError(server, error.args[0], 500)
        else:
            Logger.fail(f"An error unknown occurred {error.args[0]}")
            Error.sendCustomError(server, "Internal server error :(", 500)
