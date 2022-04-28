<img align="right" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Release v(22.04.28.20.40)

## TODO

- [ ] metadata load setting (RAM/dynamic)
- [ ] repair CORS not allowed
- [ ] do authorization
- [ ] do Cheese tools


## Source code

https://github.com/KubaBoi/CheeseFramework/tree/development

## 1 Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.
Stay safe :heart:

Also I am using Tomcat like some kind of gate which listens at 80 public port and resending requests to Cheese Applications running under firewall and listen at closed to public ports.

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

## 6 Python code

This will be about how to write ```controllers```, ```models``` and ```repositories```

### 6.1 API Controllers

Controllers are classes that handle requested endpoints. I recommend to create one folder just for your controllers but it is not necessary (or you the generated one ofc).

#### 6.1.1 Create controller







