#cheese

import os

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class RepositoriesBuilder:

    def __init__(self, parent):
        self.parent = parent

    def build(self):
        repositories = []

        for root, dirs, files in os.walk(ResMan.src()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "repository")): 
                    repositories.append(path)

        self.parent.doJson(repositories, "REPOSITORIES", 
            ["REPOSITORY", "DBSCHEME", "DBMODEL"],
            [("QUERY", [("RETURN", "raw")]), ("COMMIT", [])])

        self.preQueries()
        self.preCommits()
    

    # prefabricated query methods
    def preQueries(self):
        for repoKey in self.parent.dictJson["REPOSITORIES"].keys():
            repo = self.parent.dictJson["REPOSITORIES"][repoKey]

            repo["METHODS"]["findNewId"] = {
                    "QUERY": f"select max(id) from {repo['REPOSITORY']};",
                    "RETURN": "num"
                }

    # prefabricated commit methods 
    def preCommits(self):
        for repoKey in self.parent.dictJson["REPOSITORIES"].keys():
            repo = self.parent.dictJson["REPOSITORIES"][repoKey]
            scheme = repo["DBSCHEME"]
            name = repo["REPOSITORY"]

            repo["METHODS"]["save"] = {
                    "COMMIT": f"insert into {name} {scheme} values :obj;",
                    "RETURN": ""
                }
            
            repo["METHODS"]["update"] = {
                    "COMMIT": f"update {name} set {scheme} = :obj where id=obj.id;",
                    "RETURN": ""
                }

            repo["METHODS"]["delete"] = {
                    "COMMIT": f"delete from {name} where id=model.id;",
                    "RETURN": ""
                }