#cheese
from Cheese.appSettings import Settings
from Cheese.Logger import Logger

try:    
    import pyodbc 
except:
    print("Unable to load pyodbc module")
import psycopg2

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
            self.connection = psycopg2.connect(
                host=Settings.dbHost,
                database=Settings.dbName,
                user=Settings.dbUser,
                password=Settings.dbPassword,
                port=Settings.dbPort
            )
        else:
            self.connection = pyodbc.connect(
                f"Driver={Settings.dbDriver};"
                f"Server={Settings.dbHost},{Settings.dbPort};"
                f"Database={Settings.dbName};"
                f"UID={Settings.dbUser};"
                f"PWD={Settings.dbPassword};"
                f"Trusted_Connection=yes;"
            )

        self.cursor = self.connection.cursor()

    # close connection with database
    def close(self):
        self.cursor.close()
    
    # select query
    def query(self, sql):
        Logger.okCyan(f"{Logger.WARNING}QUERY: {Logger.OKCYAN}{sql}{Logger.ENDC}")
        try:
            self.connect()
        except Exception as e:
            raise SystemError("Cannot establish connection with database", e)
        try:
            self.cursor.execute(sql)
            return self.cursor.fetchall()
        except Exception as e:
            self.rollback()
            raise SystemError("Database sended error response", e)

    # insert, update ...
    def commit(self, sql):
        if (Settings.allowCommit):
            Logger.okBlue(f"{Logger.WARNING}COMMIT: {Logger.OKBLUE}{sql}{Logger.ENDC}")
            try:
                self.connect()
            except Exception as e:
                raise SystemError("Cannot establish connection with database", e)
            try:
                self.cursor.execute(sql)
                return True
            except Exception as e:
                self.rollback()
                raise SystemError("Database sended error response", e)
        else:
            raise SystemError("Commiting into database is not allowed")

    # commit when done
    def done(self):
        self.connection.commit()
        self.close()

    def rollback(self):
        self.connection.rollback()