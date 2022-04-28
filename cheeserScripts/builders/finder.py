#cheese

class Finder:

    @staticmethod
    def isSomething(file, type):
        with open(file, "r") as f:
            data = f.read()
        
        if (data.find("#@" + type) != -1):
            return True
        return False

    # returns name of class or def
    @staticmethod
    def getName(data, name, file, fr=0):
        index = data.find(name, fr)
        if (index == -1 and name == "class"): raise SyntaxError(f"Cannot find class in {file}")
        elif (index == -1): return False

        endIndex = data.find("(", index+len(name))
        if (index == -1 and name == "class"): raise SyntaxError(f"Repository in {file} does not inherit from CheeseRepository")
        elif (index == -1): return False

        return (data[index+len(name):endIndex].strip(), endIndex)

    @staticmethod
    def getAnnotation(data, name, file, fr=0, raiseError=True, maxS=0):
        if (maxS != 0):
            index = data.find(name, fr, fr+maxS)
        else:
            index = data.find(name, fr)
            
        if (index == -1 and raiseError): raise SyntaxError(f"Missing {name} annotation in {file}")
        elif (index == -1): return False

        index += len(name)
        endIndex = -1
        delimiter = []
        for i in range(index, len(data)):
            if (len(delimiter) > 0):
                if (data[i] in delimiter):
                    delimiter.remove(data[i])
            elif (data[i] == "\"" or data[i] == "'"):
                delimiter.append(data[i])
            elif (data[i] == "#" and data[i+1] == "@"):
                endIndex = -1
                break
            elif (data[i] == ";"):
                endIndex = i
                break

        if (endIndex == -1): raise SyntaxError(f"Missing end of {name} anotation in {file}")

        ret = data[index:endIndex].replace("#", "").replace("\n", " ").strip()
        return (ret, endIndex)