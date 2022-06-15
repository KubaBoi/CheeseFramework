# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bang:This documentantion is automaticaly generated from code documentation.

## Contents

- [Stats](#1-stats)
    - [rowCount](#11-rowcount)
- [MockManager](#2-mockmanager)
    - [prepareResponse](#21-prepareresponse)
    - [returnMock](#22-returnmock)
- [CheeseController](#3-cheesecontroller)
    - [checkJson](#31-checkjson)
    - [checkLicense](#32-checklicense)
    - [createResponse](#33-createresponse)
    - [getArgs](#34-getargs)
    - [getClientAddress](#35-getclientaddress)
    - [getCookies](#36-getcookies)
    - [getEndpoints](#37-getendpoints)
    - [getPath](#38-getpath)
    - [getTime](#39-gettime)
    - [modulesToJsonArray](#310-modulestojsonarray)
    - [readArgs](#311-readargs)
    - [readBytes](#312-readbytes)
    - [sendResponse](#313-sendresponse)
    - [serveFile](#314-servefile)
    - [validateJson](#315-validatejson)
- [Mock](#4-mock)
    - [catchArgs](#41-catchargs)
    - [whenReturn](#42-whenreturn)
- [CheeseModel](#5-cheesemodel)
    - [_CheeseModel__getAttrs](#51-_cheesemodel__getattrs)
    - [convert](#52-convert)
    - [setAttrs](#53-setattrs)
    - [toJson](#54-tojson)
    - [toModel](#55-tomodel)
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
- [CheeseRepository](#20-cheeserepository)
    - [className](#201-classname)
    - [delete](#202-delete)
    - [find](#203-find)
    - [findAll](#204-findall)
    - [findBy](#205-findby)
    - [findNewId](#206-findnewid)
    - [findOneBy](#207-findoneby)
    - [model](#208-model)
    - [query](#209-query)
    - [queryType](#2010-querytype)
    - [save](#2011-save)
    - [startTesting](#2012-starttesting)
    - [stopTesting](#2013-stoptesting)
    - [update](#2014-update)
- [InternalServerError](#21-internalservererror)
    - [with_traceback](#211-with_traceback)
- [HTTPError](#22-httperror)
    - [with_traceback](#221-with_traceback)


## 1. Stats


This class shows statistics about project



### 1.1 rowCount


Count of rows in project.

```*suffixes``` is list of file suffixes that should be counted.

Default ```suffixes``` are ```.py```, ```.js```, ```.html```, ```.css```.

```*suffixes``` are being add to default one not overwrittes them.



## 2. MockManager

### 2.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 2.2 returnMock


Mocks repository method



## 3. CheeseController


```CheeseController``` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 3.1 checkJson


raise BadRequest exception if any key is missing in json

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



### 3.2 checkLicense


checks license



### 3.3 createResponse


create response as tuple

```dict``` is response dictionary. Dictionary will be dumped by ```json``` library
and coded into bytes with ```utf-8``` coding.

```code``` is http status code as ```int```



### 3.4 getArgs


return arguments from rest request url

```url``` is url of request

```decode``` if true than decode URL-encoded format



### 3.5 getClientAddress


return client's address

```server``` is instance of http handler



### 3.6 getCookies


return cookies as dictionary from request header

```server``` is instance of http handler



### 3.7 getEndpoints


return list of endpoints

```url``` is url of request

splits url by ```/``` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 3.8 getPath


return path without arguments

```url``` is url of request

splits url by ```?``` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 3.9 getTime


return now time and add argument in seconds

```addTime``` is time in ```seconds``` which will be added to now time. It can be negative value.



### 3.10 modulesToJsonArray


return json array from list of modules

```modules``` is list of CheeseModel instances



### 3.11 readArgs


return arguments from body of request as dictionary

```server``` is instance of http handler



### 3.12 readBytes


return bytes from post body

```server``` is instance of http handler



### 3.13 sendResponse


send response to client

```server``` is instance of http handler

```response``` is tuple (response object created in ```CheeseController.createResponse(...)``` method)



### 3.14 serveFile


sends file located in ```/web``` directory

```server``` is instance of http handler

```file``` is string path to any file located in ```/web``` directory

```header``` is string of header for http response



### 3.15 validateJson


return true if all keys are in dictionary

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



## 4. Mock

### 4.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 4.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 5. CheeseModel


```CheeseModel``` is non-static class for storing data from database.



### 5.1 _CheeseModel__getAttrs


returns every attribute in ```self``` object



### 5.2 convert


converts lists and CheeseModels into json



### 5.3 setAttrs


converts ```kwargs``` into model such as ```toModel()``` method

```**attrs``` is an kwargs object.
It will be passed to ```toModel()``` method as ```dict```.



### 5.4 toJson


return model data as dictionary

```allData```
- if ```True``` than in returned json will be
every attribute of object except for ```modelName``` and ```scheme```
- if ```False``` than in returned json will be
only attributes from ```scheme```



### 5.5 toModel


converts ```dict``` or anything iterable into ```model```

```jsn``` is an object with data
- if it is NOT ```dict``` than it need to be iterable and
it needs to be in same order as ```scheme``` is. (tuple, list...)



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


## 20. CheeseRepository


```CheeseRepository``` is static class for communication with database



### 20.1 className


return string with name of class



### 20.2 delete


deletes row from database

```obj``` is ```CheeseModel``` object



### 20.3 find


return one ```CheeseModel``` by ```Primary key```



### 20.4 findAll


return whole table of database as list of ```CheeseModel```



### 20.5 findBy


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



### 20.6 findNewId


find new available ```Primary key```



### 20.7 findOneBy


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



### 20.8 model


return ```CheeseModel``` with ```Primary key```, ```modelName``` and ```scheme```



### 20.9 query


Access point to database. Returns database output.

```userRepository``` is string name of used repository

```**kwargs``` is ```dict``` of arguments for SQL request



### 20.10 queryType






### 20.11 save


creates new row in database

```obj``` is ```CheeseModel``` object



### 20.12 startTesting


sets repository testing enviroment

```mockManager``` is instance of ```MockManager``` used by testing



### 20.13 stopTesting


stop repository testing enviroment



### 20.14 update


updates row in database

```obj``` is ```CheeseModel``` object



## 21. InternalServerError

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. HTTPError

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


