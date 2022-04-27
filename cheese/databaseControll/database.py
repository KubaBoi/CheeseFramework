#cheese

from sqlite3 import connect
import time

from cheese.appSettings import Settings
from cheese.Logger import Logger
from cheese.databaseControll.postgreDB import PostgreDB
from cheese.databaseControll.SQLserverDB import SQLServerDB

"""
File generated by Cheese Framework

database connection of Cheese Application
"""

class Database:

    def __init__(self):
        pass

    # connect to database
    def connect(self):
        if (Settings.dbDriver == "postgres"):
            self.db = PostgreDB()
        else:
            self.db = SQLServerDB()

        self.db.connect()

    # close connection with database
    def close(self):
        self.db.close()
    
    # select query
    def query(self, sql):
        try:
            self.connect()
            ret = self.db.query(sql)
            return ret
        except Exception as e:
            Logger.fail("Cannot establish connection with database", e)
            raise SystemError("Cannot establish connection with database")

    # insert, update ...
    def commit(self, sql):
        try:
            self.connect()
            self.db.commit(sql)
        except Exception as e:
            Logger.fail("Cannot establish connection with database", e)
            raise SystemError("Cannot establish connection with database")

    # commit when done
    def done(self):
        self.db.done()
        self.close()

    def rollback(self):
        self.db.rollback()