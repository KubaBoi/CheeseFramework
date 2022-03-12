from cheese.resourceManager import ResMan

class RepositoriesBuilder:
    def __init__(self, sourceFiles):
        self.sourceFiles = sourceFiles

    def buildRepositories(self):
        self.findRepositories()
        self.findModels()
        self.prepareImports()
        self.createMethodsInMainRepository()
        self.rewriteMainRepository()
        self.createImpls()

    def rewriteMainRepository(self):
        with open(f"{ResMan.cheese()}/modules/cheeseRepository.py", "r") as r:
            data = r.read()
        with open(f"{ResMan.cheese()}/modules/cheeseRepository.py", "w") as w:
            data = data.replace("#IMPORTS", self.imports)
            data = data.replace("#INIT", self.initString.expandtabs(4))
            data = data.replace("#QUERY", self.queryString.expandtabs(4))
            data = data.replace("#COMMIT", self.commitString.expandtabs(4))
            w.write(data)

    def prepareImports(self):
        self.imports = "#REPOSITORIES\n"
        for r in self.repositories:
            self.imports += "from cheese.repositories." + r["path"][-1].replace(".py", "") + "Impl"
            self.imports += " import " + r["name"] + "Impl\n"

    def createMethodsInMainRepository(self):
        self.allQueryMethods = []
        self.allCommitMethods = []

        self.initString = ""
        for r in self.repositories:
            self.createInitInMainRepository(r)
            for q in r["queries"]:
                if (q["defName"] not in self.allQueryMethods):
                    self.allQueryMethods.append(q["defName"])
            for c in r["commits"]:
                if (c["defName"] not in self.allCommitMethods):
                    self.allCommitMethods.append(c["defName"])

        self.queryString = ""
        for q in self.allQueryMethods:
            self.createQueryMethod(q)

        self.commitString = ""
        for c in self.allCommitMethods:
            self.createCommitMethod(c)

    def createInitInMainRepository(self, repo):
        name = repo["name"] + "Impl"
        self.initString += f"\t\t{name}.init()\n"

    def createQueryMethod(self, defName):
        self.queryString += f"\t@staticmethod\n\tdef {defName}(args):\n"
        self.queryString += f"\t\tuserRepository = CheeseRepository.findUserRepository()\n"
        self.queryString += f"\t\targs = CheeseRepository.getTypeOf(args)\n\n"

        for r in self.repositories:
            for q in r["queries"]:
                if (q["defName"] == defName):
                    if (self.queryString.endswith("\n\n")):
                        self.queryString += "\t\tif "
                    else:
                        self.queryString += "\t\telif "

                    name = r["name"]
                    pathName = r["path"][-1].replace(".py", "")
                    self.queryString += f"(userRepository == \"{pathName}\"):\n"
                    self.queryString += f"\t\t\treturn {name}Impl.{defName}(args)\n"

    def createCommitMethod(self, defName):
        self.commitString += f"\t@staticmethod\n\tdef {defName}(args):\n"
        self.commitString += f"\t\tuserRepository = CheeseRepository.findUserRepository()\n\n"

        for r in self.repositories:
            for q in r["commits"]:
                if (q["defName"] == defName):
                    if (self.commitString.endswith("\n\n")):
                        self.commitString += "\t\tif "
                    else:
                        self.commitString += "\t\telif "

                    name = r["name"]
                    pathName = r["path"][-1].replace(".py", "")
                    self.commitString += f"(userRepository == \"{pathName}\"):\n"
                    self.commitString += f"\t\t\treturn {name}Impl.{defName}(args)\n"


    def createImpls(self):
        for r in self.repositories:
            content = "#!/usr/bin/env python\n# -*- coding: utf-8 -*-"
            content += "\n#AUTOGENERATED FILE\n"
            content += "\nfrom cheese.databaseControll.database import Database\n"
            content += "from cheese.Logger import Logger\n"

            for m in self.models:
                if (m["name"] == r["model"]):
                    content += "from python"
                    for p in m["path"]:
                        content += "." + p.replace(".py", "")
                    content += " import " + m["name"] + "\n\n"
                    break

            name = r["name"]
            content += f"\nclass {name}Impl:\n\n"
            content += self.createInit(r)
            content += self.createConvertMethod()
            content += self.createToJsonMethod(r)
            content += self.createToModelMethod(r)
            content += self.createFromModelMethod(r)


            for m in r["queries"]:
                content += self.createImplQueryMethod(m, r)
            for m in r["commits"]:
                content += self.createImplCommitMethod(m, r)

            fileName = r["path"][-1].replace(".py", "Impl.py")
            with open(f"{ResMan.cheese()}/repositories/{fileName}", "w") as f:
                f.write(content.expandtabs(4))
            
    def createInit(self, repo):
        name = repo["name"] + "Impl"
        table = repo["table"]
        scheme = repo["scheme"]
        schemeNoBrackets = scheme.replace(")", "").replace("(", "")

        content = "\t@staticmethod\n\tdef init():\n"
        content += f"\t\t{name}.table = \"{table}\"\n"
        content += f"\t\t{name}.scheme = \"{scheme}\"\n"
        content += f"\t\t{name}.schemeNoBrackets = \"{schemeNoBrackets}\"\n"

        content += "\n"
        return content


    def createImplQueryMethod(self, method, repo):
        content = "\t@staticmethod\n"
        defName = method["defName"]
        content += f"\tdef {defName}(args):\n"
        newQuery = method["query"]

        for i, arg in enumerate(method["arguments"]):
            arg = arg.strip()
            if (arg != ""):
                content += f"\t\t{arg} = args[{i}]\n"
                newQuery = newQuery.replace(f":{arg}", "{" + arg + "}")
        content += "\n"

        if (newQuery.split(" ")[1] == "*"):
            newQuery = newQuery.replace("*", "{" + repo["name"] + "Impl.schemeNoBrackets}")

        content += "\t\tresponse = None\n"
        content += "\t\ttry:\n"
        content += f"\t\t\tresponse = Database.query(f{newQuery})\n"
        content += "\t\t\tDatabase.done()\n"
        content += "\t\texcept Exception as e:\n"
        content += "\t\t\tLogger.fail(str(e))\n\n"
        content += "\t\tif (response == None): return response\n"
        
        name = repo["name"] + "Impl"

        if (method["typeOfReturn"] == "array"):
            content += f"\t\tresp = []\n"
            content += f"\t\tfor a in response:\n"
            content += f"\t\t\tresp.append({name}.toModel(a))\n"
            content += "\t\treturn resp\n"
        elif (method["typeOfReturn"] == "one"):
            content += f"\t\tif (len(response) > 0):\n"
            content += f"\t\t\treturn {name}.toModel(response[0])\n"
            content += f"\t\telse: return None\n"
        elif (method["typeOfReturn"] == "bool"):
            content += f"\t\tif (response[0][0] == \"1\"): return True\n"
            content += f"\t\treturn False\n"
        elif (method["typeOfReturn"] == "num"):
            content += f"\t\treturn int(response[0][0])\n" 
        elif (method["typeOfReturn"] == "raw"):
            content += f"\t\treturn response\n"
        content += "\n"
        return content

    def createImplCommitMethod(self, method, repo):
        content = "\t@staticmethod\n"
        defName = method["defName"]
        content += f"\tdef {defName}(args):\n"
        newQuery = method["query"]

        for i, arg in enumerate(method["arguments"]):
            if (arg != ""):
                arg = arg.strip()
                if (method["object"] == "enabled"):
                    content += f"\t\t{arg} = " + repo["name"] + "Impl.fromModel(args[" + str(i) + "])\n"
                else:
                    content += f"\t\t{arg} = args[{i}]\n"
                newQuery = newQuery.replace(f":{arg}", "{" + arg + "}")
        content += "\n"

        content += f"\t\ttry:\n"
        content += f"\t\t\tDatabase.commit(f{newQuery})\n"
        content += f"\t\t\tDatabase.done()\n"
        content += f"\t\t\treturn True\n"
        content += f"\t\texcept Exception as e:\n"
        content += f"\t\t\tLogger.fail(str(e))\n"
        content += f"\t\t\treturn False\n"
        content += "\n"
        return content

    def createToJsonMethod(self, repo):
        name = repo["name"] + "Impl"

        content = f"\t@staticmethod\n\tdef toJson(object):\n"
        content += f"\t\tscheme = {name}.schemeNoBrackets.split(\",\")\n"
        content += "\t\tret = {}\n"
        content += f"\t\tfor s, o in zip(scheme, list(object)):\n"
        content += f"\t\t\ttry:\n"
        content += f"\t\t\t\tret[s] = int(o)\n"
        content += f"\t\t\texcept:\n"
        content += f"\t\t\t\tret[s] = o\n"
        content += f"\t\treturn ret\n"
        content += "\n"
        return content

    def createToModelMethod(self, repo):
        name = repo["name"] + "Impl"
        modelName = repo["model"]
        schemeNoBrackets = repo["scheme"].replace(")", "").replace("(", "")

        content = f"\t@staticmethod\n\tdef toModel(obj):\n"
        content += f"\t\tmodel = {modelName}()\n"

        for i, s in enumerate(schemeNoBrackets.split(",")):
            content +=  f"\t\tmodel.{s} = {name}.convert(obj[{i}])\n"

        content += "\t\treturn model\n"
        content += "\n"
        return content

    def createFromModelMethod(self, repo):
        schemeNoBrackets = repo["scheme"].replace(")", "").replace("(", "")

        content = f"\t@staticmethod\n\tdef fromModel(model):\n"
        content += f"\t\ttuple = (\n"

        for i, s in enumerate(schemeNoBrackets.split(",")):
            content +=  f"\t\t\tmodel.{s},\n"

        content  = content[:-2]
        content += "\n\t\t)\n"     
        content += "\t\treturn tuple\n"    
        content += "\n"
        return content

    def createConvertMethod(self):
        content = "\t@staticmethod\n\tdef convert(var):\n"
        content += "\t\ttry:\n"
        content += "\t\t\tvar = int(var)\n"
        content += "\t\texcept:\n"
        content += "\t\t\tvar = var\n"
        content += "\t\treturn var\n\n"
        return content


    def findRepositories(self):
        self.repositories = []
        for f in self.sourceFiles:
            with open(f"{ResMan.joinPath(ResMan.pythonSrc(), ResMan.joinArray(f))}", "r") as c:
                lines = c.readlines()
                for i in range(len(lines)):
                    line = lines[i]
                    if (line.startswith("#@repository")):
                        self.prepareRepository(f, lines)
                        continue

    def findModels(self):
        self.models = []
        for f in self.sourceFiles:
            with open(f"{ResMan.joinPath(ResMan.pythonSrc(), ResMan.joinArray(f))}", "r") as c:
                lines = c.readlines()
                for i in range(len(lines)):
                    line = lines[i]
                    if (line.startswith("#@model")):
                        self.prepareModel(f, lines)
                        continue

    def findNameOf(self, line):
        return line.split(" ")[1].split("(")[0]

    def findArg(self, line):
        return "".join(line.split(" ")[1:])

    def arguments(self, defS):
        args = defS.split("(")[1].replace("):", "").split(",")
        for a in args:
            a = a.strip()
        return args

    def prepareRepository(self, path, lines):
        queries = []
        commits = []

        for i in range(len(lines)):
            line = lines[i].strip()
            
            # table name
            if (line.startswith("#@repository")):
                table = self.findArg(line)

            # dbscheme
            elif (line.startswith("#@dbscheme")):
                scheme = self.findArg(line)

            # model name
            elif (line.startswith("#@dbmodel")):
                model = self.findArg(line)

            # name of class
            elif (line.startswith("class")): 
                name = self.findNameOf(line)

            # query
            elif (line.startswith("#@query")):
                query = line
                while not query.endswith("\""):
                    i += 1
                    query += lines[i].strip()
                query = query.replace("#@query ", "").replace("#", " ")
                query = " ".join(query.split())
                
                i += 1
                if (lines[i].strip().startswith("#@return")):
                    typeOfReturn = self.findArg(lines[i].strip())
                else:
                    i -= 1
                    typeOfReturn = "raw"

                i += 2
                defName = self.findNameOf(lines[i].strip())
                defS = lines[i].strip()
                queries.append(
                    {
                        "query": query,
                        "typeOfReturn": typeOfReturn,
                        "defName": defName,
                        "def": defS,
                        "arguments": self.arguments(defS)
                    }
                )

            # commit
            elif (line.startswith("#@commit")):
                query = line
                while not query.endswith("\""):
                    i += 1
                    query += lines[i].strip()
                query = query.replace("#@commit ", "").replace("#", " ")

                i += 2
                if (lines[i].startswith("#@acceptmodel")):
                    enabled = self.findArg(lines[i].strip())
                    i += 1
                else:
                    enabled = "disabled"

                defName = self.findNameOf(lines[i].strip())
                defS = lines[i].strip()
                commits.append(
                    {
                        "query": query,
                        "defName": defName,
                        "def": defS,
                        "arguments": self.arguments(defS),
                        "object": enabled
                    }
                )

        commits = self.preCommits(commits, name, scheme)

        self.repositories.append(
            {
                "table": table,
                "scheme": scheme,
                "path": path,
                "name": name,
                "model": model,
                "queries": queries,
                "commits": commits
            }
        )

    def prepareModel(self, path, lines):
        for i in range(len(lines)):
            line = lines[i].strip()

            # name of class
            if (line.startswith("class")): 
                name = self.findNameOf(line)

        self.models.append(
            {
                "name": name,
                "path": path
            }
        )

            


    # prefabricated commit methods 
    def preCommits(self, commits, name, scheme):
        scheme = scheme.replace("(", "").replace(")", "")
        #save
        commits.append(
            {
                "query": "\"insert into {" + name + "Impl.table} {" + name + "Impl.scheme} values :obj;\"",
                "defName": "save",
                "def": "def save(obj):",
                "arguments": self.arguments("def save(obj):"),
                "object": "enabled"
            }
        )
        #update
        commits.append(
            {
                "query": "\"update {" + name + "Impl.table} set {" + name + "Impl.scheme} = :obj where id={obj[0]};\"",
                "defName": "update",
                "def": "def update(obj):",
                "arguments": self.arguments("def update(obj):"),
                "object": "enabled"
            }
        )
        #delete
        commits.append(
            {
                "query": "\"delete from {" + name + "Impl.table} where id={obj[0]};\"",
                "defName": "delete",
                "def": "def delete(obj):",
                "arguments": self.arguments("def delete(obj):"),
                "object": "enabled"
            }
        )

        return commits