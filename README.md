<img align="right" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Version v(1.2.13) - 22.05.08.16.38

## TODO

- [x] :bangbang: TESTS :bangbang: - 1.2.0
- [ ] do authorization - 1.3.0
- [x] repair admin access - 1.4.0
- [ ] do Cheese tools - 1.5.0
- [ ] metadata load setting (RAM/dynamic)
- [ ] repair CORS not allowed
- [x] remove deprecated ```#@acceptsModel``` annotation


## Source code

https://github.com/KubaBoi/CheeseFramework/tree/development

## Documentation

It is same as this BUT it is formated by my own algorithm into html. So contents is fixed on the left side of screen and it is overall clearer. (In my opinion...) Check it out :wink: it was a really hard work. All source codes are in branch ```webServices``` in directory ./mdConverter. I would be honored if it would help you. :relieved:

https://kubaboi.github.io/CheeseFramework/

## Contents

 - [Introduction](#1-introduction)
    -  [Installation](#11-instalation)
        - [Downloads](#111-downloads)
        - [Creating new project](#112-creating-new-project)
        - [Run Cheese application](#113-run-cheese-application)
 - [Cheese Tools](#2-cheese-tools)
 - [Build](#3-build)
 - [Project structure](#4-project-structure)
    - [/.admin](#41-admin)
    - [/resources](#42-resources)
    - [/src](#43-src)
    - [/web](#44-web)
    - [/*.json files](#45-json-files)
 - [Configuration](#5-configuration)
    - [adminSettings.json](#51-adminsettingsjson)
    - [appSettings.json](#52-appsettingsjson)
    - [authExceptions.json](#53-authexceptionsjson)
 - [Annotations](#6-annotations)
 - [Python code](#7-python-code)
    - [API Controllers](#71-api-controllers)
        - [Create controller](#711-create-controller)
        - [Methods of controller](#712-methods-of-controller)
        - [Method arguments](#713-method-arguments)
        - [Example controller](#714-example-controller)
    - [Repositories](#72-repositories)
        - [Create repository](#721-create-repository)
        - [Methods of repository](#722-methods-of-repository)
        - [Passing arguments to SQL query](#723-passing-arguments-to-sql-query)
            - [Passing model](#7231-passing-model)
        - [Prebuilded methods](#724-prebuilded-methods)
 - [Testing](#8-testing)
    - [Cheese test modules](#81-cheese-test-modules)
    - [Creating test file](#82-creating-test-file)
    - [Test method](#83-test-method)
    - [Test examples](#84-test-examples)

## 1 Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.
Stay safe :heart:

I am using Tomcat like some kind of gate which listens at 80 public port and resending requests to Cheese Applications running under firewall and listen at closed to public ports.

## 1.1 Instalation

### 1.1.1 Downloads

First of all you need to install <a href="https://pypi.org/project/CheeseFramework/">CheeseFramework from pypi.org</a>

```pip install CheeseFramework```

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

Build is proccess which generates .metadata for your application. Build runs at start of application (it is pretty fast) if is is in debug mode. Also build creates ```__init__.py``` files inside every directory of /src/. No need to care about those files, they will be overwriten every build according to actual source code. 

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
                                            Some Smart Guy - 1456
```

There is a list of all annotations:

- ```#@controller```
- ```#@repository```
- ```#@post```
- ```#@get```
- ```#@query```
- ```#@commit```
- ```#@return```
- ```#@dbscheme```
- ```#@dbmodel```
- ```#@testclass```
- ```#@test```
- ```#@ignore```

## 7 Python code

This will be about how to write ```controllers``` and ```repositories``` .

### 7.1 API Controllers

Controllers are classes that handle requested endpoints. I recommend to create one folder just for your controllers but it is not necessary (or use the generated one ofc).

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

Those arguments are passed by server handler. ```server``` is instance of server handler ( ```BaseHTTPRequestHandler``` ). 

```path``` is string variable and it contains ```url``` without host and port. So for url ```http://localhost:8000/hello/world?name=helloboi``` the ```path``` will looks like this ```/hello/world?name=helloboi``` .

```auth``` is some object defined by you during Authentication.

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

        return CheeseController.createResponse({"RESPONSE": result}, 200)

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
        
        return CheeseController.createResponse({"RESPONSE": result}, 200)
```

### 7.2 Repositories

Repository is like access into one table of database. There are methods that communicate with database.

#### 7.2.1 Create repository

Repositories are last but most complex part of Cheese Framework. They are again classes but there need to be more annotations. Also repository have to inherits from ```CheeseRepository```

First annotation is ```#@repository```, so cheeser knows this is repository, followed by name of table.

Second annotation is ```#@dbscheme``` followed by name of table's columns in brackets where first should be Primary Key.

### :bangbang: IMPORTANT :bangbang:

Column names need to be in same order as in model initializer and need to have same names!!

Last annotation is ```#@dbmodel``` followed by name of model for the table. It is just name for your better identification of model. But it is neccessary to be there.

```python
from cheese.modules.cheeseRepository import CheeseRepository

#@repository users;
#@dbscheme (id, user_name, age);
#@dbmodel User;
class PasswordRepository(CheeseRepository):
```

#### 7.2.2 Methods of repository

Method scheme is again very strict. They need to be static and every method needs to have this line in it's body:

```python
return CheeseRepository.query(argName1=arg1, argName2=arg2,...)
```

```arg1``` and ```arg2``` are method's arguments.

There are two types of SQL query annotations query and commit.

## ```#@query```

This annotation says that we want to get data from database. It is followed by SQL query. This query can be more than one line but have to be in quotation marks and the query can ends with semicolon.

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

## ```#@commit```
    
This annotation is for writing data into database.

```python
#@commit "update files set id=:id where file_name=:file_name;";
```

You will need it only when you want to change Primary Key of some row because there are three prebuilded methods that you should add into your repository. Those methods does not have any annotation and accepts only models. The update and delete method search rows by Primary Key so if you want to update row's Primary Key you need to write your own SQL query.

#### 7.2.3 Passing arguments to SQL query

Arguments can be insert into SQL query if you marks them with ```:``` and in ```return CheeseRepository.query()``` name them same as in SQL query.

Example:

```python
#@query "select * from table where id=:someId and name=:someName;";
#@return one;
@staticmethod
def findByIdAndName(id, name):
    return CheeseRepository.query(someId=id, someName=name)
```

##### 7.2.3.1 Passing model

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

#### 7.2.4 Prebuilded methods

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

## 8 Testing

Testing is very important part of programming. It will tell you if you fucked something up. Cheese, because of database connection (and because it is fun creating it), has it's own test system.

Tests are run during start of application after [Build](#3-build) when application is in debug mode.

### 8.1 Cheese test modules

There is list of classes which your test class file should contains. Everything will be clear in the end of [Testing](#8-testing) when you check [Test examples](#84-test-examples).

## ```UnitTest```

```python
from Cheese.test import UnitTest
```

```UnitTest``` is class with methods that will throw (raise) ```TestError```  exception which signalize to Cheese test engine that this test fails because of the result is not as expected. Those methods are ```static``` .

Methods of ```UnitTest``` :

```python
UnitTest.assertEqual(value, template, comment)
```

If ```value``` is not same as ```template``` the ```TestError``` will be raised and test fails. Also ```comment``` will be print with fail message.

```python
UnitTest.assertTrue(value, comment)
```

If ```value``` is not equal ```True``` the ```TestError``` will be raised and test fails.

```python
UnitTest.assertFalse(value, comment)
```

If ```value``` is not equal ```False``` the ```TestError``` will be raised and test fails.
 
## ```Pointer```

```python
from Cheese.pointer import Pointer
```

Usage of ```Pointer``` is approximately similar as in C/C++. But because python does not have this amazing feature I had to make my own. ```Pointer``` is just some pointer (:D) to any variable you need. I will show you that in some [Test examples](#84-test-examples) at the end of [Testing](#8-testing) module.

Methods of ```Pointer``` :

```python
Pointer.getValue()
```

Return value to which ```Pointer``` points.

```python
Pointer.setValue(value)
```

Sets value to which ```Pointer``` points. (You won't need it)

## ```Mock```

```python
from Cheese.mock import Mock
```

```Mock``` is class that you can use if you need to test some method which is using some of your repository. You can substitute ```return``` of any method with your own values and for any argument input.

Methods of ```Mock``` :

```python
mock = Mock(nameOfRepository)
```

This is constructor (initializer) of ```Mock``` class. Every ```Mock``` is non-static class which mocks one repository.

```python
mock.whenReturn(nameOfMethod, value, **kwargs)
```

When there is called ```nameOfRepository.nameOfMethod()``` during test and arguments are same as ```**kwargs``` (dictionary of arguments), then ```value``` is returned.

```python
mock.catchArgs(pointer, nameOfArgument, nameOfMethod, **kwargs)
```

When there is called ```nameOfRepository.nameOfMethod()``` during test and arguments are same as ```**kwargs```, then ```pointer.value``` will be ```**kwargs[nameOfArgument]``` . 

As I said... everything will be clear at the end of paragraph in examples.

### 8.2 Creating test file

Like everything else tests need to be annotated with Cheese annotations. One test file should contains only one test class (it can be more but... it is probably not best practise). This test class needs to be annotated with ```#@testclass``` annotation. This annotation can contains some description of test class:

```python
#@testclass this is testing something;
class helloTest:
```

If you add ```#@ignore;``` annotation then whole file will be ignored during testing:

```python
#@testclass this is testing something;
#@ignore;
class helloTest:
```

### 8.3 Test method

Test methods need ```#@test``` annotation and also it can contain a description:

```python
#@test I am a testing method;
@staticmethod
def helloWorldTest():
```

Ignored test method:

```python
#@test I am a testing method;
#@ignore;
@staticmethod
def helloWorldTest():
```

### 8.4 Test examples

For method:

```python
#@controller /hello;
class HelloWorldController(CheeseController):

    #@get /world;
    @staticmethod
    def helloWorld(server, path, auth):
        return "hello"
```

Could be test like this:

```python
#@test hello world method;
@staticmethod
def helloWorldTest():
    controller = HelloWorldController()

    resp = controller.helloWorld(None, None, None)

    value = resp[0].decode()
    httpCode = resp[1]

    UnitTest.assertEqual(value, "hello", "Response was not 'hello'")
    UnitTest.assertEqual(httpCode, 200, "Status code was not 200")
```

For method:

```python
#@controller /hello;
class HelloWorldController(CheeseController):

    #@get /world;
    @staticmethod
    def helloWorld(server, path, auth):
        hello = HelloRepository.model()

        hello.setAttrs(hello_value="Hello boi")

        return CheeseController.createResponse(hello.toJson(), 200)
```

Could be test like this:

```python
#@test hello world method;
@staticmethod
def helloWorldTest():
    controller = HelloWorldController()

    mock = Mock("HelloRepository") # mocking HelloRepository
    mock.whenReturn("findNewId", 0) # because model() method is using findNewId()

    resp = controller.helloWorld(None, None, None)

    value = json.loads(resp[0])
    httpCode = resp[1]

    # expected response should looks like this
    templateResponse = {
        "hello_value": "Hello boi",
        "id": 1 # because findNewId() adds 1 every time
    }

    UnitTest.assertEqual(value, templateResponse, "Response was not as expected")
    UnitTest.assertEqual(httpCode, 200, "Status code was not 200")
```

For method:

```python
#@controller /hello;
class HelloWorldController(CheeseController):

    #@get /world;
    @staticmethod
    def helloWorld(server, path, auth):
        hello = hr.model()

        hello.setAttrs(hello_value="Hello my friend")
        hr.save(hello)

        allHellos = hr.findAll()
        
        return cc.createResponse(cc.modulesToJsonArray(allHellos), 200)

```

Could be test like this:

```python
#@test hello world method;
@staticmethod
def helloWorldTest():
    controller = HelloWorldController()
    mock = Mock("HelloRepository")

    pointer = Pointer()

    mock.whenReturn("findNewId", 0) # in method model() as in previous example
    """
    if method save() will be called then pointer.value will be set to value of argument "obj"
    """
    mock.catchArgs(pointer, "obj", "save") 
    """
    if findAll() will be called then array 
    ([pointer], that one item will be value of pointer) 
    will be returned
    """
    mock.whenReturn("findAll", [pointer])

    resp = controller.helloWorld(None, None, None)

    value = json.loads(resp[0])
    httpCode = resp[1]

    # expected response should looks like this
    templateResponse = {
        "hello_value": "Hello boi",
        "id": 1 # because findNewId() adds 1 every time
    }

    UnitTest.assertEqual(value, [templateResponse], "Response was not as expected")
    UnitTest.assertEqual(httpCode, 200, "Status code was not 200")
```








