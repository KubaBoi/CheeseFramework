# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.09.15.00.52

Cheese version v(1.4.89)

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
- [CheeseServerMulti](#6-cheeseservermulti)
    - [_handle_request_noblock](#61-_handle_request_noblock)
    - [close_request](#62-close_request)
    - [fileno](#63-fileno)
    - [finish_request](#64-finish_request)
    - [get_request](#65-get_request)
    - [handle_error](#66-handle_error)
    - [handle_request](#67-handle_request)
    - [handle_timeout](#68-handle_timeout)
    - [process_request](#69-process_request)
    - [process_request_thread](#610-process_request_thread)
    - [serve_forever](#611-serve_forever)
    - [server_activate](#612-server_activate)
    - [server_bind](#613-server_bind)
    - [service_actions](#614-service_actions)
    - [shutdown](#615-shutdown)
    - [shutdown_request](#616-shutdown_request)
    - [verify_request](#617-verify_request)
- [CheeseServer](#7-cheeseserver)
    - [_handle_request_noblock](#71-_handle_request_noblock)
    - [close_request](#72-close_request)
    - [fileno](#73-fileno)
    - [finish_request](#74-finish_request)
    - [get_request](#75-get_request)
    - [handle_error](#76-handle_error)
    - [handle_request](#77-handle_request)
    - [handle_timeout](#78-handle_timeout)
    - [process_request](#79-process_request)
    - [serve_forever](#710-serve_forever)
    - [server_activate](#711-server_activate)
    - [server_bind](#712-server_bind)
    - [server_close](#713-server_close)
    - [service_actions](#714-service_actions)
    - [shutdown](#715-shutdown)
    - [shutdown_request](#716-shutdown_request)
    - [verify_request](#717-verify_request)
- [CheeseHandler](#8-cheesehandler)
    - [address_string](#81-address_string)
    - [date_time_string](#82-date_time_string)
    - [handle](#83-handle)
    - [handle_expect_100](#84-handle_expect_100)
    - [handle_one_request](#85-handle_one_request)
    - [log_date_time_string](#86-log_date_time_string)
    - [log_error](#87-log_error)
    - [log_request](#88-log_request)
    - [parse_request](#89-parse_request)
    - [send_error](#810-send_error)
    - [send_header](#811-send_header)
    - [send_response](#812-send_response)
    - [send_response_only](#813-send_response_only)
    - [version_string](#814-version_string)
- [MockManager](#9-mockmanager)
    - [prepareResponse](#91-prepareresponse)
    - [returnMock](#92-returnmock)
- [CheeseModel](#10-cheesemodel)
    - [_CheeseModel__getAttrs](#101-_cheesemodel__getattrs)
    - [convert](#102-convert)
    - [setAttrs](#103-setattrs)
    - [toJson](#104-tojson)
    - [toModel](#105-tomodel)
- [CheeseRepository](#11-cheeserepository)
    - [className](#111-classname)
    - [delete](#112-delete)
    - [exists](#113-exists)
    - [find](#114-find)
    - [findAll](#115-findall)
    - [findBy](#116-findby)
    - [findNewId](#117-findnewid)
    - [findOneBy](#118-findoneby)
    - [findOneWhere](#119-findonewhere)
    - [findUserMethod](#1110-findusermethod)
    - [findUserRepository](#1111-finduserrepository)
    - [findWhere](#1112-findwhere)
    - [getTypeOf](#1113-gettypeof)
    - [getVariables](#1114-getvariables)
    - [model](#1115-model)
    - [query](#1116-query)
    - [queryType](#1117-querytype)
    - [save](#1118-save)
    - [startTesting](#1119-starttesting)
    - [stopTesting](#1120-stoptesting)
    - [update](#1121-update)
- [Security](#12-security)
    - [findRole](#121-findrole)
    - [fitPatern](#122-fitpatern)
    - [handleExceptions](#123-handleexceptions)
    - [prepareString](#124-preparestring)
    - [validate](#125-validate)
- [TestError](#13-testerror)
    - [with_traceback](#131-with_traceback)
- [MockError](#14-mockerror)
    - [with_traceback](#141-with_traceback)
- [BadRequest](#15-badrequest)
    - [with_traceback](#151-with_traceback)
- [Unauthorized](#16-unauthorized)
    - [with_traceback](#161-with_traceback)
- [PaymentRequired](#17-paymentrequired)
    - [with_traceback](#171-with_traceback)
- [Forbidden](#18-forbidden)
    - [with_traceback](#181-with_traceback)
- [NotFound](#19-notfound)
    - [with_traceback](#191-with_traceback)
- [MethodNotAllowed](#20-methodnotallowed)
    - [with_traceback](#201-with_traceback)
- [NotAcceptable](#21-notacceptable)
    - [with_traceback](#211-with_traceback)
- [Conflict](#22-conflict)
    - [with_traceback](#221-with_traceback)
- [ImTeaPot](#23-imteapot)
    - [with_traceback](#231-with_traceback)


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


`CheeseController` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 5.1 checkJson


raise BadRequest exception if any key is missing in json

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



### 5.2 checkLicense


checks license



### 5.3 createResponse


create response as tuple

`dict` is response dictionary. Dictionary will be dumped by `json` library
and coded into bytes with `utf-8` coding.

`code` is http status code as `int`

`headers` is dict with headers and its values



### 5.4 getArgs


return arguments from rest request url

`url` is url of request

`decode` if true than decode URL-encoded format



### 5.5 getClientAddress


return client's address

`server` is instance of http handler



### 5.6 getCookies


return cookies as dictionary from request header

`server` is instance of http handler



### 5.7 getEndpoints


return list of endpoints

`url` is url of request

splits url by `/` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 5.8 getHeaders


return requests headers

`server` is instance of http handler



### 5.9 getHeadersDict


return request headers as dict

`server` is instance of http handler



### 5.10 getPath


return path without arguments

`url` is url of request

splits url by `?` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 5.11 getTime


return now time and add argument in seconds

`addTime` is time in `seconds` which will be added to now time. It can be negative value.



### 5.12 modulesToJsonArray


return json array from list of modules

`modules` is list of CheeseModel instances



### 5.13 readArgs


return arguments from body of request as dictionary

`server` is instance of http handler



### 5.14 readBytes


return bytes from post body

`server` is instance of http handler



### 5.15 sendResponse


send response to client

`server` is instance of http handler

`response` is tuple (response object created in `CheeseController.createResponse(...)` method)



### 5.16 serveFile


sends file located in `/web` directory

`server` is instance of http handler

`file` is string path to any file located in `/web` directory

`header` is string of header for http response



### 5.17 validateJson


return true if all keys are in dictionary

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



## 6. CheeseServerMulti

Handle requests in a separate thread.


### 6.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 6.2 close_request

Called to clean up an individual request.


### 6.3 fileno

Return socket file number.

Interface required by selector.




### 6.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 6.5 get_request

Get the request and client address from the socket.

May be overridden.




### 6.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 6.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 6.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 6.9 process_request

Start a new thread to process the request.


### 6.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 6.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 6.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 6.13 server_bind

Override server_bind to store the server name.


### 6.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 6.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 6.16 shutdown_request

Called to shutdown and close an individual request.


### 6.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 7. CheeseServer

Handle requests in one thread.


### 7.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 7.2 close_request

Called to clean up an individual request.


### 7.3 fileno

Return socket file number.

Interface required by selector.




### 7.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 7.5 get_request

Get the request and client address from the socket.

May be overridden.




### 7.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 7.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 7.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 7.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 7.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 7.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 7.12 server_bind

Override server_bind to store the server name.


### 7.13 server_close

Called to clean-up the server.

May be overridden.




### 7.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 7.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 7.16 shutdown_request

Called to shutdown and close an individual request.


### 7.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 8. CheeseHandler

### 8.1 address_string

Return the client address.


### 8.2 date_time_string

Return the current date and time formatted for a message header.


### 8.3 handle

Handle multiple requests if necessary.


### 8.4 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 8.5 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 8.6 log_date_time_string

Return the current time formatted for logging.


### 8.7 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 8.8 log_request

Log an accepted request.

This is called by send_response().




### 8.9 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 8.10 send_error

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




### 8.11 send_header

Send a MIME header to the headers buffer.


### 8.12 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 8.13 send_response_only

Send the response header only.


### 8.14 version_string

Return the server software version string.


## 9. MockManager

### 9.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 9.2 returnMock


Mocks repository method



## 10. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 10.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 10.2 convert


converts lists and CheeseModels into json



### 10.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 10.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 10.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



## 11. CheeseRepository


`CheeseRepository` is static class for communication with database



### 11.1 className


return string with name of class



### 11.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 11.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 11.4 find


return one `CheeseModel` by `Primary key`



### 11.5 findAll


return whole table of database as list of `CheeseModel`



### 11.6 findBy


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



### 11.7 findNewId


find new available `Primary key`



### 11.8 findOneBy


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



### 11.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 11.10 findUserMethod


finds name of method from user-made repository



### 11.11 findUserRepository


finds name of user-made repository



### 11.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 11.13 getTypeOf


convert arguments



### 11.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 11.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 11.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 11.17 queryType






### 11.18 save


creates new row in database

`obj` is `CheeseModel` object



### 11.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 11.20 stopTesting


stop repository testing enviroment



### 11.21 update


updates row in database

`obj` is `CheeseModel` object



## 12. Security

### 12.1 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 12.2 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 12.3 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 12.4 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 12.5 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 13. TestError

### 13.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 14. MockError

### 14.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 15. BadRequest

### 15.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 16. Unauthorized

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. PaymentRequired

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. Forbidden

### 18.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 19. NotFound

### 19.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 20. MethodNotAllowed

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. NotAcceptable

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. Conflict

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. ImTeaPot

### 23.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


