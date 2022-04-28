#cheese

import os
import shutil
import ctypes

from cheese.resourceManager import ResMan
from cheeserScripts.builders.controllerBuilder import ControllerBuilder
from cheeserScripts.builders.repositoriesBuilder import RepositoriesBuilder

"""
Builds Cheese Application
"""

class ProjectBuilder:

    def build(self):
        print("=====BUILDING=====")

        if (os.path.exists(ResMan.metadata())):
            shutil.rmtree(ResMan.metadata())
        
        os.mkdir(ResMan.metadata())
        FILE_ATTRIBUTE_HIDDEN = 0x02
        ctypes.windll.kernel32.SetFileAttributesW(ResMan.metadata(), FILE_ATTRIBUTE_HIDDEN)

        #build controllers
        contBuilder = ControllerBuilder()
        contBuilder.build()

        #build repositories
        repBuilder = RepositoriesBuilder()
        repBuilder.build()
            


