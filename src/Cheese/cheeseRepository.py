#cheese

from datetime import datetime
import inspect

from Cheese.resourceManager import ResMan
from Cheese.database import Database

#IMPORTS

"""
File generated by Cheese Framework

Database query of Cheese Application
"""

class CheeseRepository:

#QUERY

#COMMIT

    @staticmethod
    def initRepositories():
#INIT
        pass

    # finds name of user-made repository
    @staticmethod
    def findUserRepository():
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userRepository = ResMan.getFileName(calframe[2][1]).replace(".py", "")
        return userRepository

    # convert arguments
    @staticmethod
    def getTypeOf(args):
        newArgs = []
        for arg in args:
            if (type(arg) is str):
                if (len(arg) == 0): newArgs.append("")
                elif (arg[-1] != "\'" 
                    and arg[-1] != ")" 
                    and not arg.endswith("DESC") 
                    and not arg.endswith("ASC")):
                    if (arg.startswith("columnName-")):
                        newArgs.append(arg.replace("columnName-", ""))
                    else:
                        newArgs.append(f"\'{arg}\'")
                else:
                    newArgs.append(str(arg))
            elif (type(arg) is list):
                newArgs.append("(" + ",".join(CheeseRepository.getTypeOf(arg)) + ")")
            elif (type(arg) is datetime):
                newArgs.append("'" + datetime.strftime(arg, "%d-%m-%Y %H:%M:%S") + "'")
            else:
                newArgs.append(str(arg))
        return newArgs

