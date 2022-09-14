# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.09.15.01.45

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
- [Metadata](#7-metadata)
    - [cleanInits](#71-cleaninits)
    - [code64](#72-code64)
    - [createInits](#73-createinits)
    - [decode](#74-decode)
    - [decode64](#75-decode64)
    - [encode](#76-encode)
    - [findMethod](#77-findmethod)
    - [getKey](#78-getkey)
    - [getMethod](#79-getmethod)
    - [getModel](#710-getmodel)
    - [getObjMethod](#711-getobjmethod)
    - [getRawScheme](#712-getrawscheme)
    - [getRepository](#713-getrepository)
    - [getRepositoryFromClass](#714-getrepositoryfromclass)
    - [getScheme](#715-getscheme)
    - [loadMetadata](#716-loadmetadata)
    - [prepareControllers](#717-preparecontrollers)
    - [prepareTests](#718-preparetests)
    - [read](#719-read)
    - [save](#720-save)
- [CheeseController](#8-cheesecontroller)
    - [checkJson](#81-checkjson)
    - [checkLicense](#82-checklicense)
    - [createResponse](#83-createresponse)
    - [getArgs](#84-getargs)
    - [getClientAddress](#85-getclientaddress)
    - [getCookies](#86-getcookies)
    - [getEndpoints](#87-getendpoints)
    - [getHeaders](#88-getheaders)
    - [getHeadersDict](#89-getheadersdict)
    - [getPath](#810-getpath)
    - [getTime](#811-gettime)
    - [modulesToJsonArray](#812-modulestojsonarray)
    - [readArgs](#813-readargs)
    - [readBytes](#814-readbytes)
    - [sendResponse](#815-sendresponse)
    - [serveFile](#816-servefile)
    - [validateJson](#817-validatejson)
- [CheeseServerMulti](#9-cheeseservermulti)
    - [_handle_request_noblock](#91-_handle_request_noblock)
    - [close_request](#92-close_request)
    - [fileno](#93-fileno)
    - [finish_request](#94-finish_request)
    - [get_request](#95-get_request)
    - [handle_error](#96-handle_error)
    - [handle_request](#97-handle_request)
    - [handle_timeout](#98-handle_timeout)
    - [process_request](#99-process_request)
    - [process_request_thread](#910-process_request_thread)
    - [serve_forever](#911-serve_forever)
    - [server_activate](#912-server_activate)
    - [server_bind](#913-server_bind)
    - [service_actions](#914-service_actions)
    - [shutdown](#915-shutdown)
    - [shutdown_request](#916-shutdown_request)
    - [verify_request](#917-verify_request)
- [CheeseServer](#10-cheeseserver)
    - [_handle_request_noblock](#101-_handle_request_noblock)
    - [close_request](#102-close_request)
    - [fileno](#103-fileno)
    - [finish_request](#104-finish_request)
    - [get_request](#105-get_request)
    - [handle_error](#106-handle_error)
    - [handle_request](#107-handle_request)
    - [handle_timeout](#108-handle_timeout)
    - [process_request](#109-process_request)
    - [serve_forever](#1010-serve_forever)
    - [server_activate](#1011-server_activate)
    - [server_bind](#1012-server_bind)
    - [server_close](#1013-server_close)
    - [service_actions](#1014-service_actions)
    - [shutdown](#1015-shutdown)
    - [shutdown_request](#1016-shutdown_request)
    - [verify_request](#1017-verify_request)
- [CheeseHandler](#11-cheesehandler)
    - [address_string](#111-address_string)
    - [date_time_string](#112-date_time_string)
    - [handle](#113-handle)
    - [handle_expect_100](#114-handle_expect_100)
    - [handle_one_request](#115-handle_one_request)
    - [log_date_time_string](#116-log_date_time_string)
    - [log_error](#117-log_error)
    - [log_request](#118-log_request)
    - [parse_request](#119-parse_request)
    - [send_error](#1110-send_error)
    - [send_header](#1111-send_header)
    - [send_response](#1112-send_response)
    - [send_response_only](#1113-send_response_only)
    - [version_string](#1114-version_string)
- [MockManager](#12-mockmanager)
    - [prepareResponse](#121-prepareresponse)
    - [returnMock](#122-returnmock)
- [CheeseModel](#13-cheesemodel)
    - [_CheeseModel__getAttrs](#131-_cheesemodel__getattrs)
    - [convert](#132-convert)
    - [setAttrs](#133-setattrs)
    - [toJson](#134-tojson)
    - [toModel](#135-tomodel)
- [CheeseRepository](#14-cheeserepository)
    - [className](#141-classname)
    - [delete](#142-delete)
    - [exists](#143-exists)
    - [find](#144-find)
    - [findAll](#145-findall)
    - [findBy](#146-findby)
    - [findNewId](#147-findnewid)
    - [findOneBy](#148-findoneby)
    - [findOneWhere](#149-findonewhere)
    - [findUserMethod](#1410-findusermethod)
    - [findUserRepository](#1411-finduserrepository)
    - [findWhere](#1412-findwhere)
    - [getTypeOf](#1413-gettypeof)
    - [getVariables](#1414-getvariables)
    - [model](#1415-model)
    - [query](#1416-query)
    - [queryType](#1417-querytype)
    - [save](#1418-save)
    - [startTesting](#1419-starttesting)
    - [stopTesting](#1420-stoptesting)
    - [update](#1421-update)
- [Security](#15-security)
    - [findRole](#151-findrole)
    - [fitPatern](#152-fitpatern)
    - [handleExceptions](#153-handleexceptions)
    - [prepareString](#154-preparestring)
    - [validate](#155-validate)
- [TestError](#16-testerror)
    - [with_traceback](#161-with_traceback)
- [MockError](#17-mockerror)
    - [with_traceback](#171-with_traceback)
- [BadRequest](#18-badrequest)
    - [with_traceback](#181-with_traceback)
- [Unauthorized](#19-unauthorized)
    - [with_traceback](#191-with_traceback)
- [PaymentRequired](#20-paymentrequired)
    - [with_traceback](#201-with_traceback)
- [Forbidden](#21-forbidden)
    - [with_traceback](#211-with_traceback)
- [NotFound](#22-notfound)
    - [with_traceback](#221-with_traceback)
- [MethodNotAllowed](#23-methodnotallowed)
    - [with_traceback](#231-with_traceback)
- [NotAcceptable](#24-notacceptable)
    - [with_traceback](#241-with_traceback)
- [Conflict](#25-conflict)
    - [with_traceback](#251-with_traceback)
- [ImTeaPot](#26-imteapot)
    - [with_traceback](#261-with_traceback)


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



## 7. Metadata


Class that builds and loads application metadata



### 7.1 cleanInits


Remove all __init__.py files after import



### 7.2 code64


Base64 coding



### 7.3 createInits


Creates __init__.py files for import



### 7.4 decode


Dencodes data with key



### 7.5 decode64


Base64 decoding



### 7.6 encode


Encodes data with key



### 7.7 findMethod


Finds method by endpoint and http method



### 7.8 getKey


Loads secret key



### 7.9 getMethod


Returns repository's object method



### 7.10 getModel


Returns name of repository's model



### 7.11 getObjMethod


Returns object of method from controller or repository



### 7.12 getRawScheme


Returns name of repository's db scheme



### 7.13 getRepository


Returns repository by class name



### 7.14 getRepositoryFromClass


Returns repository object by class name



### 7.15 getScheme


Returns name of repository's db scheme as list



### 7.16 loadMetadata


loads metadata



### 7.17 prepareControllers


Imports controller methods



### 7.18 prepareTests


Imports test methods



### 7.19 read


Reads metadata from file .metadata



### 7.20 save


Saves metadata in file .metadata



## 8. CheeseController


`CheeseController` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 8.1 checkJson


raise BadRequest exception if any key is missing in json

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



### 8.2 checkLicense


checks license



### 8.3 createResponse


create response as tuple

`dict` is response dictionary. Dictionary will be dumped by `json` library
and coded into bytes with `utf-8` coding.

`code` is http status code as `int`

`headers` is dict with headers and its values



### 8.4 getArgs


return arguments from rest request url

`url` is url of request

`decode` if true than decode URL-encoded format



### 8.5 getClientAddress


return client's address

`server` is instance of http handler



### 8.6 getCookies


return cookies as dictionary from request header

`server` is instance of http handler



### 8.7 getEndpoints


return list of endpoints

`url` is url of request

splits url by `/` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 8.8 getHeaders


return requests headers

`server` is instance of http handler



### 8.9 getHeadersDict


return request headers as dict

`server` is instance of http handler



### 8.10 getPath


return path without arguments

`url` is url of request

splits url by `?` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 8.11 getTime


return now time and add argument in seconds

`addTime` is time in `seconds` which will be added to now time. It can be negative value.



### 8.12 modulesToJsonArray


return json array from list of modules

`modules` is list of CheeseModel instances



### 8.13 readArgs


return arguments from body of request as dictionary

`server` is instance of http handler



### 8.14 readBytes


return bytes from post body

`server` is instance of http handler



### 8.15 sendResponse


send response to client

`server` is instance of http handler

`response` is tuple (response object created in `CheeseController.createResponse(...)` method)



### 8.16 serveFile


sends file located in `/web` directory

`server` is instance of http handler

`file` is string path to any file located in `/web` directory

`header` is string of header for http response



### 8.17 validateJson


return true if all keys are in dictionary

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



## 9. CheeseServerMulti

Handle requests in a separate thread.


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

Start a new thread to process the request.


### 9.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 9.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 9.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 9.13 server_bind

Override server_bind to store the server name.


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




## 10. CheeseServer

Handle requests in one thread.


### 10.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 10.2 close_request

Called to clean up an individual request.


### 10.3 fileno

Return socket file number.

Interface required by selector.




### 10.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 10.5 get_request

Get the request and client address from the socket.

May be overridden.




### 10.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 10.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 10.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 10.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 10.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 10.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 10.12 server_bind

Override server_bind to store the server name.


### 10.13 server_close

Called to clean-up the server.

May be overridden.




### 10.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 10.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 10.16 shutdown_request

Called to shutdown and close an individual request.


### 10.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 11. CheeseHandler

### 11.1 address_string

Return the client address.


### 11.2 date_time_string

Return the current date and time formatted for a message header.


### 11.3 handle

Handle multiple requests if necessary.


### 11.4 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 11.5 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 11.6 log_date_time_string

Return the current time formatted for logging.


### 11.7 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 11.8 log_request

Log an accepted request.

This is called by send_response().




### 11.9 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 11.10 send_error

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




### 11.11 send_header

Send a MIME header to the headers buffer.


### 11.12 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 11.13 send_response_only

Send the response header only.


### 11.14 version_string

Return the server software version string.


## 12. MockManager

### 12.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 12.2 returnMock


Mocks repository method



## 13. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 13.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 13.2 convert


converts lists and CheeseModels into json



### 13.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 13.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 13.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



## 14. CheeseRepository


`CheeseRepository` is static class for communication with database



### 14.1 className


return string with name of class



### 14.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 14.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 14.4 find


return one `CheeseModel` by `Primary key`



### 14.5 findAll


return whole table of database as list of `CheeseModel`



### 14.6 findBy


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



### 14.7 findNewId


find new available `Primary key`



### 14.8 findOneBy


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



### 14.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 14.10 findUserMethod


finds name of method from user-made repository



### 14.11 findUserRepository


finds name of user-made repository



### 14.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 14.13 getTypeOf


convert arguments



### 14.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 14.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 14.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 14.17 queryType






### 14.18 save


creates new row in database

`obj` is `CheeseModel` object



### 14.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 14.20 stopTesting


stop repository testing enviroment



### 14.21 update


updates row in database

`obj` is `CheeseModel` object



## 15. Security

### 15.1 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 15.2 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 15.3 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 15.4 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 15.5 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 16. TestError

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. MockError

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. BadRequest

### 18.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 19. Unauthorized

### 19.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 20. PaymentRequired

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. Forbidden

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. NotFound

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. MethodNotAllowed

### 23.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 24. NotAcceptable

### 24.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 25. Conflict

### 25.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 26. ImTeaPot

### 26.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


