# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.08.02.16.11

Cheese version v(1.4.35)

## Contents

- [CheeseModel](#1-cheesemodel)
    - [_CheeseModel__getAttrs](#11-_cheesemodel__getattrs)
    - [convert](#12-convert)
    - [setAttrs](#13-setattrs)
    - [toJson](#14-tojson)
    - [toModel](#15-tomodel)
- [TestError](#2-testerror)
    - [with_traceback](#21-with_traceback)
- [MockError](#3-mockerror)
    - [with_traceback](#31-with_traceback)
- [CheeseRepository](#4-cheeserepository)
    - [className](#41-classname)
    - [delete](#42-delete)
    - [find](#43-find)
    - [findAll](#44-findall)
    - [findBy](#45-findby)
    - [findNewId](#46-findnewid)
    - [findOneBy](#47-findoneby)
    - [model](#48-model)
    - [query](#49-query)
    - [queryType](#410-querytype)
    - [save](#411-save)
    - [startTesting](#412-starttesting)
    - [stopTesting](#413-stoptesting)
    - [update](#414-update)
- [BadRequest](#5-badrequest)
    - [with_traceback](#51-with_traceback)
- [Unauthorized](#6-unauthorized)
    - [with_traceback](#61-with_traceback)
- [PaymentRequired](#7-paymentrequired)
    - [with_traceback](#71-with_traceback)
- [Forbidden](#8-forbidden)
    - [with_traceback](#81-with_traceback)
- [NotFound](#9-notfound)
    - [with_traceback](#91-with_traceback)
- [MethodNotAllowed](#10-methodnotallowed)
    - [with_traceback](#101-with_traceback)
- [NotAcceptable](#11-notacceptable)
    - [with_traceback](#111-with_traceback)
- [Conflict](#12-conflict)
    - [with_traceback](#121-with_traceback)
- [ImTeaPot](#13-imteapot)
    - [with_traceback](#131-with_traceback)
- [Stats](#14-stats)
    - [rowCount](#141-rowcount)
- [InternalServerError](#15-internalservererror)
    - [with_traceback](#151-with_traceback)
- [Mock](#16-mock)
    - [catchArgs](#161-catchargs)
    - [whenReturn](#162-whenreturn)
- [CheeseController](#17-cheesecontroller)
    - [checkJson](#171-checkjson)
    - [checkLicense](#172-checklicense)
    - [createResponse](#173-createresponse)
    - [getArgs](#174-getargs)
    - [getClientAddress](#175-getclientaddress)
    - [getCookies](#176-getcookies)
    - [getEndpoints](#177-getendpoints)
    - [getHeaders](#178-getheaders)
    - [getHeadersDict](#179-getheadersdict)
    - [getPath](#1710-getpath)
    - [getTime](#1711-gettime)
    - [modulesToJsonArray](#1712-modulestojsonarray)
    - [readArgs](#1713-readargs)
    - [readBytes](#1714-readbytes)
    - [sendResponse](#1715-sendresponse)
    - [serveFile](#1716-servefile)
    - [validateJson](#1717-validatejson)
- [CheeseServerMulti](#18-cheeseservermulti)
    - [_handle_request_noblock](#181-_handle_request_noblock)
    - [close_request](#182-close_request)
    - [fileno](#183-fileno)
    - [finish_request](#184-finish_request)
    - [get_request](#185-get_request)
    - [handle_error](#186-handle_error)
    - [handle_request](#187-handle_request)
    - [handle_timeout](#188-handle_timeout)
    - [process_request](#189-process_request)
    - [process_request_thread](#1810-process_request_thread)
    - [serve_forever](#1811-serve_forever)
    - [server_activate](#1812-server_activate)
    - [server_bind](#1813-server_bind)
    - [service_actions](#1814-service_actions)
    - [shutdown](#1815-shutdown)
    - [shutdown_request](#1816-shutdown_request)
    - [verify_request](#1817-verify_request)
- [CheeseServer](#19-cheeseserver)
    - [_handle_request_noblock](#191-_handle_request_noblock)
    - [close_request](#192-close_request)
    - [fileno](#193-fileno)
    - [finish_request](#194-finish_request)
    - [get_request](#195-get_request)
    - [handle_error](#196-handle_error)
    - [handle_request](#197-handle_request)
    - [handle_timeout](#198-handle_timeout)
    - [process_request](#199-process_request)
    - [serve_forever](#1910-serve_forever)
    - [server_activate](#1911-server_activate)
    - [server_bind](#1912-server_bind)
    - [server_close](#1913-server_close)
    - [service_actions](#1914-service_actions)
    - [shutdown](#1915-shutdown)
    - [shutdown_request](#1916-shutdown_request)
    - [verify_request](#1917-verify_request)
- [CheeseHandler](#20-cheesehandler)
    - [address_string](#201-address_string)
    - [date_time_string](#202-date_time_string)
    - [handle](#203-handle)
    - [handle_expect_100](#204-handle_expect_100)
    - [handle_one_request](#205-handle_one_request)
    - [log_date_time_string](#206-log_date_time_string)
    - [log_error](#207-log_error)
    - [log_request](#208-log_request)
    - [parse_request](#209-parse_request)
    - [send_error](#2010-send_error)
    - [send_header](#2011-send_header)
    - [send_response](#2012-send_response)
    - [send_response_only](#2013-send_response_only)
    - [version_string](#2014-version_string)
- [HTTPError](#21-httperror)
    - [with_traceback](#211-with_traceback)
- [MockManager](#22-mockmanager)
    - [prepareResponse](#221-prepareresponse)
    - [returnMock](#222-returnmock)


## 1. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 1.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 1.2 convert


converts lists and CheeseModels into json



### 1.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 1.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 1.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



## 2. TestError

### 2.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 3. MockError

### 3.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 4. CheeseRepository


```CheeseRepository``` is static class for communication with database



### 4.1 className


return string with name of class



### 4.2 delete


deletes row from database

```obj``` is ```CheeseModel``` object



### 4.3 find


return one ```CheeseModel``` by ```Primary key```



### 4.4 findAll


return whole table of database as list of ```CheeseModel```



### 4.5 findBy


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



### 4.6 findNewId


find new available ```Primary key```



### 4.7 findOneBy


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



### 4.8 model


return ```CheeseModel``` with ```Primary key```, ```modelName``` and ```scheme```



### 4.9 query


Access point to database. Returns database output.

```userRepository``` is string name of used repository

```**kwargs``` is ```dict``` of arguments for SQL request



### 4.10 queryType






### 4.11 save


creates new row in database

```obj``` is ```CheeseModel``` object



### 4.12 startTesting


sets repository testing enviroment

```mockManager``` is instance of ```MockManager``` used by testing



### 4.13 stopTesting


stop repository testing enviroment



### 4.14 update


updates row in database

```obj``` is ```CheeseModel``` object



## 5. BadRequest

### 5.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 6. Unauthorized

### 6.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 7. PaymentRequired

### 7.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 8. Forbidden

### 8.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 9. NotFound

### 9.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 10. MethodNotAllowed

### 10.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 11. NotAcceptable

### 11.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 12. Conflict

### 12.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 13. ImTeaPot

### 13.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 14. Stats


This class shows statistics about project



### 14.1 rowCount


Count of rows in project.

```*suffixes``` is list of file suffixes that should be counted.

Default ```suffixes``` are ```.py```, ```.js```, ```.html```, ```.css```.

```*suffixes``` are being add to default one not overwrittes them.



## 15. InternalServerError

### 15.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 16. Mock

### 16.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 16.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 17. CheeseController


```CheeseController``` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 17.1 checkJson


raise BadRequest exception if any key is missing in json

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



### 17.2 checkLicense


checks license



### 17.3 createResponse


create response as tuple

```dict``` is response dictionary. Dictionary will be dumped by ```json``` library
and coded into bytes with ```utf-8``` coding.

```code``` is http status code as ```int```

```headers``` is dict with headers and its values



### 17.4 getArgs


return arguments from rest request url

```url``` is url of request

```decode``` if true than decode URL-encoded format



### 17.5 getClientAddress


return client's address

```server``` is instance of http handler



### 17.6 getCookies


return cookies as dictionary from request header

```server``` is instance of http handler



### 17.7 getEndpoints


return list of endpoints

```url``` is url of request

splits url by ```/``` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 17.8 getHeaders


return requests headers

```server``` is instance of http handler



### 17.9 getHeadersDict


return request headers as dict

```server``` is instance of http handler



### 17.10 getPath


return path without arguments

```url``` is url of request

splits url by ```?``` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 17.11 getTime


return now time and add argument in seconds

```addTime``` is time in ```seconds``` which will be added to now time. It can be negative value.



### 17.12 modulesToJsonArray


return json array from list of modules

```modules``` is list of CheeseModel instances



### 17.13 readArgs


return arguments from body of request as dictionary

```server``` is instance of http handler



### 17.14 readBytes


return bytes from post body

```server``` is instance of http handler



### 17.15 sendResponse


send response to client

```server``` is instance of http handler

```response``` is tuple (response object created in ```CheeseController.createResponse(...)``` method)



### 17.16 serveFile


sends file located in ```/web``` directory

```server``` is instance of http handler

```file``` is string path to any file located in ```/web``` directory

```header``` is string of header for http response



### 17.17 validateJson


return true if all keys are in dictionary

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



## 18. CheeseServerMulti

Handle requests in a separate thread.


### 18.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 18.2 close_request

Called to clean up an individual request.


### 18.3 fileno

Return socket file number.

Interface required by selector.




### 18.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 18.5 get_request

Get the request and client address from the socket.

May be overridden.




### 18.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 18.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 18.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 18.9 process_request

Start a new thread to process the request.


### 18.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 18.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 18.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 18.13 server_bind

Override server_bind to store the server name.


### 18.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 18.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 18.16 shutdown_request

Called to shutdown and close an individual request.


### 18.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 19. CheeseServer

Handle requests in one thread.


### 19.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 19.2 close_request

Called to clean up an individual request.


### 19.3 fileno

Return socket file number.

Interface required by selector.




### 19.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 19.5 get_request

Get the request and client address from the socket.

May be overridden.




### 19.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 19.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 19.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 19.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 19.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 19.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 19.12 server_bind

Override server_bind to store the server name.


### 19.13 server_close

Called to clean-up the server.

May be overridden.




### 19.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 19.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 19.16 shutdown_request

Called to shutdown and close an individual request.


### 19.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 20. CheeseHandler

### 20.1 address_string

Return the client address.


### 20.2 date_time_string

Return the current date and time formatted for a message header.


### 20.3 handle

Handle multiple requests if necessary.


### 20.4 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 20.5 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 20.6 log_date_time_string

Return the current time formatted for logging.


### 20.7 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 20.8 log_request

Log an accepted request.

This is called by send_response().




### 20.9 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 20.10 send_error

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




### 20.11 send_header

Send a MIME header to the headers buffer.


### 20.12 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 20.13 send_response_only

Send the response header only.


### 20.14 version_string

Return the server software version string.


## 21. HTTPError

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. MockManager

### 22.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 22.2 returnMock


Mocks repository method



