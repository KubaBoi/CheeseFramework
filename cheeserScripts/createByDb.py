import sys
import os
from venv import create

from cheese.databaseControll.database import Database
from cheese.resourceManager import ResMan
from cheese.Logger import Logger
from cheese.appSettings import Settings


"""
"dbDriver": "postgres",
"dbHost": "localhost",
"dbName": "database",
"dbUser": "postgres",
"dbPassword": "admin",
"dbPort": 5432,
"""

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

    def generateModel(name, columns):
        modelName = name[0].capitalize()
        capitalized = False
        for i in range(len(name[1:])):
            if (name[i+1] == "_"):
                modelName += name[i+2].capitalize()
                capitalized = True
                continue
            elif (not capitalized):
                modelName += name[i+1]
            capitalized = False

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

    def generateRepository(name, columns, modelName):
        repositoryName = ""
        capitalized = False
        for i in range(len(name)):
            if (name[i] == "_"):
                repositoryName += name[i+1].capitalize()
                capitalized = True
                continue
            elif (not capitalized):
                repositoryName += name[i]
            capitalized = False
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
        content += f"class {repositoryName.capitalize()}(CheeseRepository):\n\n\n\n"
        content += f"\t#@query \"select max(id) from {name}\";\n"
        content += "\t#@return num\n"
        content += "\t#@staticmethod\n"
        content += "\tdef findNewId():\n"
        content += "\t\ttry:\n"
        content += "\t\t\treturn CheeseRepository.findNewId([])+1\n"
        content += "\t\texcept:\n"
        content += "\t\t\treturn 0\n\n"

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


        