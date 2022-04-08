#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys, getopt
import os

from cheeserScripts.projectGenerator import ProjectGenerator
from cheeserScripts.projectBuilder import ProjectBuilder
from cheeserScripts.createByDb import CreateByDB
from cheeserScripts.createApi import ApiControllerCreator as api
from cheeserScripts.generateApi import ApiGenerator as apiG
from cheeserScripts.checkVersion import Updater
from cheese.resourceManager import ResMan


__author__ = "Jakub Anderle"
__version__ = "1.0.0"
__maintainer__ = "Jakub Anderle"
__email__ = "jakubanderle@outlook.cz"
__status__ = "Development"

Updater.checkUpdate()

try:
    opts, args = getopt.getopt(sys.argv[1:], "hb:d:c:a:", ["build=", "database=", "controller=", "api="])
except getopt.GetoptError:
    print("cheeser.py [argument]")
    sys.exit(2)
for opt, arg in opts:
    ResMan.setPath(f"{os.path.dirname(__file__)}/projects/{arg}")
    if opt == '-h':
        print("cheeser.py [argument]")
        print("b - build <path>")
        print("g - generate <project name>")
        sys.exit()
    elif opt in ("-b", "--build"):
        generator = ProjectGenerator(arg)
        generator.generate()

        builder = ProjectBuilder(arg)
        builder.build()
    elif opt in ("-d", "--database"):
        CreateByDB.createFiles()
    elif opt in ("-c", "--controller"):
        api.createApiControllers()
    elif opt in ("-a", "--api"):
        apiG.generateApi()
