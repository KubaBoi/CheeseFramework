<img align="right" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Release v(22.04.29.16.34)

## TODO

- [ ] :bangbang: TESTS :bangbang:
- [ ] metadata load setting (RAM/dynamic)
- [ ] repair admin access
- [ ] repair CORS not allowed
- [ ] do authorization
- [ ] do Cheese tools
- [ ] remove deprecated ```#@acceptsModel``` annotation


## Source code

https://github.com/KubaBoi/CheeseFramework/tree/development

## 1 Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.
Stay safe :heart:

I am using Tomcat like some kind of gate which listens at 80 public port and resending requests to Cheese Applications running under firewall and listen at closed to public ports.

## 1.1 Instalation

### 1.1.1 Downloads

First of all you need to install <a href="https://pypi.org/project/CheeseFramework/">CheeseFramework from pypi.org</a>
```
pip install CheeseFramework
```

And you will need some more pypi packages:
- ```pip install pyodbc``` <a href="https://pypi.org/project/pyodbc/">Documentation</a>
- ```pip install psycopg2-binary``` <a href="https://pypi.org/project/psycopg2/">Documentation</a>
- ```pip install psycopg2``` <a href="https://pypi.org/project/psycopg2/">Documentation</a>
- ```pip install bs4``` <a href="https://pypi.org/project/beautifulsoup4/">Documentation</a>
- ```pip install requests``` <a href="https://pypi.org/project/requests/">Documentation</a>
- ```pip install GitPython``` <a href="https://pypi.org/project/GitPython/">Documentation</a>

### 1.1.2 Creating new project

Cheese has prepared template project in git branch template. I recommend to use this tool Cheeser for generating new project.

1. Open python console and import Cheeser
    ```python
    from Cheese.cheeser import Cheeser
    ```
2. Run generator - generator clones branch template 
    ```python
    Cheeser.generate("path", generateFiles=True)
    ```
    Path need to be full path from root and it should be empty directory or not existing directory
    - for windows starts with ```"C:\\..."```
    - for unix starts with ```"/"```
    
    generateFiles parameter is default set ```True```
    - if ```False``` than generator would remove HelloWorld files like ("HelloWorldController.py", "Hello.py", "helloRepository.py")
    - I recommend to leave it ```True``` when you are creating your first application so you can better understand how does it work.

<img src="https://kubaboi.github.io/CheeseFramework/documentation/images/generating.png">

That's all now you can start your application :blush:

### 1.1.3 Run Cheese application

Main script of Cheese applications is located in directory ```<your project>/src/<your project>.py```
So just run this script.

<img src="https://kubaboi.github.io/CheeseFramework/documentation/images/firstRun.png">

Default app port is ```8000``` so you can check if everything works at <a href="http://localhost:8000">localhost:8000</a>

Congratulation :clap: you are now Dairy developer :clap:

## 2 Cheese Tools

WIP ::

## 3 Build

Build is proccess which generates .metadata for your application. Build runs at start of application (it is pretty fast). Also build creates ```__init__.py``` files inside every directory of /src/. No need to care about those files, they will be rewriten every build according to actual source code. 

Building performs Cheeser.build() automatically.

## 4 Project structure

In this paragraph we will talk about directories and generated by Cheeser. I should tell you that there is class ```ResMan``` in Cheese. ```ResMan``` mediates paths to main directories of project. More about ```ResMan``` later.

### 4.1 /.admin

This directory is hidden so you should not change it. But hey... you can do whatever you want. It contains web files (.html, .css, .js) for administration access. We will talk about admin access later.

### 4.2 /resources

Directory where belongs all non source code files which won't be served by server. Some kind of your own settings or whatever.

### 4.3 /src

Python source code directory. Cheese will be searching there for ```controllers```, ```models``` and ```repositories``` during building your application. You do not have to follow any structure. If .py file is in /src, it WILL be found by Cheeser.build().

### 4.4 /web

Directory with files served by server. Cheese server automatically looks into this directory while cannot match url endpoint with controllers.
- If url endpoint is ```"/"``` it search for ```/web/index.html```
- If cannot find the file than serves ```/web/errors/error404.html```
- If ```/web/errors/error404.html``` is missing than returns ERROR 500

### 4.5 *.json files

Those files in root of your project are configuration files.

## 5 Configuration

All configration is set in ```*.json``` files in root of project.

### 5.1 adminSettings.json

Contains only list of credentials for admin access.

Default ```adminSettings.json```
```json
{
    "adminUsers":[
        {
            "name": "admin",
            "password": "admin"
        }
    ]
}
```

### 5.2 appSettings.json

Contains app configuration.

- name - Name of your application
- version - Version of your application
- licenseCode 
    - can be left empty
    - it will affect if there will be ```Powered by Cheese Framework``` watermark at the right bottom corner of html pages served by Cheese server
    - if you want to get rid of this watermark go on this url ```frogie.cz:6969/licence/generate?type=full%20access``` and from ```{ "LICENSE": { "CODE": <code>, "ID": int, "TYPE": "full access" } }``` copy ```<code>```    
- host - leave default
- port - port of your app
- dbDriver - driver for database
    - postgres - for postgresql database
    - https://github.com/mkleehammer/pyodbc/wiki - for other databases
- dbHost - host of your database
- dbName - name of your database
- dbUser - user of database
- dbPassword - password of user
- dbPort - port of your database
- allowDebug - If ```false``` application should be deployed. Logger will log only errors ```"silence"=False``` logs. More about logging later.
- allowCommit - If ```false``` application won't commit anything into database even if you write commit query
- allowMultiThreading - If ```true``` Cheese server would be able to server more request at once (I have tested that about 60 request at once is alright)
- allowCORS - If ```true``` Cheese server would be able to practice CORS.
    - <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">Learn about CORS</a>
    - BTW... without this it does not work (yet) :scream_cat:
- allowDB - If ```false``` Cheese won't try to connect database

### 5.3 authExceptions.json

WIP

## 6 Annotations

Annotations are necessary for Cheese. Cheese recognize annotation that starts ```#@``` and it needs to end with ```;```. Yes it is just python comment and what? 
```
"If it is stupid but it works, it isn't stupid"
                                            Same Smart Guy - 1456
```

There is a list of all annotations:

- ```#@controller```
- ```#@model```
- ```#@repository```
- ```#@post```
- ```#@get```
- ```#@query```
- ```#@commit```
- ```#@return```
- ```#@acceptsModel``` - deprecated
- ```#@dbscheme```
- ```#@dbmodel```

## 7 Python code

This will be about how to write ```controllers```, ```models``` and ```repositories```

### 7.1 API Controllers

Controllers are classes that handle requested endpoints. I recommend to create one folder just for your controllers but it is not necessary (or you the generated one ofc).

#### 7.1.1 Create controller

As I said, controllers are classes. So create class that inherits from CheeseController.
To let cheeser know that this class is really controller you have to anotate it with ```#@controller``` annotation. ```#@controller``` annotation follows part of endpoint like this:

```python
#@controller /apiController;
class apiController(CheeseController):
```

#### 7.1.2 Methods of controller

There is sctrict scheme how should method in controller looks so it can handle endpoint.
Method have to be static, so add ```@staticmethod``` annotation above method definition.
Method have to be anotated. Annotation for endpoints contains HTTP method (right now only ```GET``` and ```POST```) and endpoint.
Method have to have 3 arguments: server, path, auth.

```python
#@post /apiEndpoint;
@staticmethod
def getFiles(server, path, auth):

```

#### 7.1.3 Method arguments

So what are those 3 arguments? Argument number one server is instance of Cheese server handeling this request. You can get some info about connection like client's IP etc... Argument path is just string of request. 

For example:
Some one wants to see cats so he search for ```http://hostname:port/wanna/see/pussy```. And in this case path will be ```"/wanna/see/pussy"```
Last argument auth is object created in ```authorization.py``` if it is enabled. More about this later.

#### 7.1.4 Example controller

Now you know almost everything you need to know to create your own controller. There are some functions that was not described yet. Those will be of course later.
Controller will handle two endpoints:

```/calculator/sum```

```/calculator/sub```

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

from cheese.modules.cheeseController import CheeseController

#@controller /calculator;
class CalculatorController(CheeseController):

    """
    sum two numbers in request body and return result
    body looks for example like this:
    {
    "NUM1": 1,
    "NUM2": 5
    }
    so result will looks like this:
    {
    "RESPONSE": 6
    }
    """
    #@post /sum;
    @staticmethod
    def sum(server, path, auth):

        #reads arguments from body of request 
        args = CheeseController.readArgs(server)
                
        #arguments
        num1 = int(args["NUM1"])
        num2 = int(args["NUM2"])

        result = num1 + num2

        response = CheeseController.createResponse({"RESPONSE": result}, 200)
        CheeseController.sendResponse(server, response)

    """
    substract two numbers in request path and return result

    path looks for example like this:
    localhost:8000/calculator/sub?num1=5&num2=3

    so result will looks like this:
    {
    "RESPONSE": 2
    }
    """
    #@get /sub;
    @staticmethod
    def sub(server, path, auth):
    
        #reads arguments from endpoint path 
        args = CheeseController.getArgs(server)
        
        #arguments
        num1 = int(args["num1"])
        num2 = int(args["num2"])
        
        result = num1 - num2
        
        response = CheeseController.createResponse({"RESPONSE": result}, 200)
        CheeseController.sendResponse(server, response)
```

### 7.2 Models

Models are classes for storing data from database. Again, one folder for them.
One instance of model is one row of database table. 

Model needs only one annotation above class definition ```#@model``` and has to inherit from ```CheeseModel```.
Arguments in initializer (constructor) should be indentic as scheme of table.

Model for table users with columns ```"id"```, ```"name"```, ```"age"```

```python
from cheese.modules.cheeseModel import CheeseModel

#@model;
class User(CheeseModel):

    def __init__(self, id=None, name=None, age=None):
        self.id = id
        self.name = name
        self.age = age
```

It is very useful but not necessary create a method ```toJson()``` which returns dictionary with data of model.

```python
def toJson(self):
    response = {
        "ID": self.id,
        "NAME": self.name,
        "AGE": self.age,
    }
    return response
```

### 7.3 Repositories

Repository is like access into one table of database. There are methods that communicate with database.

#### 7.3.1 Create repository

Repositories are last but most complex part of Cheese Framework. They are again classes but there need to be more annotations. Also repository have to inherits from ```CheeseRepository```

First annotation is ```#@repository```, so cheeser knows this is repository, followed by name of table.

Second annotation is ```#@dbscheme``` followed by name of table's columns in brackets where first should be Primary Key.

### :bangbang: IMPORTANT :bangbang:

Column names need to be in same order as in model initializer and need to have same names!!

Last annotation is ```#@dbmodel``` followed by name of model for the table.

```python
from cheese.modules.cheeseRepository import CheeseRepository

#@repository users;
#@dbscheme (id, user_name, age);
#@dbmodel User;
class PasswordRepository(CheeseRepository):
```

#### 7.3.2 Methods of repository

Method scheme is again very strict. They need to be static and every method needs to have this line in it's body:

```python
return CheeseRepository.query(argName1=arg1, argName2=arg2,...)
```

```arg1``` and ```arg2``` are method's arguments.

There are two types of SQL query annotations query and commit.

- ```#@query```
    - 
    This annotation says that we want to get data from database. It is followed by SQL query. This query can be more than one line but have to be in quotation marks and the query must ends with semicolon.

    More line query:
    ```python
    #@query "select * from users
    #        where age > 20;";
    ```

    With ```#@query``` annotation is related annotation ```#@return```. It determines type of return. if annotation ```#@return``` is missing it is default.

    - DEFAULT - Returns raw data what get from database. Mostly it is tuple of tuples.
    ```python
    #@return raw;
    ```

    - Returns array of models.
    ```python
    #@return array;
    ```

    - Returns only one model. If there is more results returns first.
    ```python
    #@return one;
    ```

    - Returns logical value.
    ```python
    #@return bool;
    ```

    ```#@return bool``` example:
    
    ```python
    #@query "select case when exists
    #       (select * from tokens t where t.token = :token)
    #       then cast(0 as bit)
    #       else cast(1 as bit) end;";
    #@return bool;
    ```

    - Returns numeric value.
    ```python
    #@return num;
    ```

    ```#@return num``` example:
    
    ```python
    #@query "select count(*) from users;";
    #@return num;
    ```
- ```#@commit```
    -
    This annotation is for writing data into database.

    ```python
    #@commit "update files set id=:id where file_name=:file_name;";
    ```

    You will need it only when you want to change Primary Key of some row because there are three prebuilded methods that you should add into your repository. Those methods does not have any annotation and accepts only models. The update and delete method search rows by Primary Key so if you want to update row's Primary Key you need to write your own SQL query.

#### 7.3.3 Passing arguments to SQL query

Arguments can be insert into SQL query if you marks them with ```:``` and in ```return CheeseRepository.query()``` name them same as in SQL query.

Example:

```python
#@query "select * from table where id=:someId and name=:someName;";
#@return one;
@staticmethod
def findByIdAndName(id, name):
    return CheeseRepository.query(someId=id, someName=name)
```

##### 7.3.3.3.4 Passing model

If you want to pass an model it is possible.

For model ```Hello``` with attributes ```id=0```, ```name="first hello"```, ```greet="hello boi"``` (this is prebuilded method save):

```python
#@commit "insert into table values :someModel;";
@staticmethod
def save(model):
    return CheeseRepository.query(someModel=model)
```

So the finall query which will be send to database looks like this:

```sql
insert into table values (0, 'first hello', 'hello boi');
```

And if you want to pass only some attribute of model do this:

```python
#@query "select * from table where name=:someModel.name or greet=:someModel.greet;";
#@return array;
@staticmethod
def findBy(model):
    return CheeseRepository.query(someModel=model)
```

Finall query will looks like this:

```sql
select (id, name, greet) from table where name='first hello' or greet='hello boi';
```

#### 7.3.4 Prebuilded methods

There are some prebuilded methods for saving, updating, removing and find new id. You can see their settings in ```/.metadata/repMetadata.json``` after build.

```python
#SQL = select max(id)
@staticmethod
def findNewId():
    return CheeseRepository.query()+1

#SQL = insert
@staticmethod
def save(obj):
    return CheeseRepository.query(obj=obj)

#SQL = update
@staticmethod
def update(obj):
    return CheeseRepository.query(obj=obj)

#SQL = delete
@staticmethod
def delete(obj):
    return CheeseRepository.query(obj=obj)
```











