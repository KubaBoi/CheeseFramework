#cheese

import os

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder

class RepositoriesBuilder:

    @staticmethod
    def build(parent):
        repositories = []

        for root, dirs, files in os.walk(ResMan.root()):
            for file in files:
                if (not file.endswith(".py")): continue

                path = os.path.join(root, file)

                if (Finder.isSomething(path, "repository")): 
                    repositories.append(path)

        parent.doJson(repositories, "REPOSITORIES", 
            ["REPOSITORY", "DBSCHEME", "DBMODEL"],
            [("QUERY", [("RETURN", "raw")]), ("COMMIT", [])])

        RepositoriesBuilder.preQueries(parent)
        RepositoriesBuilder.preCommits(parent)
    

    # prefabricated query methods
    @staticmethod
    def preQueries(parent):
        for repoKey in parent.dictJson["REPOSITORIES"].keys():
            repo = parent.dictJson["REPOSITORIES"][repoKey]

            repo["METHODS"]["findNewId"] = {
                    "QUERY": f"select max(id) from {repo['REPOSITORY']};",
                    "RETURN": "num"
                }

    # prefabricated commit methods 
    @staticmethod
    def preCommits(parent):
        for repoKey in parent.dictJson["REPOSITORIES"].keys():
            repo = parent.dictJson["REPOSITORIES"][repoKey]
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