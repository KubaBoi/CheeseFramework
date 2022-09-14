# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.09.15.01.37

Cheese version v(1.4.90)

## Contents

- [InternalServerError](#1-internalservererror)
    - [with_traceback](#11-with_traceback)
- [Stats](#2-stats)
    - [rowCount](#21-rowcount)
- [Mock](#3-mock)
    - [catchArgs](#31-catchargs)
    - [whenReturn](#32-whenreturn)
- [ResMan](#4-resman)
    - [convertBytes](#41-convertbytes)
    - [error](#42-error)
    - [getFileName](#43-getfilename)
    - [getRelativePathFrom](#44-getrelativepathfrom)
    - [joinPath](#45-joinpath)
    - [logs](#46-logs)
    - [metadata](#47-metadata)
    - [removeSlash](#48-removeslash)
    - [resources](#49-resources)
    - [root](#410-root)
    - [setPath](#411-setpath)
    - [src](#412-src)
    - [tests](#413-tests)
    - [web](#414-web)
- [HTTPError](#5-httperror)
    - [with_traceback](#51-with_traceback)
- [Settings](#6-settings)
    - [loadSettings](#61-loadsettings)
- [CheeseController](#7-cheesecontroller)
    - [checkJson](#71-checkjson)
    - [checkLicense](#72-checklicense)
    - [createResponse](#73-createresponse)
    - [getArgs](#74-getargs)
    - [getClientAddress](#75-getclientaddress)
    - [getCookies](#76-getcookies)
    - [getEndpoints](#77-getendpoints)
    - [getHeaders](#78-getheaders)
    - [getHeadersDict](#79-getheadersdict)
    - [getPath](#710-getpath)
    - [getTime](#711-gettime)
    - [modulesToJsonArray](#712-modulestojsonarray)
    - [readArgs](#713-readargs)
    - [readBytes](#714-readbytes)
    - [sendResponse](#715-sendresponse)
    - [serveFile](#716-servefile)
    - [validateJson](#717-validatejson)
- [CheeseServerMulti](#8-cheeseservermulti)
    - [_handle_request_noblock](#81-_handle_request_noblock)
    - [close_request](#82-close_request)
    - [fileno](#83-fileno)
    - [finish_request](#84-finish_request)
    - [get_request](#85-get_request)
    - [handle_error](#86-handle_error)
    - [handle_request](#87-handle_request)
    - [handle_timeout](#88-handle_timeout)
    - [process_request](#89-process_request)
    - [process_request_thread](#810-process_request_thread)
    - [serve_forever](#811-serve_forever)
    - [server_activate](#812-server_activate)
    - [server_bind](#813-server_bind)
    - [service_actions](#814-service_actions)
    - [shutdown](#815-shutdown)
    - [shutdown_request](#816-shutdown_request)
    - [verify_request](#817-verify_request)
- [CheeseServer](#9-cheeseserver)
    - [_handle_request_noblock](#91-_handle_request_noblock)
    - [close_request](#92-close_request)
    - [fileno](#93-fileno)
    - [finish_request](#94-finish_request)
    - [get_request](#95-get_request)
    - [handle_error](#96-handle_error)
    - [handle_request](#97-handle_request)
    - [handle_timeout](#98-handle_timeout)
    - [process_request](#99-process_request)
    - [serve_forever](#910-serve_forever)
    - [server_activate](#911-server_activate)
    - [server_bind](#912-server_bind)
    - [server_close](#913-server_close)
    - [service_actions](#914-service_actions)
    - [shutdown](#915-shutdown)
    - [shutdown_request](#916-shutdown_request)
    - [verify_request](#917-verify_request)
- [CheeseHandler](#10-cheesehandler)
    - [address_string](#101-address_string)
    - [date_time_string](#102-date_time_string)
    - [handle](#103-handle)
    - [handle_expect_100](#104-handle_expect_100)
    - [handle_one_request](#105-handle_one_request)
    - [log_date_time_string](#106-log_date_time_string)
    - [log_error](#107-log_error)
    - [log_request](#108-log_request)
    - [parse_request](#109-parse_request)
    - [send_error](#1010-send_error)
    - [send_header](#1011-send_header)
    - [send_response](#1012-send_response)
    - [send_response_only](#1013-send_response_only)
    - [version_string](#1014-version_string)
- [MockManager](#11-mockmanager)
    - [prepareResponse](#111-prepareresponse)
    - [returnMock](#112-returnmock)
- [CheeseModel](#12-cheesemodel)
    - [_CheeseModel__getAttrs](#121-_cheesemodel__getattrs)
    - [convert](#122-convert)
    - [setAttrs](#123-setattrs)
    - [toJson](#124-tojson)
    - [toModel](#125-tomodel)
- [CheeseRepository](#13-cheeserepository)
    - [className](#131-classname)
    - [delete](#132-delete)
    - [exists](#133-exists)
    - [find](#134-find)
    - [findAll](#135-findall)
    - [findBy](#136-findby)
    - [findNewId](#137-findnewid)
    - [findOneBy](#138-findoneby)
    - [findOneWhere](#139-findonewhere)
    - [findUserMethod](#1310-findusermethod)
    - [findUserRepository](#1311-finduserrepository)
    - [findWhere](#1312-findwhere)
    - [getTypeOf](#1313-gettypeof)
    - [getVariables](#1314-getvariables)
    - [model](#1315-model)
    - [query](#1316-query)
    - [queryType](#1317-querytype)
    - [save](#1318-save)
    - [startTesting](#1319-starttesting)
    - [stopTesting](#1320-stoptesting)
    - [update](#1321-update)
- [Security](#14-security)
    - [findRole](#141-findrole)
    - [fitPatern](#142-fitpatern)
    - [handleExceptions](#143-handleexceptions)
    - [prepareString](#144-preparestring)
    - [validate](#145-validate)
- [TestError](#15-testerror)
    - [with_traceback](#151-with_traceback)
- [MockError](#16-mockerror)
    - [with_traceback](#161-with_traceback)
- [BadRequest](#17-badrequest)
    - [with_traceback](#171-with_traceback)
- [Unauthorized](#18-unauthorized)
    - [with_traceback](#181-with_traceback)
- [PaymentRequired](#19-paymentrequired)
    - [with_traceback](#191-with_traceback)
- [Forbidden](#20-forbidden)
    - [with_traceback](#201-with_traceback)
- [NotFound](#21-notfound)
    - [with_traceback](#211-with_traceback)
- [MethodNotAllowed](#22-methodnotallowed)
    - [with_traceback](#221-with_traceback)
- [NotAcceptable](#23-notacceptable)
    - [with_traceback](#231-with_traceback)
- [Conflict](#24-conflict)
    - [with_traceback](#241-with_traceback)
- [ImTeaPot](#25-imteapot)
    - [with_traceback](#251-with_traceback)


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



## 4. ResMan

### 4.1 convertBytes


convert bytes



### 4.2 error


dir for error sites



### 4.3 getFileName


return name of file from path



### 4.4 getRelativePathFrom


return relative path from



### 4.5 joinPath


joins two paths together



### 4.6 logs


logs



### 4.7 metadata


metadata



### 4.8 removeSlash


remove / from start or end



### 4.9 resources


other resources of project



### 4.10 root


root dir of project



### 4.11 setPath


set root path of project



### 4.12 src


all source codes of project



### 4.13 tests


tests



### 4.14 web


dir from which CheeseFramework is able to serve files (index.html)



## 5. HTTPError

### 5.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 6. Settings

### 6.1 loadSettings


loads settings



## 7. CheeseController


`CheeseController` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 7.1 checkJson


raise BadRequest exception if any key is missing in json

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



### 7.2 checkLicense


checks license



### 7.3 createResponse


create response as tuple

`dict` is response dictionary. Dictionary will be dumped by `json` library
and coded into bytes with `utf-8` coding.

`code` is http status code as `int`

`headers` is dict with headers and its values



### 7.4 getArgs


return arguments from rest request url

`url` is url of request

`decode` if true than decode URL-encoded format



### 7.5 getClientAddress


return client's address

`server` is instance of http handler



### 7.6 getCookies


return cookies as dictionary from request header

`server` is instance of http handler



### 7.7 getEndpoints


return list of endpoints

`url` is url of request

splits url by `/` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 7.8 getHeaders


return requests headers

`server` is instance of http handler



### 7.9 getHeadersDict


return request headers as dict

`server` is instance of http handler



### 7.10 getPath


return path without arguments

`url` is url of request

splits url by `?` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 7.11 getTime


return now time and add argument in seconds

`addTime` is time in `seconds` which will be added to now time. It can be negative value.



### 7.12 modulesToJsonArray


return json array from list of modules

`modules` is list of CheeseModel instances



### 7.13 readArgs


return arguments from body of request as dictionary

`server` is instance of http handler



### 7.14 readBytes


return bytes from post body

`server` is instance of http handler



### 7.15 sendResponse


send response to client

`server` is instance of http handler

`response` is tuple (response object created in `CheeseController.createResponse(...)` method)



### 7.16 serveFile


sends file located in `/web` directory

`server` is instance of http handler

`file` is string path to any file located in `/web` directory

`header` is string of header for http response



### 7.17 validateJson


return true if all keys are in dictionary

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



## 8. CheeseServerMulti

Handle requests in a separate thread.


### 8.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 8.2 close_request

Called to clean up an individual request.


### 8.3 fileno

Return socket file number.

Interface required by selector.




### 8.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 8.5 get_request

Get the request and client address from the socket.

May be overridden.




### 8.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 8.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 8.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 8.9 process_request

Start a new thread to process the request.


### 8.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 8.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 8.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 8.13 server_bind

Override server_bind to store the server name.


### 8.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 8.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 8.16 shutdown_request

Called to shutdown and close an individual request.


### 8.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 9. CheeseServer

Handle requests in one thread.


### 9.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 9.2 close_request

Called to clean up an individual request.


### 9.3 fileno

Return socket file number.

Interface required by selector.




### 9.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 9.5 get_request

Get the request and client address from the socket.

May be overridden.




### 9.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 9.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 9.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 9.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 9.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 9.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 9.12 server_bind

Override server_bind to store the server name.


### 9.13 server_close

Called to clean-up the server.

May be overridden.




### 9.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 9.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 9.16 shutdown_request

Called to shutdown and close an individual request.


### 9.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 10. CheeseHandler

### 10.1 address_string

Return the client address.


### 10.2 date_time_string

Return the current date and time formatted for a message header.


### 10.3 handle

Handle multiple requests if necessary.


### 10.4 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 10.5 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 10.6 log_date_time_string

Return the current time formatted for logging.


### 10.7 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 10.8 log_request

Log an accepted request.

This is called by send_response().




### 10.9 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 10.10 send_error

Send and log an error reply.

Arguments are
* code:    an HTTP error code
3 digits
* message: a simple optional 1 line reason phrase.
*( HTAB / SP / VCHAR / %x80-FF )
defaults to short entry matching the response code
* explain: a detailed message defaults to the long entry
matching the response code.

This sends an error response (so it must be called before any
output has been generated), logs the error, and finally sends
a piece of HTML explaining the error to the user.




### 10.11 send_header

Send a MIME header to the headers buffer.


### 10.12 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 10.13 send_response_only

Send the response header only.


### 10.14 version_string

Return the server software version string.


## 11. MockManager

### 11.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 11.2 returnMock


Mocks repository method



## 12. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 12.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 12.2 convert


converts lists and CheeseModels into json



### 12.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 12.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 12.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



## 13. CheeseRepository


`CheeseRepository` is static class for communication with database



### 13.1 className


return string with name of class



### 13.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 13.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 13.4 find


return one `CheeseModel` by `Primary key`



### 13.5 findAll


return whole table of database as list of `CheeseModel`



### 13.6 findBy


`DEPRECATED`

return list of `CheeseModel`

`columnName` name of column for filtering

`value` value of `column`

example:
```
columnName = "age"
value = 15
->
SQL: "... WHERE age = 15 ..."
```



### 13.7 findNewId


find new available `Primary key`



### 13.8 findOneBy


`DEPRECATED`

return one `CheeseModel` by `columnName`

`columnName` name of column for filtering

`value` value of `column`

example:
```
columnName = "age"
value = 15
->
SQL: "... WHERE age = 15 ..."
```



### 13.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 13.10 findUserMethod


finds name of method from user-made repository



### 13.11 findUserRepository


finds name of user-made repository



### 13.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 13.13 getTypeOf


convert arguments



### 13.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 13.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 13.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 13.17 queryType






### 13.18 save


creates new row in database

`obj` is `CheeseModel` object



### 13.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 13.20 stopTesting


stop repository testing enviroment



### 13.21 update


updates row in database

`obj` is `CheeseModel` object



## 14. Security

### 14.1 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 14.2 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 14.3 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 14.4 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 14.5 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 15. TestError

### 15.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 16. MockError

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. BadRequest

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. Unauthorized

### 18.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 19. PaymentRequired

### 19.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 20. Forbidden

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. NotFound

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. MethodNotAllowed

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. NotAcceptable

### 23.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 24. Conflict

### 24.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 25. ImTeaPot

### 25.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


