#cheese

import os
import sys
import inspect
import time

from Cheese.resourceManager import ResMan
from Cheese.finder import Finder
from Cheese.projectBuilder import ProjectBuilder
from Cheese.Logger import Logger
from Cheese.appSettings import Settings
from Cheese.metadata import Metadata
from Cheese.ErrorCodes import Error
from Cheese.testError import TestError

class CheeseTests:

    @staticmethod
    def testAll():
        fileNames = []
        for root, dir, files in os.walk(ResMan.root()):
            for fileName in files:
                file = os.path.join(root, fileName)
                if (Finder.isSomething(file, "testclass")):
                    fileNames.append(file)
        CheeseTests.testFiles(fileNames)

    @staticmethod
    def testFiles(fileNames):
        for fileName in fileNames:
            if (not Finder.isSomething(fileName, "testclass")):
                Logger.warning(f"Cannot find any test in {Logger.WARNING}{fileName}", False)
                fileNames.remove(fileName)

        try:
            builder = ProjectBuilder()
            builder.dictJson = {"TESTS": {}}
            builder.doJson(fileNames, "TESTS", ["TESTCLASS"], [("TEST", [])])
            builder.saveMetadata()
        except SyntaxError as e:
            Logger.bold(f"{Logger.FAIL}{e}", False, False)
            return False

        testTotalCount = 0
        testErrorCount = 0
        testFailCount = 0
        testOkCount = 0
        testIgnoredCount = 0

        for testKey in builder.dictJson["TESTS"].keys():
            test = builder.dictJson["TESTS"][testKey]

            testHeader = f"""
Running {CheeseTests.getTestSign(test['TESTCLASS'], testKey)} 
from file {Logger.WARNING}{Logger.UNDERLINE}{fileName}{Logger.ENDC}{Logger.BOLD}
================================="""
            if ("IGNORE" in test.keys()):
                testHeader += f"\n{Logger.WARNING}IGNORING\n========"
                Logger.bold(testHeader, False)
                testIgnoredCount += len(test["METHODS"].keys())
                continue
            Logger.bold(testHeader, False)

            for methodKey in test["METHODS"].keys():
                testTotalCount += 1
                tm = time.time()
                
                method = test["METHODS"][methodKey]
                try:
                    testMethodObj = Metadata.getObjMethod(methodKey, test["FILE"])
                except:
                    testMethodObj = Metadata.getObjMethod(methodKey, test["FILE"], testKey)

                testMessage = f"{CheeseTests.getTestSign(method['TEST'], methodKey)} -> "

                try:
                    if ("IGNORE" not in method.keys()):
                        testMethodObj()
                        testMessage += f"[{Logger.OKGREEN}OK{Logger.ENDC}{Logger.BOLD}]     $TIME$"
                        testOkCount += 1
                    else:
                        testMessage += f"[{Logger.WARNING}IGNORED{Logger.ENDC}{Logger.BOLD}]"
                        testIgnoredCount += 1
                except TestError as e:
                    # FAIL
                    testMessage += f"""[{Logger.FAIL}FAIL{Logger.ENDC}{Logger.BOLD}]    $TIME$
{Logger.WARNING}"{str(e.comment)}"{Logger.ENDC}{Logger.BOLD}
Value should be: {Logger.OKGREEN}{str(e.template)}{Logger.ENDC}{Logger.BOLD}
But it was: {Logger.FAIL}{str(e.value)}{Logger.ENDC}{Logger.BOLD}
"""
                    testFailCount += 1
                except Exception as e:
                    # ERROR
                    Logger.bold(testMessage + f"[{Logger.FAIL}ERROR{Logger.ENDC}{Logger.BOLD}]", False)
                    Error.handleError(None, e)
                    testErrorCount += 1
                    continue

                tm = time.time() - tm
                Logger.bold(testMessage.replace("$TIME$", CheeseTests.formatTime(tm)), False)
        
        if (testFailCount + testErrorCount != 0):
            result = Logger.FAIL
        else:
            result = Logger.OKGREEN

        Logger.bold(f"""
{20*'='}{result}Testing done{Logger.ENDC}{Logger.BOLD}{20*'='}
total: {testTotalCount}
{Logger.OKGREEN}success{Logger.ENDC}{Logger.BOLD}: {testOkCount}
{Logger.FAIL}fail{Logger.ENDC}{Logger.BOLD}: {testFailCount}
{Logger.FAIL}error{Logger.ENDC}{Logger.BOLD}: {testErrorCount}
{Logger.WARNING}ignored{Logger.ENDC}{Logger.BOLD}: {testIgnoredCount}
        """, False)

        builder.cleanInit()

        if (result == Logger.FAIL):
            sys.exit(1)

    def getTestSign(name, pthName):
        return f"{Logger.OKCYAN}{name}{Logger.ENDC} - {Logger.OKBLUE}{pthName}{Logger.ENDC}{Logger.BOLD}"

    def formatTime(tm):
        ms = tm * 1000
        ns = tm * 1000000
        m = tm / 60
        h = m / 60

        if (h >= 1):
            return (f"{int(h)} hours " + 
            f"{int(m - int(h)*60)} minutes")
        if (m >= 1):
            return (f"{int(h)} hours " + 
            f"{int(m - int(h)*60)} minutes " + 
            f"{int(tm - int(m)*60)} seconds")
        if (tm >= 1):
            return str((int(tm*1000)/1000)) + " s"
        if (ms >= 1):
            return str((int(ms*1000)/1000)) + " ms"
        if (ns >= 1):
            return str((int(ns*1000)/1000)) + " ns"
        return "0 s"

# running test for one file
curframe = inspect.currentframe()
calframe = inspect.getouterframes(curframe)[6]
fileName = ResMan.getFileName(calframe.filename)
if (fileName != "cheese.py"):
    Settings.allowDebug = True
    ResMan.setPath(calframe.filename.replace(fileName, ""))
    CheeseTests.testFiles([calframe.filename])