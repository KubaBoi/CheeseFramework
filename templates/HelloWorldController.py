#!/usr/bin/env python
# -*- coding: utf-8 -*-

from cheese.resourceManager import ResMan
from cheese.modules.cheeseController import CheeseController as cc
from cheese.ErrorCodes import Error

#@controller /hello
class HelloWorldController(cc):

    #@get /world
    @staticmethod
    def helloWorld(server, path, auth):
        response = cc.createResponse({"HELLO WORLD": "Cheese is working :) hurrayyy"}, 200)
        cc.sendResponse(server, response)
