# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.08.17.16.43

Cheese version v(1.4.43)

## Contents

- [InternalServerError](#1-internalservererror)
    - [with_traceback](#11-with_traceback)
- [Stats](#2-stats)
    - [rowCount](#21-rowcount)
- [Mock](#3-mock)
    - [catchArgs](#31-catchargs)
    - [whenReturn](#32-whenreturn)
- [HTTPError](#4-httperror)
    - [with_traceback](#41-with_traceback)
- [CheeseController](#5-cheesecontroller)
    - [checkJson](#51-checkjson)
    - [checkLicense](#52-checklicense)
    - [createResponse](#53-createresponse)
    - [getArgs](#54-getargs)
    - [getClientAddress](#55-getclientaddress)
    - [getCookies](#56-getcookies)
    - [getEndpoints](#57-getendpoints)
    - [getHeaders](#58-getheaders)
    - [getHeadersDict](#59-getheadersdict)
    - [getPath](#510-getpath)
    - [getTime](#511-gettime)
    - [modulesToJsonArray](#512-modulestojsonarray)
    - [readArgs](#513-readargs)
    - [readBytes](#514-readbytes)
    - [sendResponse](#515-sendresponse)
    - [serveFile](#516-servefile)
    - [validateJson](#517-validatejson)
- [MockManager](#6-mockmanager)
    - [prepareResponse](#61-prepareresponse)
    - [returnMock](#62-returnmock)
- [CheeseModel](#7-cheesemodel)
    - [_CheeseModel__getAttrs](#71-_cheesemodel__getattrs)
    - [convert](#72-convert)
    - [setAttrs](#73-setattrs)
    - [toJson](#74-tojson)
    - [toModel](#75-tomodel)
- [CheeseRepository](#8-cheeserepository)
    - [className](#81-classname)
    - [delete](#82-delete)
    - [find](#83-find)
    - [findAll](#84-findall)
    - [findBy](#85-findby)
    - [findNewId](#86-findnewid)
    - [findOneBy](#87-findoneby)
    - [model](#88-model)
    - [query](#89-query)
    - [queryType](#810-querytype)
    - [save](#811-save)
    - [startTesting](#812-starttesting)
    - [stopTesting](#813-stoptesting)
    - [update](#814-update)
- [TestError](#9-testerror)
    - [with_traceback](#91-with_traceback)
- [MockError](#10-mockerror)
    - [with_traceback](#101-with_traceback)
- [BadRequest](#11-badrequest)
    - [with_traceback](#111-with_traceback)
- [Unauthorized](#12-unauthorized)
    - [with_traceback](#121-with_traceback)
- [PaymentRequired](#13-paymentrequired)
    - [with_traceback](#131-with_traceback)
- [Forbidden](#14-forbidden)
    - [with_traceback](#141-with_traceback)
- [NotFound](#15-notfound)
    - [with_traceback](#151-with_traceback)
- [MethodNotAllowed](#16-methodnotallowed)
    - [with_traceback](#161-with_traceback)
- [NotAcceptable](#17-notacceptable)
    - [with_traceback](#171-with_traceback)
- [Conflict](#18-conflict)
    - [with_traceback](#181-with_traceback)
- [ImTeaPot](#19-imteapot)
    - [with_traceback](#191-with_traceback)


## 1. InternalServerError

### 1.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 2. Stats


This class shows statistics about project



### 2.1 rowCount


Count of rows in project.

```*suffixes``` is list of file suffixes that should be counted.

Default ```suffixes``` are ```.py```, ```.js```, ```.html```, ```.css```.

```*suffixes``` are being add to default one not overwrittes them.



## 3. Mock

### 3.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 3.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 4. HTTPError

### 4.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 5. CheeseController


```CheeseController``` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 5.1 checkJson


raise BadRequest exception if any key is missing in json

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



### 5.2 checkLicense


checks license



### 5.3 createResponse


create response as tuple

```dict``` is response dictionary. Dictionary will be dumped by ```json``` library
and coded into bytes with ```utf-8``` coding.

```code``` is http status code as ```int```

```headers``` is dict with headers and its values



### 5.4 getArgs


return arguments from rest request url

```url``` is url of request

```decode``` if true than decode URL-encoded format



### 5.5 getClientAddress


return client's address

```server``` is instance of http handler



### 5.6 getCookies


return cookies as dictionary from request header

```server``` is instance of http handler



### 5.7 getEndpoints


return list of endpoints

```url``` is url of request

splits url by ```/``` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 5.8 getHeaders


return requests headers

```server``` is instance of http handler



### 5.9 getHeadersDict


return request headers as dict

```server``` is instance of http handler



### 5.10 getPath


return path without arguments

```url``` is url of request

splits url by ```?``` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 5.11 getTime


return now time and add argument in seconds

```addTime``` is time in ```seconds``` which will be added to now time. It can be negative value.



### 5.12 modulesToJsonArray


return json array from list of modules

```modules``` is list of CheeseModel instances



### 5.13 readArgs


return arguments from body of request as dictionary

```server``` is instance of http handler



### 5.14 readBytes


return bytes from post body

```server``` is instance of http handler



### 5.15 sendResponse


send response to client

```server``` is instance of http handler

```response``` is tuple (response object created in ```CheeseController.createResponse(...)``` method)



### 5.16 serveFile


sends file located in ```/web``` directory

```server``` is instance of http handler

```file``` is string path to any file located in ```/web``` directory

```header``` is string of header for http response



### 5.17 validateJson


return true if all keys are in dictionary

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



## 6. MockManager

### 6.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 6.2 returnMock


Mocks repository method



## 7. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 7.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 7.2 convert


converts lists and CheeseModels into json



### 7.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 7.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 7.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



## 8. CheeseRepository


```CheeseRepository``` is static class for communication with database



### 8.1 className


return string with name of class



### 8.2 delete


deletes row from database

```obj``` is ```CheeseModel``` object



### 8.3 find


return one ```CheeseModel``` by ```Primary key```



### 8.4 findAll


return whole table of database as list of ```CheeseModel```



### 8.5 findBy


return list of ```CheeseModel```

```columnName``` name of column for filtering

```value``` value of ```column```

example:
```
columnName = "age"
value = 15
->
SQL: "... WHERE age = 15 ..."
```



### 8.6 findNewId


find new available ```Primary key```



### 8.7 findOneBy


return one ```CheeseModel``` by ```columnName```

```columnName``` name of column for filtering

```value``` value of ```column```

example:
```
columnName = "age"
value = 15
->
SQL: "... WHERE age = 15 ..."
```



### 8.8 model


return ```CheeseModel``` with ```Primary key```, ```modelName``` and ```scheme```



### 8.9 query


Access point to database. Returns database output.

```userRepository``` is string name of used repository

```**kwargs``` is ```dict``` of arguments for SQL request



### 8.10 queryType






### 8.11 save


creates new row in database

```obj``` is ```CheeseModel``` object



### 8.12 startTesting


sets repository testing enviroment

```mockManager``` is instance of ```MockManager``` used by testing



### 8.13 stopTesting


stop repository testing enviroment



### 8.14 update


updates row in database

```obj``` is ```CheeseModel``` object



## 9. TestError

### 9.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 10. MockError

### 10.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 11. BadRequest

### 11.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 12. Unauthorized

### 12.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 13. PaymentRequired

### 13.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 14. Forbidden

### 14.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 15. NotFound

### 15.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 16. MethodNotAllowed

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. NotAcceptable

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. Conflict

### 18.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 19. ImTeaPot

### 19.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


