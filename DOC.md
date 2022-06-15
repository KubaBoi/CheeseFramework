# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.06.15.18.28

Cheese version v(1.3.99)

## Contents

- [CheeseModel](#1-cheesemodel)
    - [_CheeseModel__getAttrs](#11-_cheesemodel__getattrs)
    - [convert](#12-convert)
    - [setAttrs](#13-setattrs)
    - [toJson](#14-tojson)
    - [toModel](#15-tomodel)
- [Stats](#2-stats)
    - [rowCount](#21-rowcount)
- [MockManager](#3-mockmanager)
    - [prepareResponse](#31-prepareresponse)
    - [returnMock](#32-returnmock)
- [CheeseController](#4-cheesecontroller)
    - [checkJson](#41-checkjson)
    - [checkLicense](#42-checklicense)
    - [createResponse](#43-createresponse)
    - [getArgs](#44-getargs)
    - [getClientAddress](#45-getclientaddress)
    - [getCookies](#46-getcookies)
    - [getEndpoints](#47-getendpoints)
    - [getPath](#48-getpath)
    - [getTime](#49-gettime)
    - [modulesToJsonArray](#410-modulestojsonarray)
    - [readArgs](#411-readargs)
    - [readBytes](#412-readbytes)
    - [sendResponse](#413-sendresponse)
    - [serveFile](#414-servefile)
    - [validateJson](#415-validatejson)
- [HTTPError](#5-httperror)
    - [with_traceback](#51-with_traceback)
- [InternalServerError](#6-internalservererror)
    - [with_traceback](#61-with_traceback)
- [Mock](#7-mock)
    - [catchArgs](#71-catchargs)
    - [whenReturn](#72-whenreturn)
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
- [TestError](#12-testerror)
    - [with_traceback](#121-with_traceback)
- [MockError](#13-mockerror)
    - [with_traceback](#131-with_traceback)
- [BadRequest](#14-badrequest)
    - [with_traceback](#141-with_traceback)
- [Unauthorized](#15-unauthorized)
    - [with_traceback](#151-with_traceback)
- [PaymentRequired](#16-paymentrequired)
    - [with_traceback](#161-with_traceback)
- [Forbidden](#17-forbidden)
    - [with_traceback](#171-with_traceback)
- [NotFound](#18-notfound)
    - [with_traceback](#181-with_traceback)
- [MethodNotAllowed](#19-methodnotallowed)
    - [with_traceback](#191-with_traceback)
- [NotAcceptable](#20-notacceptable)
    - [with_traceback](#201-with_traceback)
- [Conflict](#21-conflict)
    - [with_traceback](#211-with_traceback)
- [ImTeaPot](#22-imteapot)
    - [with_traceback](#221-with_traceback)


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



## 2. Stats


This class shows statistics about project



### 2.1 rowCount


Count of rows in project.

```*suffixes``` is list of file suffixes that should be counted.

Default ```suffixes``` are ```.py```, ```.js```, ```.html```, ```.css```.

```*suffixes``` are being add to default one not overwrittes them.



## 3. MockManager

### 3.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 3.2 returnMock


Mocks repository method



## 4. CheeseController


```CheeseController``` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 4.1 checkJson


raise BadRequest exception if any key is missing in json

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



### 4.2 checkLicense


checks license



### 4.3 createResponse


create response as tuple

```dict``` is response dictionary. Dictionary will be dumped by ```json``` library
and coded into bytes with ```utf-8``` coding.

```code``` is http status code as ```int```



### 4.4 getArgs


return arguments from rest request url

```url``` is url of request

```decode``` if true than decode URL-encoded format



### 4.5 getClientAddress


return client's address

```server``` is instance of http handler



### 4.6 getCookies


return cookies as dictionary from request header

```server``` is instance of http handler



### 4.7 getEndpoints


return list of endpoints

```url``` is url of request

splits url by ```/``` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 4.8 getPath


return path without arguments

```url``` is url of request

splits url by ```?``` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 4.9 getTime


return now time and add argument in seconds

```addTime``` is time in ```seconds``` which will be added to now time. It can be negative value.



### 4.10 modulesToJsonArray


return json array from list of modules

```modules``` is list of CheeseModel instances



### 4.11 readArgs


return arguments from body of request as dictionary

```server``` is instance of http handler



### 4.12 readBytes


return bytes from post body

```server``` is instance of http handler



### 4.13 sendResponse


send response to client

```server``` is instance of http handler

```response``` is tuple (response object created in ```CheeseController.createResponse(...)``` method)



### 4.14 serveFile


sends file located in ```/web``` directory

```server``` is instance of http handler

```file``` is string path to any file located in ```/web``` directory

```header``` is string of header for http response



### 4.15 validateJson


return true if all keys are in dictionary

```keys``` is list of keys that should be in ```dict```

```dict``` is tested dictionary



## 5. HTTPError

### 5.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 6. InternalServerError

### 6.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 7. Mock

### 7.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 7.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



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


## 12. TestError

### 12.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 13. MockError

### 13.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 14. BadRequest

### 14.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 15. Unauthorized

### 15.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 16. PaymentRequired

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. Forbidden

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. NotFound

### 18.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 19. MethodNotAllowed

### 19.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 20. NotAcceptable

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. Conflict

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. ImTeaPot

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


