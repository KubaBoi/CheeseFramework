#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys, getopt
import os
import ntpath

from cheeserScripts.projectGenerator import ProjectGenerator
from cheeserScripts.projectBuilder import ProjectBuilder
from cheeserScripts.createByDb import CreateByDB
from cheese.resourceManager import ResMan


__author__ = "Jakub Anderle"
__version__ = "1.0.0"
__maintainer__ = "Jakub Anderle"
__email__ = "jakubanderle@outlook.cz"
__status__ = "Development"

try:
    opts, args = getopt.getopt(sys.argv[1:], "hg:b:d:", ["pname=", "pname=", "database="])
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
    elif opt in ("-g", "--pname"):
        generator = ProjectGenerator(arg)
        generator.generate()
        sys.exit()
    elif opt in ("-b", "--pname"):
        generator = ProjectGenerator(arg)
        generator.generate()

        builder = ProjectBuilder(arg)
        builder.build()
        sys.exit()
    elif opt in ("-d", "--database"):
        CreateByDB.createFiles(f"{os.path.dirname(__file__)}/projects/{arg}")
