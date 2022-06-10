#cheese

import os

class Stats:

    @staticmethod
    def rowCount(*suffixes):
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

                filesCount += 1
                with open(os.path.join(root, file), "r") as f:
                    rows += len(f.readlines())

        return filesCount, rows

Stats.rowCount()