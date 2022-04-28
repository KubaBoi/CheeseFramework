<img style="float: right;" width=150 height=150 src="https://kubaboi.github.io/CheeseFramework/documentation/documentation300x300.png">

<link rel="stylesheet" href="https://kubaboi.github.io/CheeseFramework/public/styles/style.css">

# Cheese Framework

[![Release Build](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml/badge.svg?branch=main)](https://github.com/KubaBoi/CheeseFramework/actions/workflows/realeaseDate.yml)

### Release v(22.04.28.20.40)

## Source code

https://github.com/KubaBoi/CheeseFramework/tree/development

## Introduction

Cheese Framework is open source library for creating web applications with database connection (like Spring in Java). It can save a lot of time because developer does not have to making http server or creating whole database reader. Cheese is using pydobc library for database access so it is able to connect to most of modern database engines.

### :bangbang: IMPORTANT :bangbang:

<div class="needBuild">
    Cheese Framework is using basic http python server. So DO NOT RUN outside firewall. If you are creating an application for bigger audience or you care about security use any other framework like Django and server for production like Apache or Tomcat.
    Stay safe :heart:
</div>
Also I am using Tomcat like some kind of gate which listens at 80 public port and resending requests to Cheese Applications running under firewall and listen at closed to public ports.

