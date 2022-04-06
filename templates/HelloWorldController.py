#!/usr/bin/env python
# -*- coding: utf-8 -*-

from cheese.resourceManager import ResMan
from cheese.modules.cheeseController import CheeseController
from cheese.ErrorCodes import Error

#@controller /hello
class HelloWorldController(CheeseController):

    #@get /world
    @staticmethod
    def helloWorld(server, path, auth):
        response = CheeseController.createResponse({"HELLO WORLD": "Cheese is working :) hurrayyy"}, 200)
        CheeseController.sendResponse(server, response)
