#cheese

import os

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class RepositoriesBuilder:

    def __init__(self, parent):
        self.parent = parent

    def build(self):
        repositories = []
        models = []

        for root, dirs, files in os.walk(ResMan.src()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "repository")): 
                    repositories.append(path)
                elif (Finder.isSomething(path, "model")):
                    models.append(path)

        self.parent.doJson(repositories, "REPOSITORIES", 
            ["REPOSITORY", "DBSCHEME", "DBMODEL"],
            [("QUERY", [("RETURN", "raw")]), ("COMMIT", [])])
        self.parent.doJson(models, "MODELS", [], [])

        #self.preQueries()
        #self.preCommits()
    

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