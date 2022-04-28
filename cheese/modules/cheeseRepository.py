#cheese

from datetime import datetime
import inspect

from cheese.metadata import Metadata
from cheese.resourceManager import ResMan
from cheese.databaseControll.database import Database

#IMPORTS

"""
File generated by Cheese Framework

Database query of Cheese Application
"""

class CheeseRepository:

    @staticmethod
    def query(**kwargs):
        userRepository = CheeseRepository.findUserRepository()
        repository = Metadata.getRepository(userRepository)

        methodName = CheeseRepository.findUserMethod()
        method = Metadata.getMethod(repository, methodName)

        variables = CheeseRepository.getVariables(method["SQL"])
        preparedSql = method["SQL"]
        acceptsModel = method["ACCEPTS_MODEL"]
        modelName = None
        if (acceptsModel):
            modelName = Metadata.getModel(repository)

        for key, value in kwargs.items():
            arg = CheeseRepository.getTypeOf(value, variables, key, model)
            preparedSql = preparedSql.replace(f":{key}", arg)

        if (method["TYPE"] == "query"):
            CheeseRepository.queryType(preparedSql, method, repository)


        
    @staticmethod
    def queryType(preparedSql, method, repository):
        try:
            db = Database()
            response = db.query(preparedSql)
            db.done()
        except:
            Logger.fail("An error occurred while query request", str(e))
            raise SystemError("An error occurred while query request", e)

        if (method["RETURN"] == "raw"):
            return response
        elif (method["RETURN"] == "num"):
            return int(response)
        elif (method["RETURN"] == "one"):
            return CheeseRepository.toModel(repository, response[0])
        elif (method["RETURN"] == "array"):
            array = []
            for item in response:
                array.append(CheeseRepository.toModel(repository, item))
            return array


    @staticmethod
    def toModel(repository, data):
        scheme = repository["SCHEME"].replace(")", "").replace("(", "")
        columns = scheme.split(",")

        modelJson = Metadata.getModel(repository)
        model = Metadata.getModelObject(modelJson)()

        for i, column in enumerate(columns):
            column = column.strip()
            setattr(model, column, data[i])
        return model


    # finds name of user-made repository
    @staticmethod
    def findUserRepository():
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userRepository = ResMan.getFileName(calframe[2][1]).replace(".py", "")
        return userRepository

    # finds name of method from user-made repository
    @staticmethod
    def findUserMethod():
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userMethod = ResMan.getFileName(calframe[2][3])
        return userMethod

    # creates array of variables from sql
    # ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)
    # or 46 (.) or 95 (_)
    @staticmethod
    def getVariables(sql):
        variables = []
        newVar = None
        for ch in sql:
            ordCh = ord(ch)
            if (ch == ":" and newVar == None):
                newVar = ""
            elif (((ordCh >= 48 and ordCh <= 57) or
                (ordCh >= 65 and ordCh <= 90) or
                (ordCh >= 97 and ordCh <= 122) or
                ordCh == 46 or ordCh == 95)
                and newVar != None):
                newVar += ch
            elif (newVar != None):
                variables.append(newVar)
                newVar = None
        return variables


    # convert arguments
    @staticmethod
    def getTypeOf(arg, variables=None, key=None, model=None):
        if (type(arg) is str):
            if (len(arg) == 0): return ""
            elif (arg[-1] != "\'" 
                and arg[-1] != ")" 
                and not arg.endswith("DESC") 
                and not arg.endswith("ASC")):
                if (arg.startswith("columnName-")):
                    return arg.replace("columnName-", "")
                else:
                    return f"\'{arg}\'"
            else:
                return str(arg)
        elif (type(arg) is list):
            return "(" + ",".join(CheeseRepository.getTypeOf(arg)) + ")"
        elif (type(arg) is datetime):
            return "'" + datetime.strftime(arg, "%d-%m-%Y %H:%M:%S") + "'"
        elif (arg.__class__.__name__ == model):
            for var in variables:
                spl = var.split(".")
                if (spl[0] == key):
                    return CheeseRepository.getTypeOf(getattr(arg, spl[1]))

        else:
            return str(arg)

