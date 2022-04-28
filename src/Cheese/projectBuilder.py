#cheese

import os
import shutil
import ctypes

from Cheese.resourceManager import ResMan
from Cheese.controllerBuilder import ControllerBuilder
from Cheese.repositoriesBuilder import RepositoriesBuilder

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
            


