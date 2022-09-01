#cheese

import os
import re

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

        for repo in parent.dictJson["REPOSITORIES"].keys():
            scheme = parent.dictJson["REPOSITORIES"][repo]["DBSCHEME"]
            pk = re.search("\((?P<pk>\w+),.*", scheme)
            parent.dictJson["REPOSITORIES"][repo]["PRIMARY_KEY"] = pk["pk"]

        RepositoriesBuilder.preQueries(parent)
        RepositoriesBuilder.preCommits(parent)
    

    # prefabricated query methods
    @staticmethod
    def preQueries(parent):
        for repoKey in parent.dictJson["REPOSITORIES"].keys():
            repo = parent.dictJson["REPOSITORIES"][repoKey]

            repo["METHODS"]["findAll"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']};",
                "RETURN": "array"
            }
            repo["METHODS"]["find"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']} WHERE {repo['PRIMARY_KEY']}=:primaryKey;",
                "RETURN": "one"
            }
            # DEPRECATED
            repo["METHODS"]["findBy"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']} WHERE :columnName=:value;",
                "RETURN": "array"
            }
            # DEPRECATED
            repo["METHODS"]["findOneBy"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']} WHERE :columnName=:value;",
                "RETURN": "one"
            }
            repo["METHODS"]["findWhere"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']} WHERE :filter;",
                "RETURN": "array"
            }
            repo["METHODS"]["findOneWhere"] = {
                "QUERY": f"SELECT * FROM {repo['REPOSITORY']} WHERE :filter;",
                "RETURN": "one"
            }
            repo["METHODS"]["findNewId"] = {
                "QUERY": f"SELECT MAX(id) FROM {repo['REPOSITORY']};",
                "RETURN": "num"
            }
            repo["METHODS"]["exists"] = {
                "QUERY": f"SELECT CASE WHEN EXISTS (SELECT * from {repo['REPOSITORY']} WHERE :filter) THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT) END;",
                "RETURN": "bool"
            }

    # prefabricated commit methods 
    @staticmethod
    def preCommits(parent):
        for repoKey in parent.dictJson["REPOSITORIES"].keys():
            repo = parent.dictJson["REPOSITORIES"][repoKey]
            scheme = repo["DBSCHEME"]
            name = repo["REPOSITORY"]

            repo["METHODS"]["save"] = {
                    "COMMIT": f"INSERT INTO {name} {scheme} VALUES :obj;",
                    "RETURN": ""
                }
            
            repo["METHODS"]["update"] = {
                    "COMMIT": f"UPDATE {name} SET {scheme} = :obj WHERE {repo['PRIMARY_KEY']}=:obj.{repo['PRIMARY_KEY']};",
                    "RETURN": ""
                }

            repo["METHODS"]["delete"] = {
                    "COMMIT": f"DELETE FROM {name} WHERE {repo['PRIMARY_KEY']}=:obj.{repo['PRIMARY_KEY']};",
                    "RETURN": ""
                }