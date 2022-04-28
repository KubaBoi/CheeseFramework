<img align="right" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Release v(22.04.28.20.40)

## Source code

https://github.com/KubaBoi/CheeseFramework/tree/development

## Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.
Stay safe :heart:

Also I am using Tomcat like some kind of gate which listens at 80 public port and resending requests to Cheese Applications running under firewall and listen at closed to public ports.

## Instalation

### Downloads

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

### Creating new project

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

### Run Cheese application

Main script of Cheese applications is located in directory ```<your project>/src/<your project>.py```
So just run this script.

<img src="https://kubaboi.github.io/CheeseFramework/documentation/images/firstRun.png">

Default app port is ```8000``` so you can check if everything works at <a href="http://localhost:8000">localhost:8000</a>



