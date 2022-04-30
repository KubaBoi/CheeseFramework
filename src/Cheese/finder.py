#cheese

from Cheese.Logger import Logger

class Finder:

    @staticmethod
    def isSomething(file, type):
        with open(file, "r") as f:
            data = f.read()
        
        if (data.find("#@" + type) != -1):
            return True
        return False

    classAnnotations = [
        "#@controller",
        "#@repository",
        "#@dbscheme",
        "#@dbmodel",
        "#@model"
    ]
    methodAnnotations = [
        "#@post",
        "#@get",
        "#@query",
        "#@commit",
        "#@return"
    ]

    def loadFile(self, file):
        self.file = file
        with open(file, "r") as f:
            dLines= f.readlines()

        self.dataLines = []
        for line in dLines:
            self.dataLines.append(line.strip())

    def findClasses(self):
        return self.findAnnotatedStructure(self.classAnnotations, "class")

    def findMethods(self):
        return self.findAnnotatedStructure(self.methodAnnotations, "def")

    # finds all annotated structures like class and def
    def findAnnotatedStructure(self, annotationSet, name):
        structures = []

        for i, line in enumerate(self.dataLines):
            
            if (line.startswith(name)):
                annots = self.isAnnotated(i, annotationSet)
                if (not annots): continue

                structureName = "".join(line.split(" ")[1:]).split("(")[0]
                structures.append(
                    {
                        "NAME": structureName,
                        "ANNOTATIONS": annots,
                        "INDEX": i
                    }
                )
        return structures

    # runs through lines above line while they are annotations or it is end of file
    def isAnnotated(self, index, annotationSet):
        endIndex = index
        index -= 1
        
        while (index > 0): # finds start of annotating and commenting
            upperLine = self.dataLines[index]

            if (upperLine.startswith("@") or 
                upperLine.startswith("#")):
                index -= 1
            else:
                break

        newAnn = ""
        annots = []

        for i in range(index, endIndex):
            line = self.dataLines[i]

            if (line.startswith("@")): continue # python annotation skipping this line

            if (not self.startsWith(line, annotationSet)): continue
            
            newAnn = line
            while (not newAnn.endswith(";")):
                i += 1
                if (self.startsWith(self.dataLines[i], annotationSet)):
                    self.raiseError(i+1, f"Missing end of annotation {self.wOkG(self.getAnnotationType(newAnn))}")
                newAnn += self.getMultiline(i+1, line)

            annots.append(newAnn)

        if (len(annots) == 0): return False

        retAnns = {}
        for ann in annots:
            retAnns[self.getAnnotationType(ann, True)] = self.getAnnotationContent(ann)

        return retAnns

    # helpful methods

    def startsWith(self, string, starterSet):
        for starter in starterSet:
            if (string.startswith(starter)):
                return True
        return False

    def getAnnotationType(self, annotation, notSing=False):
        if (notSing):
            return annotation.split(" ")[0].replace("#@", "")
        return annotation.split(" ")[0]

    def getMultiline(self, index, line):
        if (line.startswith("#")):
            return " " + line[1:].strip()
        self.raiseError(index, "Multiline annotation have to start with '#'")

    def getAnnotationContent(self, annotation):
        annType = self.getAnnotationType(annotation)
        annTypeS = self.getAnnotationType(annotation, True)

        content = self.rreplace(annotation.replace(annType, "", 1), ";")
        if (annTypeS == "query" or annTypeS == "commit"):
            content = content.replace("\"", "", 1)
            content = self.rreplace(content, "\"")

        return content.strip()

    def rreplace(self, string, oldString, newString="", maxReplace=1):
        return newString.join(string.rsplit(oldString, maxReplace))
                
    # ERRORS

    def raiseError(self, index, comment):
        raise SyntaxError(f"{comment} in {self.wWar(self.file)} at line {self.wOkG(index)}")

    def wWar(self, string):
        return f"{Logger.WARNING}{string}{Logger.FAIL}"

    def wOkG(self, string):
        return f"{Logger.OKGREEN}{string}{Logger.FAIL}"
