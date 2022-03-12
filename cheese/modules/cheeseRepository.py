#!/usr/bin/env python
# -*- coding: utf-8 -*-

import inspect

from cheese.resourceManager import ResMan
from cheese.databaseControll.database import Database

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
            if (type(arg) is str and arg[-1] != "\'" 
                and arg[-1] != ")" 
                and not arg.endswith("DESC") 
                and not arg.endswith("ASC")):
                if (arg.startswith("columnName-")):
                    newArgs.append(arg.replace("columnName-", ""))
                else:
                    newArgs.append(f"\'{arg}\'")
            elif (type(arg) is list):
                newArgs.append("(" + ",".join(CheeseRepository.getTypeOf(arg)) + ")")
            elif (type(arg) is object):
                newArgs.append(arg)
            else:
                newArgs.append(str(arg))
        return newArgs

