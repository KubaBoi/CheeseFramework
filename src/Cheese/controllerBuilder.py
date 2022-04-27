
from Cheese.resourceManager import ResMan

class ControllerBuilder:
    def __init__(self, sourceFiles):
        self.sourceFiles = sourceFiles

    def buildControllers(self):
        self.findControllers()
        self.findAuthorization()
        self.prepareImports()
        self.prepareGets()
        self.preparePosts()
        self.rewriteServer()

    def rewriteServer(self):
        with open(f"{ResMan.cheese()}/server/cheeseServer.py", "r") as r:
            data = r.read()
        with open(f"{ResMan.cheese()}/server/cheeseServer.py", "w") as w:
            data = data.replace("#CONTROLLERS", self.imports)
            data = data.replace("#GET", self.gets.expandtabs(4))
            data = data.replace("#POST", self.posts.expandtabs(4))
            w.write(data)


    def prepareImports(self):
        self.imports = "#REST CONTROLLERS\n"
        self.inits = ""
        for c in self.controllers:
            self.imports += "from python"
            for p in c["path"]:
                self.imports += "." + p.replace(".py", "")
            self.imports += " import " + c["name"] + "\n"

            self.inits += "\t\t" + c["name"] + ".init()\n"

    def prepareGets(self):
        self.gets = ""

        if (not self.hasIndex()):
            self.gets += "\t\t\tif (path == \"/\"):\n\t\t\t\tCheeseController.serveFile(self, \"index.html\")\n"
        for c in self.controllers:
            if (self.gets == ""):
                self.gets += "\t\t\tif "
            else:
                self.gets += "\t\t\telif "
            
            pEndp = c["primaryEndpoint"]
            cName = c["name"]
            self.gets += f"(path.startswith(\"{pEndp}\")):\n"

            if (len(c["get"]) == 0): # if there are no endpoints in controller
                self.gets += "\t\t\t\tpass\n"
            else:
                getsS = ""
                for g in c["get"]:
                    if (getsS == ""):
                        getsS += "\t\t\t\tif "
                    else:
                        getsS += "\t\t\t\telif "

                    endp = g["endpoint"]
                    defName = g["defName"]
                    getsS += f"(path.startswith(\"{pEndp}{endp}\")):\n"
                    getsS += f"\t\t\t\t\t{cName}.{defName}(self, self.path, auth)\n"

                self.gets += getsS
                self.gets += "\t\t\t\telse:\n"
                self.gets += "\t\t\t\t\tif (self.path.endswith(\".css\")):\n"
                self.gets += "\t\t\t\t\t\tCheeseController.serveFile(self, self.path, \"text/css\")\n"
                self.gets += "\t\t\t\t\telse:\n"
                self.gets += "\t\t\t\t\t\tCheeseController.serveFile(self, self.path)\n"
        self.gets += "\t\t\telse:\n"
        self.gets += "\t\t\t\tif (self.path.endswith(\".css\")):\n"
        self.gets += "\t\t\t\t\tCheeseController.serveFile(self, self.path, \"text/css\")\n"
        self.gets += "\t\t\t\telse:\n"
        self.gets += "\t\t\t\t\tCheeseController.serveFile(self, self.path)\n"

        if (self.isAuthorizationEnabled):
            self.gets = ("\t\t\tauth = Authorization.authorize(self, self.path, \"GET\")\n" 
                + "\t\t\tif (auth == -1): \n\t\t\t\tCheeseController.sendResponse(self, Error.BadToken)\n\t\t\t\treturn\n\n" + self.gets)
        else:
            self.gets = "\t\t\tauth = None\n\n" + self.gets
        self.gets = "\t\t\tpath = CheeseController.getPath(self.path)\n" + self.gets

    def preparePosts(self):
        self.posts = ""

        for c in self.controllers:
            if (self.posts == ""):
                self.posts += "\t\t\tif "
            else:
                self.posts += "\t\t\telif "
            
            pEndp = c["primaryEndpoint"]
            cName = c["name"]
            self.posts += f"(self.path.startswith(\"{pEndp}\")):\n"

            if (len(c["post"]) == 0): # if there are no endpoints in controller
                self.posts += "\t\t\t\tpass\n"
            else:
                postsS = ""
                for g in c["post"]:
                    if (postsS == ""):
                        postsS += "\t\t\t\tif "
                    else:
                        postsS += "\t\t\t\telif "

                    endp = g["endpoint"]
                    defName = g["defName"]
                    postsS += f"(self.path.startswith(\"{pEndp}{endp}\")):\n"
                    postsS += f"\t\t\t\t\t{cName}.{defName}(self, self.path, auth)\n"

                self.posts += postsS
                self.posts += "\t\t\t\telse:\n\t\t\t\t\tError.sendCustomError(self, \"Endpoint not found :(\", 404)\n"
        if (self.posts != ""):
            self.posts += "\t\t\telse:\n\t\t\t\tError.sendCustomError(self, \"Endpoint not found :(\", 404)\n"
        
        if (self.isAuthorizationEnabled):
            self.posts = ("\t\t\tauth = Authorization.authorize(self, self.path, \"POST\")\n" 
                + "\t\t\tif (auth == -1): \n\t\t\t\tCheeseController.sendResponse(self, Error.BadToken)\n\t\t\t\treturn\n\n" + self.posts)
        else:
            self.posts = "\t\t\tauth = None\n\n" + self.posts

    def hasIndex(self):
        for c in self.controllers:
            if (c["primaryEndpoint"] == "/"):
                return True
        return False

    def findNameOf(self, line):
        return line.split(" ")[1].split("(")[0]

    def findEndpoint(self, line):
        return line.split(" ")[1]

    def findControllers(self):
        self.controllers = []
        for f in self.sourceFiles:
            with open(f"{ResMan.joinPath(ResMan.pythonSrc(), ResMan.joinArray(f))}", "r") as c:
                lines = c.readlines()
                for i in range(len(lines)):
                    line = lines[i]
                    if (line.startswith("#@controller")):
                        self.prepareController(f, lines)
                        continue

    def findAuthorization(self):
        self.authorization = []
        for f in self.sourceFiles:
            with open(f"{ResMan.joinPath(ResMan.pythonSrc(), ResMan.joinArray(f))}", "r") as c:
                lines = c.readlines()
                for i in range(len(lines)):
                    line = lines[i]
                    if (line.startswith("#@authorization")):
                        self.prepareAuthorization(lines)
                        continue

    def prepareController(self, path, lines):
        gets = []
        posts = []

        for i in range(len(lines)):
            line = lines[i].strip()
            
            # primary endpoint
            if (line.startswith("#@controller")):
                primaryEndpoint = self.findEndpoint(line)

            # name of class
            elif (line.startswith("class")): 
                name = self.findNameOf(line)

            # get
            elif (line.startswith("#@get")):
                enpoint = self.findEndpoint(line)
                while not line.startswith("def"):
                    i += 1
                    line = lines[i].strip()
                defName = self.findNameOf(line)
                gets.append(
                    {
                        "endpoint": enpoint,
                        "defName": defName
                    }
                )
            
            # post
            elif (line.startswith("#@post")):
                enpoint = self.findEndpoint(line)
                while not line.startswith("def"):
                    i += 1
                    line = lines[i].strip()
                defName = self.findNameOf(line)
                posts.append(
                    {
                        "endpoint": enpoint,
                        "defName": defName
                    }
                )

        self.controllers.append(
            {
                "primaryEndpoint": primaryEndpoint,
                "path": path,
                "name": name,
                "get": gets,
                "post": posts
            }
        )

    def prepareAuthorization(self, lines):

        for i in range(len(lines)):
            line = lines[i].strip()
            
            # enabled
            if (line.startswith("#@authorization")):
                enabled = self.findEndpoint(line)

        self.isAuthorizationEnabled = False
        if (enabled == "enabled"):
            self.isAuthorizationEnabled = True
