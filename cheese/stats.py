#cheese

import os

class Stats:
    """
    This class shows statistics about project
    """

    @staticmethod
    def rowCount(*suffixes):
        """
        Count of rows in project.

        ```*suffixes``` is list of file suffixes that should be counted.

        Default ```suffixes``` are ```.py```, ```.js```, ```.html```, ```.css```.

        ```*suffixes``` are being add to default one not overwrittes them.
        """
        Stats.path = os.path.curdir
        Stats.projectName = os.path.basename(os.path.abspath(os.path.curdir))

        Stats.suffixes = ["py", "js", "html", "css"] + list(suffixes)

        allFiles = 0
        allRows = 0
        for suffix in Stats.suffixes:
            files, rows = Stats.countSpecFiles(suffix)
            allFiles += files
            allRows += rows

            print(20*"=")
            print(f".{suffix} files: ") 
            print(f"Count: {files}")
            print(f"Rows: {rows}")
        
        print(40*"=")
        print(f"Project {Stats.projectName}")
        print(f"Files: {allFiles}")
        print(f"Rows: {allRows}")

    @staticmethod
    def countSpecFiles(suffix):
        filesCount = 0
        rows = 0

        for root, dirs, files in os.walk(Stats.path):
            for file in files:
                if (not file.endswith(suffix)): continue
                if (suffix == "html" and os.path.dirname(os.path.join(root, file)).endswith("logs")): continue
                
                filesCount += 1
                with open(os.path.join(root, file), "r") as f:
                    rows += len(f.readlines())

        return filesCount, rows