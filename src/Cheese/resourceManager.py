#cheese

import os
import math

class ResMan:
    """
    Resource manager

    managing resources :D

    bum pam pam
    """

    @staticmethod
    def setPath(path):
        """
        set root path of project
        """
        ResMan.path = str(path)

    @staticmethod
    def getFileName(path):
        """
        return name of file from path
        """
        return os.path.basename(path)

    @staticmethod
    def getRelativePathFrom(path, fromPath):
        """
        return relative path from
        """
        return path.replace(fromPath, "")

    @staticmethod
    def removeSlash(path, start=True):
        """
        remove / from start or end
        """
        if (path == ""): return path

        if (path[0] == "/" and start):
            path = path[1:]
        elif (path[-1] == "/" and not start):
            path = path[:-1]
        return path

    @staticmethod
    def joinPath(*args):
        """
        joins two paths together
        """
        if (len(args) < 1): return ""
        if (len(args) == 1): return args[0]

        paths = []
        paths.append(ResMan.removeSlash(args[0], False))

        for path in args[1:-1]:
            p = ResMan.removeSlash(path)
            p = ResMan.removeSlash(p, False)
            paths.append(p)

        paths.append(ResMan.removeSlash(args[-1]))
        return os.path.join(*paths)

    @staticmethod
    def root(*paths):
        """
        root dir of project
        """
        return ResMan.joinPath(ResMan.path, *paths)

    @staticmethod
    def src(*paths):
        """
        all source codes of project
        """
        return ResMan.root("src", *paths) 

    @staticmethod
    def resources(*paths):
        """
        other resources of project
        """
        return ResMan.root("resources", *paths)

    @staticmethod
    def logs(*paths):
        """
        logs
        """
        return ResMan.root("logs", *paths)

    @staticmethod
    def tests(*paths):
        """
        tests
        """
        return ResMan.src("tests", *paths)
 
    @staticmethod
    def web(*paths):
        """
        dir from which CheeseFramework is able to serve files (index.html)
        """
        return ResMan.root("web", *paths)

    @staticmethod
    def error(*paths):
        """
        dir for error sites
        """
        return ResMan.web("errors", *paths)

    @staticmethod
    def metadata():
        """
        metadata
        """
        return ResMan.root(".metadata")

    @staticmethod
    def convertBytes(bytes):
        """
        convert bytes
        """
        if bytes == 0:
            return "0B"
        size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
        i = int(math.floor(math.log(bytes, 1024)))
        p = math.pow(1024, i)
        s = round(bytes / p, 2)
        return "%s %s" % (s, size_name[i])