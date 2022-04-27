#!/usr/bin/env python
# -*- coding: utf-8 -*-

import psycopg2

from Cheese.appSettings import Settings
from Cheese.Logger import Logger

"""
File generated by Cheese Framework

database connection of Cheese Application fro PostgreSQL
"""

class PostgreDB:

    # connect to database
    def connect(self):
        self.connection = psycopg2.connect(
                host=Settings.dbHost,
                database=Settings.dbName,
                user=Settings.dbUser,
                password=Settings.dbPassword,
                port=Settings.dbPort)

        self.cursor = self.connection.cursor()

    # close connection with database
    def close(self):
        self.cursor.close()

    # select query
    def query(self, sql):
        Logger.okCyan(Logger.WARNING + "QUERY: " + Logger.ENDC + Logger.OKCYAN + sql)
        try:
            self.cursor.execute(sql)
        except:
            self.rollback()
            return None
        ret = self.cursor.fetchall()
        return ret

    # insert, update ...
    def commit(self, sql):
        if (Settings.allowCommit):
            Logger.okBlue(Logger.WARNING + "COMMIT: " + Logger.ENDC + Logger.OKBLUE + sql)
            try:
                self.cursor.execute(sql)
            except:
                self.rollback()
        else:
            Logger.fail("Commiting is not allowed")

    # commit when done
    def done(self):
        self.connection.commit()

    def rollback(self):
        self.connection.rollback()