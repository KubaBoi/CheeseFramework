#cheese

import os
import math

class ResMan:

    @staticmethod
    def setPath(path):
        ResMan.path = str(path)

    # return name of file from path
    @staticmethod
    def getFileName(path):
        return os.path.basename(path)

    # return relative path from
    @staticmethod
    def getRelativePathFrom(path, fromPath):
        return path.replace(fromPath, "")

    # remove / from start or end
    @staticmethod
    def removeSlash(path, start=True):
        if (path[0] == "/" and start):
            path = path[1:]
        elif (path[-1] == "/" and not start):
            path = path[:-1]
        return path

    # joins two path together
    @staticmethod
    def joinPath(path1, path2):
        path1 = ResMan.removeSlash(path1, False)
        path2 = ResMan.removeSlash(path2)
        return os.path.join(path1, path2)

    # joins array together
    @staticmethod
    def joinArray(array):
        return os.path.join(*array)

    # root dir of project
    @staticmethod
    def root():
        return ResMan.path

    # all source codes of project
    @staticmethod
    def src():
        return os.path.join(ResMan.root(), "src")

    # other resources of project
    @staticmethod
    def resources():
        return os.path.join(ResMan.root(), "resources")

    # logs
    @staticmethod
    def logs():
        return os.path.join(ResMan.root(), "logs")

    # tests
    @staticmethod
    def tests():
        return os.path.join(ResMan.src(), "tests")

    # dir from which CheeseFramework is able to serve files (index.html) 
    @staticmethod
    def web():
        return os.path.join(ResMan.root(), "web")

    # dir for error sites
    @staticmethod
    def error():
        return os.path.join(ResMan.web(), "errors")

    # metadata
    @staticmethod
    def metadata():
        return os.path.join(ResMan.src(), ".metadata")

    # admin
    @staticmethod
    def admin():
        return os.path.join(ResMan.root(), ".admin")

    # # convert bytes
    @staticmethod
    def convertBytes(bytes):
        if bytes == 0:
            return "0B"
        size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
        i = int(math.floor(math.log(bytes, 1024)))
        p = math.pow(1024, i)
        s = round(bytes / p, 2)
        return "%s %s" % (s, size_name[i])