#cheese

import os
import git
import shutil

from Cheese.resourceManager import ResMan

"""
Generates structure of Cheese Application
"""

class ProjectGenerator:

    @staticmethod
    def generate(path, generateFiles=True):
        name = ResMan.getFileName(path)

        repo = git.Repo.clone_from("https://github.com/KubaBoi/CheeseFramework.git", path)

        repo.git.checkout("template")  

        shutil.rmtree(os.path.join(path, ".git"))

        if (not generateFiles):
            src = os.join(path, "src")

            os.remove(os.path.join(src, "controllers", "HelloWorldController.py"))
            os.remove(os.path.join(src, "models", "Hello.py"))
            os.remove(os.path.join(src, "repositories", "helloRepository.py"))

        with open(os.path.join(src, "mainTemplate.py"), "r") as f:
            data = f.read()

        with open(os.path.join(src, f"{name}.py"), "w") as f:
            f.write(data)

        os.remove(os.path.join(src, "mainTemplate.py"))