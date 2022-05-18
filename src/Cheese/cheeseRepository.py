#cheese

from datetime import datetime
import inspect

from Cheese.metadata import Metadata
from Cheese.cheeseModel import CheeseModel
from Cheese.resourceManager import ResMan
from Cheese.database import Database

#IMPORTS

"""
File generated by Cheese Framework

Database query of Cheese Application
"""

class CheeseRepository:

    testing = False

    # CLASS METHODS

    @classmethod
    def model(cls):
        repository = Metadata.getRepositoryFromClass(cls.__name__) 
        modelName = Metadata.getModel(repository)
        scheme = Metadata.getScheme(repository)

        model = CheeseModel(modelName, scheme)
        for sch in scheme:
            if (sch == "id"):
                setattr(model, sch, cls.findNewId())
            else:
                setattr(model, sch, "")
        return model

    @classmethod
    def findAll(cls):
        return CheeseRepository.query(cls.__name__)

    @classmethod
    def find(cls, primaryKey):
        return CheeseRepository.query(cls.__name__, primaryKey=primaryKey)

    @classmethod
    def findBy(cls, columnName, value):
        return CheeseRepository.query(cls.__name__, columnName="columnName-" + columnName, value=value)

    @classmethod
    def findNewId(cls):
        return CheeseRepository.query(cls.__name__)+1

    @classmethod
    def save(cls, obj):
        return CheeseRepository.query(cls.__name__, obj=obj)

    @classmethod
    def update(cls, obj):
        return CheeseRepository.query(cls.__name__, obj=obj)

    @classmethod
    def delete(cls, obj):
        return CheeseRepository.query(cls.__name__, obj=obj)

    # STATIC METHODS

    @staticmethod
    def startTesting(mockManager):
        CheeseRepository.mockManager = mockManager
        CheeseRepository.testing = True

    @staticmethod
    def stopTesting():
        CheeseRepository.testing = False

    @staticmethod
    def query(userRepository="", **kwargs):
        if (userRepository == ""):
            userRepository = CheeseRepository.findUserRepository()
            repository = Metadata.getRepository(userRepository)
        else:
            repository = Metadata.getRepositoryFromClass(userRepository)

        methodName = CheeseRepository.findUserMethod()

        if (CheeseRepository.testing):
            return CheeseRepository.mockManager.returnMock(userRepository, methodName, kwargs)

        method = Metadata.getMethod(repository, methodName)

        query = False
        if ("QUERY" in method):
            preparedSql = method["QUERY"]
            query = True
        else:
            preparedSql = method["COMMIT"]

        variables = CheeseRepository.getVariables(preparedSql)

        for key, value in kwargs.items():
            arg = CheeseRepository.getTypeOf(value, variables, key, repository["DBSCHEME"])
            preparedSql = preparedSql.replace(f":{key}", arg)

        preparedSql = preparedSql.replace("*", Metadata.getRawScheme(repository))

        if (query):
            return CheeseRepository.queryType(preparedSql, method, repository)
        else:
            return CheeseRepository.commitType(preparedSql)

        
    @staticmethod
    def queryType(preparedSql, method, repository):
        db = Database()
        response = db.query(preparedSql)
        db.done()

        if (method["RETURN"] == "raw"):
            return response
        elif (method["RETURN"] == "num"):
            if (response[0][0] == None): return 0
            return int(response[0][0])
        elif (method["RETURN"] == "bool"):
            return bool(int(response[0][0]))
        elif (method["RETURN"] == "one"):
            return CheeseRepository.toModel(repository, response[0])
        elif (method["RETURN"] == "array"):
            array = []
            for item in response:
                array.append(CheeseRepository.toModel(repository, item))
            return array

    @staticmethod
    def commitType(preparedSql):
        db = Database()
        db.commit(preparedSql)
        db.done()

        return True

    @staticmethod
    def toModel(repository, data):
        modelName = Metadata.getModel(repository)
        scheme = Metadata.getScheme(repository)
        model = CheeseModel(modelName, scheme)
        model.toModel(data)
        return model

    # finds name of user-made repository
    @staticmethod
    def findUserRepository():
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userRepository = ResMan.getFileName(calframe[2].filename).replace(".py", "")
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
        if (newVar != None):
            variables.append(newVar)
        return variables


    # convert arguments
    @staticmethod
    def getTypeOf(arg, variables=None, key=None, scheme=None):
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
        elif (isinstance(arg, CheeseModel)):
            for var in variables:
                spl = var.split(".")
                if (spl[0] == key):
                    if (len(spl) >= 2):
                        return CheeseRepository.getTypeOf(getattr(arg, spl[1]))
                    else:
                        schemeArr = scheme.replace(")", "").replace("(", "").split(",")
                        newScheme = "("
                        for attr in schemeArr:
                            attr = attr.strip()
                            newScheme += CheeseRepository.getTypeOf(getattr(arg, attr)) + ","
                        newScheme = newScheme[:-1] + ")"
                        return newScheme
        else:
            return str(arg)

