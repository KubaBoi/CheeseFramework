#!/usr/bin/env python
# -*- coding: utf-8 -*-

from Cheese.cheeseController import CheeseController as cc

#@controller /hello
class HelloWorldController(cc):

    #@get /world
    @staticmethod
    def helloWorld(server, path, auth):
        response = cc.createResponse({"HELLO WORLD": "Cheese is working :) hurrayyy"}, 200)
        cc.sendResponse(server, response)
