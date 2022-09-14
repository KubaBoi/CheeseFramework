#cheese

import datetime
import inspect
import re

from Cheese.metadata import Metadata
from Cheese.cheeseModel import CheeseModel
from Cheese.resourceManager import ResMan
from Cheese.appSettings import Settings
if (Settings.allowDB):
    from Cheese.database import Database
from Cheese.Logger import Logger

class CheeseRepository:
    """
    `CheeseRepository` is static class for communication with database
    """

    testing = False
    __commitSql = ""
    __autoCommit = True

    @classmethod
    def model(cls, addId=0) -> CheeseModel:
        """
        return `CheeseModel` with `Primary key`, `modelName` and `scheme`
        """
        repository = Metadata.getRepositoryFromClass(cls.__name__) 
        modelName = Metadata.getModel(repository)
        scheme = Metadata.getScheme(repository)

        model = CheeseModel(modelName, scheme)
        for sch in scheme:
            if (sch == "id"):
                setattr(model, sch, cls.findNewId()+addId)
            else:
                setattr(model, sch, "")
        return model

    @classmethod
    def className(cls) -> str:
        """
        return string with name of class
        """
        return cls.__name__

    @classmethod
    def findAll(cls) -> list:
        """
        return whole table of database as list of `CheeseModel`
        """
        return CheeseRepository.query(cls.__name__)

    @classmethod
    def find(cls, primaryKey) -> CheeseModel:
        """
        return one `CheeseModel` by `Primary key`
        """
        return CheeseRepository.query(cls.__name__, primaryKey=primaryKey)

    @classmethod
    def findBy(cls, columnName, value) -> list:
        """
        `DEPRECATED`

        return list of `CheeseModel`

        `columnName` name of column for filtering

        `value` value of `column`

        example:
        ```
        columnName = "age"
        value = 15
        ->
        SQL: "... WHERE age = 15 ..."
        ```
        """
        Logger.warning(f"{Logger.FAIL}!DEPRECATION!{Logger.WARNING} Method findBy(...) is deprecated since 1.6. Use findWhere(...) instead")
        return CheeseRepository.query(cls.__name__, columnName="columnName-" + columnName, value=value)

    @classmethod
    def findOneBy(cls, columnName, value) -> CheeseModel:
        """
        `DEPRECATED`

        return one `CheeseModel` by `columnName`

        `columnName` name of column for filtering

        `value` value of `column`

        example:
        ```
        columnName = "age"
        value = 15
        ->
        SQL: "... WHERE age = 15 ..."
        ```
        """
        Logger.warning(f"{Logger.FAIL}!DEPRECATION!{Logger.WARNING} Method findOneBy(...) is deprecated since 1.6. Use findOneWhere(...) instead")
        return CheeseRepository.query(cls.__name__, columnName="columnName-" + columnName, value=value)

    @classmethod
    def findWhere(cls, **columns) -> list:
        """
        return list of `CheeseModel`

        `**columns` is dictionary of column names and its values

        example:
        ```
        findWhere(age=15, gender="m")
        ->
        SQL: "... WHERE age = 15 AND gender = 'm' ..."
        ```
        """
        filter = ""
        for i, column in enumerate(columns.keys()):
            filter += f"{column}={CheeseRepository.getTypeOf(columns[column])}"
            if (i < len(columns.keys())-1):
                filter += " AND "
        return CheeseRepository.query(cls.__name__, filter="columnName-" + filter)

    @classmethod
    def findOneWhere(cls, **columns) -> CheeseModel:
        """
        return one `CheeseModel`

        `**columns` is dictionary of column names and its values

        example:
        ```
        findOneWhere(age=15, gender="m")
        ->
        SQL: "... WHERE age = 15 AND gender = 'm' ..."
        ```
        """
        filter = ""
        for i, column in enumerate(columns.keys()):
            filter += f"{column}={CheeseRepository.getTypeOf(columns[column])}"
            if (i < len(columns.keys())-1):
                filter += " AND "
        return CheeseRepository.query(cls.__name__, filter="columnName-" + filter)

    @classmethod
    def findNewId(cls) -> int:
        """
        find new available `Primary key`
        """
        return CheeseRepository.query(cls.__name__)+1

    @classmethod
    def save(cls, obj) -> bool:
        """
        creates new row in database

        `obj` is `CheeseModel` object
        """
        return CheeseRepository.query(cls.__name__, obj=obj)

    @classmethod
    def update(cls, obj) -> bool:
        """
        updates row in database

        `obj` is `CheeseModel` object
        """
        return CheeseRepository.query(cls.__name__, obj=obj)

    @classmethod
    def delete(cls, obj) -> bool:
        """
        deletes row from database

        `obj` is `CheeseModel` object
        """
        return CheeseRepository.query(cls.__name__, obj=obj)

    @classmethod
    def exists(cls, **columns) -> bool:
        """
        return `true` if there is any row in database

        `**columns` is dictionary of column names and its values

        example:
        ```
        exists(age=15, gender="m")
        ->
        SQL: "... WHERE age = 15 AND gender = 'm' ..."
        ```
        """
        filter = ""
        for i, column in enumerate(columns.keys()):
            filter += f"{column}={CheeseRepository.getTypeOf(columns[column])}"
            if (i < len(columns.keys())-1):
                filter += " AND "
        return CheeseRepository.query(cls.__name__, filter="columnName-" + filter)

    # STATIC METHODS

    @staticmethod
    def startTesting(mockManager):
        """
        sets repository testing enviroment

        `mockManager` is instance of `MockManager` used by testing
        """
        CheeseRepository.mockManager = mockManager
        CheeseRepository.testing = True

    @staticmethod
    def stopTesting():
        """
        stop repository testing enviroment
        """
        CheeseRepository.testing = False

    @staticmethod
    def query(userRepository="", **kwargs):
        """
        Access point to database. Returns database output.

        `userRepository` is string name of used repository

        `**kwargs` is `dict` of arguments for SQL request
        """
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

            if (type(arg) is list):
                for a in arg:
                    index = 0
                    while True:
                        index = preparedSql.find(":", index)
                        if (index == -1): break
                        newIndex = index+1
                        argName = ""
                        while (re.search(r"[; )]", preparedSql[newIndex]) == None):
                            newIndex += 1
                            if (newIndex >= len(preparedSql)):
                                newIndex -= 1
                                argName = preparedSql[index:newIndex]
                                break
                            argName = preparedSql[index:newIndex]
                        if (argName[1:] == a[1]):
                            break
                        index += 1

                    preparedSql = preparedSql[0:index] + a[0] + preparedSql[newIndex:]
            else:
                preparedSql = preparedSql.replace(f":{key}", arg)

        preparedSql = preparedSql.replace("*", Metadata.getRawScheme(repository))

        if (query):
            return CheeseRepository.queryType(preparedSql, method, repository)
        else:
            return CheeseRepository.commitType(preparedSql)

        
    @staticmethod
    def queryType(preparedSql, method, repository):
        """
        
        """
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
            return CheeseRepository.toModel(repository, response)
        elif (method["RETURN"] == "array"):
            array = []
            for item in response:
                array.append(CheeseRepository.toModel(repository, [item]))
            return array

    @staticmethod
    def commitType(preparedSql):
        if (CheeseRepository.__autoCommit):
            db = Database()
            db.commit(preparedSql)
            db.done()
        else:
            if (not preparedSql.endswith(";")):
                preparedSql += ";"
            preparedSql += "\n"
            CheeseRepository.__commitSql += preparedSql

        return True

    @staticmethod
    def commit():
        if (CheeseRepository.__commitSql != ""):
            db = Database()
            db.commit(CheeseRepository.__commitSql)
            db.done()
            CheeseRepository.__commitSql = ""
            Logger.okGreen("Commited")
        else:
            Logger.warning("Nothing to commit")

    @staticmethod
    def disableAutocommit():
        CheeseRepository.__autoCommit = False
    
    @staticmethod
    def enableAutocommit():
        CheeseRepository.__commitSql = ""
        CheeseRepository.__autoCommit = True

    @staticmethod
    def toModel(repository, data):
        if (len(data) == 0):
            return None

        modelName = Metadata.getModel(repository)
        scheme = Metadata.getScheme(repository)
        model = CheeseModel(modelName, scheme)
        model.toModel(data[0])
        return model

    @staticmethod
    def findUserRepository():
        """
        finds name of user-made repository
        """
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userRepository = ResMan.getFileName(calframe[2].filename).replace(".py", "")
        return userRepository

    @staticmethod
    def findUserMethod():
        """
        finds name of method from user-made repository
        """
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        userMethod = ResMan.getFileName(calframe[2][3])
        return userMethod

    @staticmethod
    def getVariables(sql):
        """
        creates array of variables from sql

        ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

        or 46 (.) or 95 (_)
        """
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

    @staticmethod
    def getTypeOf(arg, variables=None, key=None, scheme=None):
        """
        convert arguments
        """
        if (arg == None):
            return "NULL"
        elif (type(arg) is str):
            if (len(arg) == 0): return "''"
            if (arg[-1] != "\'" 
                and arg[-1] != ")" 
                and not arg.endswith("DESC") 
                and not arg.endswith("ASC")):
                if (arg.startswith("columnName-")):
                    return arg.replace("columnName-", "")
                else:
                    arg = arg.replace("'", "''")
                    return f"\'{arg}\'"
            elif (arg.startswith("columnName-")):
                return arg.replace("columnName-", "")
            else:
                return str(arg)
        elif (type(arg) is list):
            return "(" + ",".join(CheeseRepository.getTypeOf(arg)) + ")"
        elif (type(arg) is datetime.datetime):
            return "'" + datetime.datetime.strftime(arg, "%Y-%m-%dT%H:%M:%S") + "'"
        elif (type(arg) is datetime.date):
            return "'" + datetime.datetime.strftime(arg, "%Y-%m-%d") + "'"
        elif (isinstance(arg, CheeseModel)):
            ret = []
            for var in variables:
                spl = var.split(".")
                if (spl[0] == key):
                    if (len(spl) >= 2):
                        ret.append((CheeseRepository.getTypeOf(getattr(arg, spl[1])), var))
                    else:
                        schemeArr = scheme.replace(")", "").replace("(", "").split(",")
                        newScheme = "("
                        for attr in schemeArr:
                            attr = attr.strip()
                            newScheme += CheeseRepository.getTypeOf(getattr(arg, attr)) + ","
                        newScheme = newScheme[:-1] + ")"
                        ret.append((newScheme, var))
            return ret
        else:
            return str(arg)

