#cheese

import os
import json

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class RepositoriesBuilder:
    def __init__(self):
        self.repoJson = {"REPOSITORIES": [], "MODELS": []}

    def build(self):
        self.repositories = []
        self.models = []

        for root, dirs, files in os.walk(ResMan.src()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "repository")): 
                    self.repositories.append(path)
                elif (Finder.isSomething(path, "model")):
                    self.models.append(path)

        self.doRepositoriesJson()
        self.doModelsJson()

        self.preQueries()
        self.preCommits()

        for model in self.repoJson["MODELS"]:
            path = model["FILE"].replace(ResMan.getFileName(model["FILE"]), "")[:-1]
            with open(os.path.join(ResMan.src(), path, "__init__.py"), "a") as f:
                f.write(f"from {model['FILE'].replace('/', '.')} import {model['CLASS']}")

        with open(os.path.join(ResMan.metadata(), "repMetadata.json"), "w") as f:
            f.write(json.dumps(self.repoJson))

    def doRepositoriesJson(self):
        for repo in self.repositories:
            with open(repo, "r") as f:
                data = f.read()

            repoName = Finder.getAnnotation(data, "#@repository", repo)[0]
            dbScheme = Finder.getAnnotation(data, "#@dbscheme", repo)[0]
            model = Finder.getAnnotation(data, "#@dbmodel", repo)[0]
            className = Finder.getName(data, "class", repo)[0]

            methods = []
            methods.extend(self.findRepoMethods(data, repo))
            methods.extend(self.findRepoMethods(data, repo, "commit"))

            self.repoJson["REPOSITORIES"].append(
                {
                    "FILE": ResMan.getFileName(repo).replace(".py", ""),
                    "CLASS": className,
                    "NAME": repoName,
                    "SCHEME": dbScheme,
                    "MODEL": model,
                    "METHODS": methods
                }
            )

    def doModelsJson(self):
        for model in self.models:
            with open(model, "r") as f:
                data = f.read()

            className = Finder.getName(data, "class", model)[0]

            file = ResMan.getRelativePathFrom(model, ResMan.src()).replace(".py", "")
            file = file.replace("\\", "/")[1:]

            self.repoJson["MODELS"].append(
                {
                    "FILE": file,
                    "CLASS": className,
                }
            )



    def findRepoMethods(self, data, repo, type="query"):
        fr = 0
        queryMethods = []
        while True:
            qr = Finder.getAnnotation(data, "#@"+type, repo, fr, False)
            if (not qr):
                break
            query = qr[0]
            fr = qr[1]

            if (type == "query"):
                acceptsModel = False
                retq = Finder.getAnnotation(data, "#@return", repo, fr, False)
                if (not retq):
                    retqm = "raw"
                else:
                    retqm = retq[0]
                    fr = retq[1]
            else:
                retqm = ""
                if (not Finder.getAnnotation(data, "#@acceptsModel", fr, False, 20)):
                    acceptsModel = False
                else:
                    acceptsModel = True

            met = Finder.getName(data, "def", repo, fr)
            if (not met):
                raise SyntaxError(f"Cannot find method for query {query} in {repo}")
            metn = met[0]
            fr = met[1]

            queryMethods.append(
                {
                    "SQL": query.replace("\"", ""),
                    "RETURN": retqm,
                    "METHOD": metn,
                    "TYPE": type,
                    "ACCEPTS_MODEL": acceptsModel
                }
            )
        return queryMethods

    

    # prefabricated query methods
    def preQueries(self):
        for repo in self.repoJson["REPOSITORIES"]:
            repo["METHODS"].append(
                {
                    "SQL": f"select max(id) from {repo['NAME']};",
                    "RETURN": "num",
                    "METHOD": "findNewId",
                    "TYPE": "query",
                    "ACCEPTS_MODEL": False
                }
            )

    # prefabricated commit methods 
    def preCommits(self):
        for repo in self.repoJson["REPOSITORIES"]:
            name = repo["NAME"]
            scheme = repo["SCHEME"]
            repo["METHODS"].append(
                {
                    "SQL": f"insert into {name} {scheme} values :obj;",
                    "RETURN": "",
                    "METHOD": "save",
                    "TYPE": "commit",
                    "ACCEPTS_MODEL": True
                }
            )
            repo["METHODS"].append(
                {
                    "SQL": f"update {name} set {scheme} = :obj where id=obj.id;",
                    "RETURN": "",
                    "METHOD": "update",
                    "TYPE": "commit",
                    "ACCEPTS_MODEL": True
                }
            )
            repo["METHODS"].append(
                {
                    "SQL": f"delete from {name} where id=model.id;",
                    "RETURN": "",
                    "METHOD": "delete",
                    "TYPE": "commit",
                    "ACCEPTS_MODEL": True
                }
            )