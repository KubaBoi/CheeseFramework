#cheese

import os
import git
import shutil
import stat

"""
Generates structure of Cheese Application
"""

class ProjectGenerator:

    @staticmethod
    def generate(path, generateFiles):
        print("Cloning template repo...")
        repo = git.Repo.clone_from("https://github.com/KubaBoi/CheeseFramework.git", path)

        repo.git.checkout("template")  

        print("Removing .git")
        for root, dirs, files in os.walk(os.path.join(path, ".git")):  
            for dir in dirs:
                os.chmod(os.path.join(root, dir), stat.S_IRWXU)
            for file in files:
                os.chmod(os.path.join(root, file), stat.S_IRWXU)
        shutil.rmtree(os.path.join(path, ".git"))

        src = os.path.join(path, "src")

        if (not generateFiles):
            os.remove(os.path.join(src, "controllers", "HelloWorldController.py"))
            os.remove(os.path.join(src, "repositories", "helloRepository.py"))

        print("Renaming files...")
        with open(os.path.join(path, "mainTemplate.py"), "r", encoding="utf-8") as f:
            data = f.read()

        with open(os.path.join(path, f"{os.path.basename(os.path.abspath(os.path.curdir))}.py"), "w", encoding="utf-8") as f:
            f.write(data)

        os.remove(os.path.join(path, "mainTemplate.py"))
        print("Done :)")