
from cheese.databaseControll.database import Database
from cheese.resourceManager import ResMan
from cheese.Logger import Logger
from cheese.appSettings import Settings

class CreateByDB:

    @staticmethod
    def createFiles(path):
        Settings.loadSettings()

        Settings.allowDebug = True
        Settings.allowDB = True
        ResMan.setPath(path)
        Logger.initLogger()
        CreateByDB.create()


    @staticmethod
    def create():
        database = Database()
        database.connect()

        tables = database.query("SELECT tablename FROM pg_catalog.pg_tables where schemaname='public';")

        for table in tables:
            columns = database.query(f"SELECT column_name from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = N'{table[0]}';")
            for column in columns:
                if (column[0] == "id"):
                    columns.remove(column)
                    columns = [column] + columns
            modelName = CreateByDB.generateModel(table[0], columns)
            CreateByDB.generateRepository(table[0], columns, modelName)

    @staticmethod
    def generateModel(name, columns):
        modelName = name[0].capitalize()
        modelName = CreateByDB.removeSpaces(name, modelName)

        content = "#!/usr/bin/env python\n"
        content += "# -*- coding: utf-8 -*-\n\n"
        content += "from cheese.modules.cheeseModel import CheeseModel\n\n"
        content += "#@model\n"
        content += f"class {modelName}(CheeseModel):\n"
        content += "\tdef __init__(self, "
        for i, column in enumerate(columns):
            content += f"{column[0]}=None"
            if (i < len(columns)-1):
                content += ", "
            else:
                content += "):\n"

        for i, column in enumerate(columns):
            content += f"\t\tself.{column[0]}={column[0]}\n"
        content += "\n"

        content += "\tdef toJson(self):\n"
        content += "\t\treturn {\n"
        for i, column in enumerate(columns):
            content += f"\t\t\t\"{column[0].upper()}\": self.{column[0]}"
            if (i < len(columns)-1):
                content += ","
            content += "\n"
        content += "\t\t}\n"

        content += "\n"
        content += "\tdef toModel(self, json):\n"
        for i, column in enumerate(columns):
            content += f"\t\tself.{column[0]} = json[\"{column[0].upper()}\"]\n"

        with open(f"{ResMan.pythonSrc()}/models/{modelName}.py", "w") as f:
            f.write(content)
        return modelName

    @staticmethod
    def generateRepository(name, columns, modelName):
        repositoryName = name[0].capitalize()
        repositoryName = CreateByDB.removeSpaces(name, repositoryName)
        repositoryName += "Repository"
        
        content = "#!/usr/bin/env python\n"
        content += "# -*- coding: utf-8 -*-\n\n"
        content += "from cheese.modules.cheeseRepository import CheeseRepository\n\n"
        content += f"#@repository {name}\n"
        content += f"#@dbscheme ("
        for i, column in enumerate(columns):
            content += f"{column[0]}"
            if (i < len(columns)-1):
                content += ", "
            else:
                content += ")\n"
        
        content += f"#@dbmodel {modelName}\n"
        content += f"class {repositoryName}(CheeseRepository):\n\n\n\n"

        content += CreateByDB.createMethod("findAll", "query", f"select * from {name};", "array")
        content += CreateByDB.createMethod("find", "query", f"select * from {name} where id=:id;", "one", "id")
        content += CreateByDB.createMethod("findBy", "query", f"select * from {name} where :columnName=:value;", "array", "columnName, value")

        content += "\t@staticmethod\n"
        content += "\tdef findNewId(obj):\n"
        content += "\t\treturn CheeseRepository.findNewId([obj])+1\n\n"

        content += "\t@staticmethod\n"
        content += "\tdef save(obj):\n"
        content += "\t\treturn CheeseRepository.save([obj])\n\n"

        content += "\t@staticmethod\n"
        content += "\tdef update(obj):\n"
        content += "\t\treturn CheeseRepository.update([obj])\n\n"

        content += "\t@staticmethod\n"
        content += "\tdef delete(obj):\n"
        content += "\t\treturn CheeseRepository.delete([obj])\n\n"

        with open(f"{ResMan.pythonSrc()}/repositories/{repositoryName}.py", "w") as f:
            f.write(content)

    @staticmethod
    def createMethod(name, queryType, sql, ret, args=""):
        content = f"\t#@{queryType} \"{sql}\"\n"
        content += f"\t#@return {ret}\n"
        content += "\t@staticmethod\n"
        content += f"\tdef {name}({args}):\n"
        content += f"\t\treturn CheeseRepository.{name}([{args}])\n\n"
        return content

    @staticmethod
    def removeSpaces(name, newName):
        capitalized = False
        for i in range(len(name[1:])):
            if (name[i+1] == "_"):
                newName += name[i+2].capitalize()
                capitalized = True
                continue
            elif (not capitalized):
                newName += name[i+1]
            capitalized = False
        return newName

    @staticmethod
    def addSpaces(name):
        newName = ""
        for i, char in enumerate(name):
            if (ord(char) < 97):
                char = chr(ord(char) + 32)
                if (i > 0):
                    newName += "_"
            newName += char
        return newName
            
        