<a href="https://kubaboi.github.io/CheeseFramework/">
<img align="right" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">
</a>

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Version v(1.3.100) - 22.06.16.23.32

Test version v(1.3.100) - 22.06.16.23.30

## TODO

- [x] :bangbang: TESTS :bangbang: - 1.2.0
- [x] do authorization - 1.3.0
- [ ] repair doc - 1.4.0
- [ ] do Cheese tools - 1.4.0
- [ ] getTime js script - 1.4.0
- [x] repair CORS not allowed
- [x] repair admin access
- [x] remove deprecated ```#@acceptsModel``` annotation


## Source code

 https://github.com/KubaBoi/CheeseFramework/tree/development 

## Documentation

It is same as this BUT it is formated by my own algorithm into html. So contents is fixed on the left side of screen and it is overall clearer. (In my opinion...) Check it out :wink: it was a really hard work. All source codes are in branch ```webServices``` in directory ./mdConverter. I would be honored if it would help you. :relieved:

https://kubaboi.github.io/CheeseFramework/

<a href="https://kubaboi.github.io/CheeseFramework/doc.html" target="_blank">Complete method and classes documentation</a>

## Contents

 - [Introduction](#1-introduction)
    -  [Installation](#11-instalation)
        - [Downloads](#111-downloads)
        - [Creating new project](#112-creating-new-project)
        - [Run Cheese application](#113-run-cheese-application)
 - [Cheese Tools](#2-cheese-tools)
 - [Build](#3-build)
    - [Metadata](#31-metadata) 
 - [Project structure](#4-project-structure)
    - [/.admin](#41-admin)
    - [/resources](#42-resources)
    - [/src](#43-src)
    - [/web](#44-web)
    - [/*.json files](#45-json-files)
 - [Configuration](#5-configuration)
    - [adminSettings.json](#51-adminsettingsjson)
    - [appSettings.json](#52-appsettingsjson)
    - [securitySettings.json](#53-securitysettingsjson)
        - [authentication](#531-authentication)
        - [roles](#532-roles)
        - [access](#533-access)
        - [Authorization process](#534-authorization-process)
    - [secrets.json](#54-secretsjson)
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
            - [#@query](#7221-query)
            - [#@commit](#7222-commit)
        - [Passing arguments to SQL query](#723-passing-arguments-to-sql-query)
            - [Passing model](#7231-passing-model)
        - [Prebuilded methods](#724-prebuilded-methods)
    - [Models](#73-models)
        - [CheeseModel methods](#731-cheesemodel-methods)
            - [toJson()](#7311-tojson)
            - [toModel(jsn)](#7312-tomodeljsn)
            - [setAttrs(**attrs)](#7313-setattrsattrs)
        - [Creating model](#732-creating-model)
 - [Testing](#8-testing)
    - [Cheese test modules](#81-cheese-test-modules)
        - [UnitTest](#811-unittest)
        - [Pointer](#812-pointer)
        - [Mock](#813-mock)
    - [Creating test file](#82-creating-test-file)
    - [Test method](#83-test-method)
    - [Test examples](#84-test-examples)
 - [JavaScript](#9-javascript)
    - [autocomplete](#91-autocomplete)
    - [cookies](#92-cookies)
    - [communication](#93-communication)
    - [elementManager](#94-elementmanager)
    - [tableBuilder](#95-tablebuilder)
    - [alerts](#96-alerts)
    - [loadPage](#97-loadpage)
    - [time](#98-time)

## 1 Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.

Stay safe :heart:

I am using Tomcat like some kind of gate which listens at 80 public port and resends requests to Cheese Applications running under firewall and listen at closed to public ports.

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

WIP :nail_care:

## 3 Build

Build is proccess which generates ```.metadata``` for your application. Build runs at start of application (it is pretty fast) if is in debug mode.

### 3.1 Metadata

```.metadata``` is actually ```json``` but it is coded with your ```key```. ```key``` is storred in file ```./secretPass``` just like regular string, nothing else. Only one string nothing more.

This file should be ignored in ```.gitignore``` so during deploy you need create it in deploy app enviroment (developing on windows -> deploy on linux server) because if you would leave it in git repository, it would lose that secret point. ```key``` is just password for your application.

If the ```secretPass``` file is missing Cheese will try for coding and decoding ```Default``` as a key. 

In ```.metadata``` is storred everything except ```appSettings.json``` . So ```adminSettings.json``` , ```securitySettings.json``` and ```secrets.json``` .

Uncoded metadata are accessible via ```Metadata``` class.

```python
import json
from Cheese.cheese import CheeseBurger
from Cheese.metadata import Metadata

CheeseBurger.init()

pathToCodedFile = "some\\path\\.metadata"
key = "jauukfnd" # key to decode data

with open(pathToCodedFile, "r", encoding="utf-8") as f:
    rawData = f.read() # loads data from file coded base64 

codedData = Metadata.decode64(rawData) # decode base64
rawJsonData = Metadata.decode(codedData, key) # decode by your key
jsonData = json.loads(rawJsonData) # loads json from string into dictionary

with open("metadata.json", "w") as f:
    f.write(json.dumps(jsonData))
```

## 4 Project structure

In this paragraph we will talk about directories and generated by Cheeser. I should tell you that there is class ```ResMan``` in Cheese. ```ResMan``` mediates paths to main directories of project. More about ```ResMan``` later.

### 4.1 /.admin

This directory is hidden so you should not change it. But hey... you can do whatever you want. It contains web files (.html, .css, .js) for administration access. We will talk about admin access later.

### 4.2 /resources

Directory where belongs all non source code files which won't be served by server. Some kind of your own settings or whatever.

### 4.3 /src

Python source code directory. Cheese will be searching there for ```controllers``` and ```repositories``` during building your application. You do not have to follow any structure. If .py file is in /src, it WILL be found by Cheeser.build().

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
    - if you want to get rid of this watermark go on this url http://frogie.cz:6969/licence/generate?type=full%20access and from ```{ "LICENSE": { "CODE": code, "ID": int, "TYPE": "full access" } }``` copy ```code```    
- host - leave default
- port - port of your app
- dbDriver - driver for database
    - postgres - for postgresql database
    - https://github.com/mkleehammer/pyodbc/wiki  - for other databases
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

### 5.3 securitySettings.json

In this file can be defined access to your application. There need to be 3 objects in this json ```authentication``` , ```roles``` and ```access``` . 

#### 5.3.1 authentication

```authentication``` needs two variables inside. ```enabled``` and ```types``` . ```enabled``` is a boolean and it tells to Cheese if you want to authenticate requests or not. ```types``` is an array of some ... something... you will see.

Example of ```authentication```

```json
{
    "authentication": {
        "enabled": false,
        "types": [
            {
                "patern": "(?P&lt;login&gt;\w+):(?P&lt;password&gt;\w+)", // regular expression for authentication header (for example "Joe:heslo12")
                "validation": "select * from passwords where password = $password$ and login = $login$", // this sql will validate if validation is possible (if there is any case)
                "roleId": "select role_id from users where login = $login$" // founds users role id after validation
            }
        ]
    }
}
```

#### 5.3.2 roles

Roles are defined with ```value``` and ```name``` . Name of role field coresponds with value returned from database via ```roleId``` sql request.

Example of ```roles```

```json
{
    "roles": {
            "0": { // name of field fits value of roleId from database
                "value": 0,
                "name": "Admin"
            },
            "1": {
                "value": 1,
                "name": "Organiser"
            },
            "2": {
                "value": 2,
                "name": "Client"
            }
    }
}
```

#### 5.3.3 access

Access is dictionary of endpoints and their minimal role value which is need to be accesible. If you have more endpoints which starts with same prefix and have same role level you can use ```*``` keyword and Cheese will complete them for you. And if you will use ```*``` but there will be some endpoints with diferent level, just add them.

Example of ```access```

```json
{
    "access": {
        "/users/login": {
            "minRoleId": 2
        },
        "/users/get": {
            "minRoleId": 2 
        },
        "/clubs/*": { // all endpoints starting with /clubs will have minimal role level 1 
            "minRoleId": 1
        },
        "/clubs/getAll": { //except for this one... this endpoint will have minimal role level 2 
            "minRoleId": 2
        }
    }
}
```

#### 5.3.4 Authorization process

Ok ... this may looks little confusing. But it is actually pretty simple. This is process of authorization:

- first of all is checked if authorization is even enabled - if not -> skipping
- decode ```Authorization``` header from request
- find if decoded header fits any of ```paterns``` from ```types```
    -  ```patern``` is regular expression 
    -  more about regular expresions https://docs.python.org/3/howto/regex.html 
- validation of credentials with ```validation```
    - sql in this part needs to return anything (not empty response)
    - for example above would finall sql looks like this:
```sql
select case when exists 
    (select * from passwords 
    where password = 'heslo12' and login = 'Joe') 
then cast(1 as bit) 
else cast(0 as bit) end
```
    - variables from ```Authorization``` header need to have same name as in ```patern``` and need to be wrapped in ```$$``` characters
- if credentials are valid it will try to find role id via ```roleId``` sql
    - ```roleId``` sql just finds value from database
    - than use this value as key for ```roles``` dictionary
- endpoint validation 
    - ```endpoint``` will be used as key for ```access``` dictionary
        - if ```endpoint``` does not exist in ```access``` than it will returns found ```role``` (it means ```AUTHORIZED```)
        - if ```endpoint``` exists in ```access``` and its ```minRoleId``` is equal or lower then ```roleId``` . ```value``` returns ```role``` (```AUTHORIZED```)
        - if ```endpoint``` exists in ```access``` but its ```minRoleId``` is greater then ```roleId``` . ```value``` returns ```False``` (```UNAUTHORIZED```)
        - if ```endpoint``` exists in ```access``` but ```role``` is ```None``` returns ```False``` (```UNAUTHORIZED```)

### 5.4 secrets.json

Secrets are variables which you do not want to show public in git repository or whatever. You can use ```secrets.json``` for storring any sensitive data. Those data will be coded into ```metadata``` during build and you do not need to commit them public.

Example of storring secrets:

```json
{
    "databasePassword": "sdjfgnskjdng4",
    "sizeOfMyPP": "extreme"
}
```

And in ```appSettings.json``` just insert its name with ```$``` prefix:

```json
{
    "bla": "bla",
    "blabla": "blo",
    "dbPass": "$databasePassword",
    "ppMeter": "$sizeOfMyPP"
}
```

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

Repositories are most complex part of Cheese Framework. They are again classes but there need to be more annotations. Also repository have to inherits from ```CheeseRepository```

First annotation is ```#@repository```, so cheeser knows this is repository, followed by name of table.

Second annotation is ```#@dbscheme``` followed by name of table's columns in brackets where first should be ```Primary Key``` .

Last annotation is ```#@dbmodel``` followed by name of model for the table. It is just name for your better identification of model. But it is neccessary to be there.

```python
from cheese.modules.cheeseRepository import CheeseRepository

#@repository users;
#@dbscheme (id, user_name, age);
#@dbmodel User;
class UserRepository(CheeseRepository):
```

#### 7.2.2 Methods of repository

Method scheme is again very strict. They need to be static and every method needs to have this line in it's body:

```python
return CheeseRepository.query(argName1=arg1, argName2=arg2,...)
```

```arg1``` and ```arg2``` are method's arguments. Those argument's names need to corespond to names in sql annotation. 

There are two types of SQL query annotations query and commit.

## 7.2.2.1 #@query

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

## 7.2.2.2 #@commit
    
This annotation is for writing data into database.

```python
#@commit "update files set id=:id where file_name=:file_name;";
```

You will need it only when you want to change Primary Key of some row because there are three prebuilded methods that you should add into your repository. Those methods does not have any annotation and accepts only models. The update and delete method search rows by Primary Key so if you want to update row's Primary Key you need to write your own SQL query. (Maybe will be depreated idk)

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

# :bangbang: This does not work very well YET :bangbang:

If you want to pass an model it is possible.

For model ```Hello``` with attributes ```id=0```, ```name="hello"```, ```greet="hello boi"``` (this is prebuilded method save):

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

There are some prebuilded methods for saving, updating, removing and find new id. Those methods do not need to be defined in your custom repository. They are in ```CheeseRepository``` and are accessible from custom repositories.

- ```findAll()```
    - finds all rows of table
- ```find(primaryKey)```
    - finds one model by ```primaryKey```
- ```findBy(columnName, value)```
    - finds all rows with ```value``` of column ```columnName```
- ```findNewId()```
    - finds new ID (free one)
- ```save(obj)```
    - inserts new row into database by ```obj``` (it is CheeseModel)
- ```update(obj)```
    - updates values in database by id of ```obj```
- ```delete(obj)```
    - deletes row from database by id of ```obj```
- ```model()```
    - returns new instance of ```CheeseModel``` and finds to it free id via ```findNewId()```

### 7.3 Models

Models are non-static objects which contains data from one row of database. There is class ```CheeseModel``` . This class stores your data and is returned from ```repository``` (if called method is annotated with ```#@return``` annotation and values ```one``` or ```array```).

Every instance of ```CheeseModel``` has variables ```modelName``` and ```scheme```.

- ```modelName``` is defined in repository with ```#@dbModel``` annotation
    - it is only for you to recognize which model is which
- ```scheme``` is list of column names and is also defined in repository with ```#@dbScheme``` annotation

You can add your own variables (that does not matter) but when model is returned from repository query call then there are defined variables by ```scheme```. Those variables are filled with values from database.

Example for this repository:

```python
from cheese.modules.cheeseRepository import CheeseRepository

#@repository users;
#@dbscheme (id, user_name, age);
#@dbmodel User;
class UserRepository(CheeseRepository):

    #@query "select * from users where age>:age;";
    #@return array;
    def getOlderThen(userAge):
        return CheeseRepository.query(age=userAge)
```

We can do this:

```python
users = UserRepository.getOlderThen(20) # returns array of CheeseModel with .age > 20

# prints all users older then 20
for user in users:
    print(user.id, user.user_name, user.age)

# prints name of CheeseModel, in this case => User
print(users[0].modelName)
# prints database scheme, in this case => ['id', 'user_name', 'age']
print(users[0].scheme)
```
### 7.3.1 CheeseModel methods

#### 7.3.1.1 toJson()

```toJson()``` method creates python dictionary from storred variables of model. But only from variables which are in database scheme.

This example uses some of models from previous example.

```python
print(user.toJson())
```

Output:

```json
{
    "ID": 0,
    "USER_NAME": "idk Joe",
    "AGE": 69 
}
```

#### 7.3.1.2 toModel(jsn)

```toModel(jsn)``` method sets variables of model by ```jsn``` argument. ```jsn``` can be dictionary or any iterable structure (list, tuple, Row (this is object from ```pyodbc``` library))

:bangbang: If you pass anything else (but iterable) than dictionary it MUST be in order by ```#@dbScheme```. 

```python
user.toModel([0, "Joe", 15]) # list example
print(user.toJson())

user.toModel((0, "Joe Boy", 15)) # tuple example
print(user.toJson())

user.toModel({"id": 0, "user_name": "Joe", "age": 4}) # dictionary example
print(user.toJson())

user.toModel({"id": 0, "user_name": "Joe", "age": 4, "fancy_level": 45}) # dictionary example
print(user.toJson())
```

Output:

```json
{
    "ID": 0,
    "USER_NAME": "Joe",
    "AGE": 15
}

{
    "ID": 0,
    "USER_NAME": "Joe Boy",
    "AGE": 15
}

{
    "ID": 0,
    "USER_NAME": "Joe",
    "AGE": 4
}
// you can see that "fancy_level" variable is not in json because it is not defined in database scheme
{
    "ID": 0,
    "USER_NAME": "Joe",
    "AGE": 4
}
```

#### 7.3.1.3 setAttrs(**attrs)

```setAttrs(**attrs)``` is pretty similar to ```toModel(jsn)``` but arguments you pass can be written like kwargs:

```python
user.setAttrs(id=1, user_name="Jimbo", age=47)
print(user.toJson())
```

Output:

```json
{
    "ID": 1,
    "USER_NAME": "Jimbo",
    "AGE": 47
}
```

### 7.3.2 Creating model

## :bangbang: Do not create models by yourself :bangbang:

Always use repository method ```model()``` . This method will automatically finds free id for your model. This is maybe not the best way to do it so I will probably change it so id will be find during save. But USE it.

:x:

```python
model = CheeseModel(modelName, scheme)
```

:heavy_check_mark:

```python
model = YourRepository.model()
```

## 8 Testing

Testing is very important part of programming. It will tell you if you fucked something up. Cheese, because of database connection (and because it is fun creating it), has it's own test system.

Tests are run during start of application after [Build](#3-build) when application is in debug mode.

### 8.1 Cheese test modules

There is list of classes which your test class file should contains. Everything will be clear when you check [Test examples](#84-test-examples).

## 8.1.1 UnitTest

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
 
## 8.1.2 Pointer

```python
from Cheese.pointer import Pointer
```

Usage of ```Pointer``` is approximately similar as in C/C++. But because python does not have this amazing feature I had to make my own. ```Pointer``` is just some pointer (:D) to any variable you need. I will show you that in some [Test examples](#84-test-examples) .

Methods of ```Pointer``` :

```python
Pointer.getValue()
```

Return value to which ```Pointer``` points.

```python
Pointer.setValue(value)
```

Sets value to which ```Pointer``` points. (You won't need it)

## 8.1.3 Mock

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

# 9 JavaScript

I have create some useful javascript functions. Those scripts can be used if CORS is enabled or you can download them and insert them into your project for offline use.

Some of those scripts (for example ```alerts.js```) needs a ```css``` for proper functionality. You can change it but if scripts needs ```css``` then you should add classes with same names like which are in given ```.css``` file. (hope you understand it).

All imports:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/time.js"></script>    
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/cookies.js"></script>    
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/communication.js"></script>         
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>   
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/tableBuilder.js"></script>
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/alerts.js"></script>

<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/autoComplete.js"></script>
```

## 9.1 autoComplete

Easy way to create a custom combobox. Credit belongs to w3schools: https://www.w3schools.com/howto/howto_js_autocomplete.asp 

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/autoComplete.js"></script>

<!-- necessary dependencies -->
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>
```

Needs css:

```html
<link rel="stylesheet" href="https://kubaboi.github.io/CheeseFramework/public/styles/autocompleteStyle.css">
```

Variables of css:

```css
/* colors */
--light-color /* background color of main dialog */
--text-color /* text color of not chosen row */
--secondary-color /* background color of chosen row */

/* classes */
.autocomplete /* better not to be changed */
.autocomplete-items /* all items of autocomplete list */
.autocomplete-items div /* one item of autocomplete list */
.autocomplete-items div:hover 
.autocomplete-active /* onclick */
```

Functions:

### autocomplete(inp, arr)

Method generates html elements for autocomplete dialog

- ```inp``` - input html element (html object)
- ```arr``` - array of options for autocomplete 

## 9.2 cookies

Script for saving and reading cookies.

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/cookies.js"></script>
```

Functions:

### setCookie(cname, cvalue, exdays)

Sets a cookie

- ```cname``` - string name of the cookie
- ```cvalue``` - value of the cookie
- ```exdays``` - float value of how long will cookie be storred (in days)

### getCookie(cname)

Returns value of cookie

- ```cname``` - string name of the cookie

## 9.3 communication

Script that sends ```xmlhttp``` requests. There are two global variables. You can change them anywhere in your scripts (but change will be proceede only if your scripts are imported AFTER ```communication``` script)

- ```debug``` - default setting is ```true```, change it if you do not want to print informations about requests 
- ```authorization``` - variable that will be send like ```Authorization``` header in request (if empty than this header won't be created). For example: ```authorization="userName:password"```

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/communication.js"></script>

<!-- necessary dependencies -->
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/time.js"></script>
```

Functions:

### callEndpoint(type, url, request=null)

Returns Promise with server JSON response.

- ```type``` - HTTP method ("GET"/"POST")
- ```url``` - request url in most cases only endpoint. It can be used even for external server but than ```url``` needs to have ```http[s]://server/endpoint``` structure
- ```request``` - default null (it is for "GET"). For "POST" it is just JavaScript object

Usage:

```javascript
async function getData() {
    var response = await callEndpoint("POST", "/endpoint", someObject);
    if (response.ERROR == null) {
        console.log(response);
    }
    else {
        alert(response.ERROR);
    }
} 
```

## 9.4 elementManager

Script for creating html elements.

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>
```

Functions:

### createElement(type, parent=null, innerHTML="", attributes=[])

Returns created element

- ```type``` - html tag ("div", "label"...)
- ```parent``` - parent element (element will be append to parent if it is not null)
- ```innerHTML``` - innerHTML of created element
- ```attributes``` - list of attributes ("id", "class", "onclikc"...)
    - one attribute is JavaScript object contaning "name" and "value"

Usage:

```javascript
// function will create div and button inside that div with text "Click me :)"
// button will have class "coolButton" and onclick will print in console "hello"
function makeElement() {
    var div = createElement("div");
    var element = createElement("button", div, "Click me :)",
        [
            {"name": "onclick", "value": "console.log('hello');"},
            {"name": "class", "value": "coolButton"}
        ]
    );
}
```

### getValueOf(id)

Return value of element with id = ```id``` . It will parse value based on element type. For ```text``` or ```datetime``` it will be string. For ```number``` it will be integer and for ```radio``` or ```checkbox``` it will be boolean.

- ```id``` - id of element 

## 9.5 tableBuilder

Script for creating tables.

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/tableBuilder.js"></script>

<!-- necessary dependencies -->
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>
```

Functions:

### clearTable(table)

Sets innerHTML of table to "".

- ```table``` - html element (do not need to be table)

### addRow(table, cells, rowAttributes=[])

Adds one row in the end of the table.

- ```table``` - html element (need to be table)
- ```cells``` - array of cell objects
    - cell are javascript objects containing "text" and "attributes" which is a list
    - attributes are javascript objects containing "name" and "value"
- ```rowAttributes``` - list of attributes for row element ("id", "class", "onclick"...)
    - attributes are javascript objects containing "name" and "value"

### addHeader(table, cells, rowAttributes=[])

Adds header to the end of the table. Make sure that you are adding it like first. (If you do not want to have header in the end or in the middle of table ofc).

- ```table``` - html element (need to be table)
- ```cells``` - array of cell objects
    - cell are javascript objects containing "text" and "attributes" which is a list
    - attributes are javascript objects containing "name" and "value"
- ```rowAttributes``` - list of attributes for row element ("id", "class", "onclick"...)
    - attributes are javascript objects containing "name" and "value"

## 9.6 alerts

Alerts script allows to create custom alerts.

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/alerts.js"></script>

<!-- necessary dependencies -->
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>
```

Need css:

```html
<link rel="stylesheet" href="https://kubaboi.github.io/CheeseFramework/public/styles/alertStyle.css">
```

Variables of css:

```css
/*
You can create your own animations, classes, colors or just change mine... 
If you make something cool I would love to see it :)
*/

/* colors */
--light-color /* background color of main dialog */
--text-color /* text color */
--secondary-color /* border color */

/* classes */
.alertDiv /* better not to be changed (except for colors) */
.alertH2 /* alert title */
.alertLabel /* alert label */
.alertOKbutton /* ok button */ 
.alertOKbutton:hover 
.alertCancelButton /* cancel button */
.alertCancelButton:hover
.divOkAlert /* alert which pop up on the left top and it is green */
.divWrongAlert /* alert which pop up on the left top and it is red */

/* animations */
@keyframes showAlert {} /* show animation for .alertDiv (slides from top) */
@keyframes hideAlert {} /* hide animation for .alertDiv (slides into top) */
@keyframes okShowAlert {} /* show animation for .divOkAlert and .divWrongAlert (slides from left) */
@keyframes okHideAlert {} /* hide animation for .divOkAlert and .divWrongAlert (slides into left) */
```

Functions:

### showAlert(title, message, divClass, animation, closeAnimation)

Shows alert. There are not default values (it would be soooo long).

- ```title``` - title of alert (header)
- ```message``` - message of alert (label)
- ```divClass``` - css class name
    - default is ```"alertDiv"```
- ```animation``` - show animation
    - default is ```{"name":"showAlert","duration":"0.5s"}```
    - "name" is css animation name
    - "duration" is duration of animation
- ```closeAnimation``` - close animation
    - default is ```{"name":"hideAlert","duration":"0.5s"}```

### showConfirm(title, message, ifOk, divClass, animation, closeAnimation)

Show confirm alert. It will be closed after user clicks at "OK"/"Close" button.

- ```title``` - title of alert (header)
- ```message``` - message of alert (label) 
- ```ifOk``` - function done after "OK" confirmation
- ```divClass``` - css class name
    - default is ```"alertDiv"```
- ```animation``` - show animation
    - default is ```{"name":"showAlert","duration":"0.5s"}```
- ```closeAnimation``` - close animation
    - default is ```{"name":"hideAlert","duration":"0.5s"}```

Usage:

```javascript
function func(v) {
    console.log(v);
}

showConfirm("Really?", 
    "Do you really want to print hello??????!!!!",
    function() {func("Hello :)");});
```

### showTimerAlert(title, message, time, divClass, animation, closeAnimation)

Show alert which will be after ```time``` miliseconds closed

- ```title``` - title of alert (header)
- ```message``` - message of alert (label) 
- ```time``` - time in miliseconds
- ```divClass``` - css class name
    - default is ```"alertDiv"```
- ```animation``` - show animation
    - default is ```{"name":"showAlert","duration":"0.5s"}```
- ```closeAnimation``` - close animation
    - default is ```{"name":"hideAlert","duration":"0.5s"}```

### showOkAlert(title, message, timeAlert=0)

Show ok alert (the green one on the left). If ```timeAlert``` is 0 then the alert won't be closed automaticaly

- ```title``` - title of alert (header)
- ```message``` - message of alert (label) 
- ```timeAlert``` - time in miliseconds (if 0 there won't be timer)

### showWrongAlert(title, message, timeAlert=0)

Show wrong alert (the red one on the left). If ```timeAlert``` is 0 then the alert won't be closed automaticaly

- ```title``` - title of alert (header)
- ```message``` - message of alert (label) 
- ```timeAlert``` - time in miliseconds (if 0 there won't be timer)

## 9.7 loadPage

Script for downloading parts of web dynamically. It is prepared for ```CheeseApplications```. I do not even know if it is best practice. :no_good:

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/loadPage.js"></script>

<!-- necessary dependencies --> 
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.js"></script>
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/communication.js"></script>
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/time.js"></script>
```

Functions:

### loadPage(startArray, doAfter=null, afterArray=[])

Parts of the web need to be inside folder ```webParts``` and paths inside arrays does not contain full path (```main/header``` for ```header.html``` inside ```/web/webParts/main/```)

- ```startArray``` - list of paths for part that need to be loaded before some javascript intialization
- ```doAfter``` - javascript initialization, it is a function with processess that need loaded web parts from startArray
- ```afterArray``` - list of paths for part that do need to be loaded before initialization

### getHtml(name, path, parentId, attributeClass="")

Creates div with attributeClass class, innerHTML from file and will be inside parent. And returns that div.

- ```name``` - name of html file (without .html)
- ```path``` - folder without "/webParts/" and withou name
- ```parentId``` - id of html object which will contain this part of web
- ```attributeClass``` - class name of div

## 9.8 time

This script has only one function which returns actual time. It is used by ```communication.js``` for logs timestamps.

Import:

```html
<script src="https://kubaboi.github.io/CheeseFramework/public/scripts/time.js"></script>
```

Functions:

### nowTime()

Return string of actual time formated as ```hh:mm:ss```


# That's all

Here is a cake :cake: but it is a lie




