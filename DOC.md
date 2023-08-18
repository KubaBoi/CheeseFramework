# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 23.08.18.18.40

Cheese version v(1.4.95)

## Contents

- [Metadata](#1-metadata)
    - [cleanInits](#11-cleaninits)
    - [code64](#12-code64)
    - [createInits](#13-createinits)
    - [decode](#14-decode)
    - [decode64](#15-decode64)
    - [encode](#16-encode)
    - [findMethod](#17-findmethod)
    - [getKey](#18-getkey)
    - [getMethod](#19-getmethod)
    - [getModel](#110-getmodel)
    - [getObjMethod](#111-getobjmethod)
    - [getRawScheme](#112-getrawscheme)
    - [getRepository](#113-getrepository)
    - [getRepositoryFromClass](#114-getrepositoryfromclass)
    - [getScheme](#115-getscheme)
    - [loadMetadata](#116-loadmetadata)
    - [prepareControllers](#117-preparecontrollers)
    - [prepareTests](#118-preparetests)
    - [read](#119-read)
    - [save](#120-save)
- [MockManager](#2-mockmanager)
    - [prepareResponse](#21-prepareresponse)
    - [returnMock](#22-returnmock)
- [BadRequest](#3-badrequest)
    - [with_traceback](#31-with_traceback)
- [Unauthorized](#4-unauthorized)
    - [with_traceback](#41-with_traceback)
- [PaymentRequired](#5-paymentrequired)
    - [with_traceback](#51-with_traceback)
- [Forbidden](#6-forbidden)
    - [with_traceback](#61-with_traceback)
- [NotFound](#7-notfound)
    - [with_traceback](#71-with_traceback)
- [MethodNotAllowed](#8-methodnotallowed)
    - [with_traceback](#81-with_traceback)
- [NotAcceptable](#9-notacceptable)
    - [with_traceback](#91-with_traceback)
- [Conflict](#10-conflict)
    - [with_traceback](#101-with_traceback)
- [ImTeaPot](#11-imteapot)
    - [with_traceback](#111-with_traceback)
- [Security](#12-security)
    - [authenticate](#121-authenticate)
    - [findRole](#122-findrole)
    - [fitPatern](#123-fitpatern)
    - [handleExceptions](#124-handleexceptions)
    - [prepareString](#125-preparestring)
    - [validate](#126-validate)
- [CheeseServerMulti](#13-cheeseservermulti)
    - [_handle_request_noblock](#131-_handle_request_noblock)
    - [close_request](#132-close_request)
    - [fileno](#133-fileno)
    - [finish_request](#134-finish_request)
    - [get_request](#135-get_request)
    - [handle_error](#136-handle_error)
    - [handle_request](#137-handle_request)
    - [handle_timeout](#138-handle_timeout)
    - [process_request](#139-process_request)
    - [process_request_thread](#1310-process_request_thread)
    - [serve_forever](#1311-serve_forever)
    - [server_activate](#1312-server_activate)
    - [server_bind](#1313-server_bind)
    - [service_actions](#1314-service_actions)
    - [shutdown](#1315-shutdown)
    - [shutdown_request](#1316-shutdown_request)
    - [verify_request](#1317-verify_request)
- [CheeseServer](#14-cheeseserver)
    - [_handle_request_noblock](#141-_handle_request_noblock)
    - [close_request](#142-close_request)
    - [fileno](#143-fileno)
    - [finish_request](#144-finish_request)
    - [get_request](#145-get_request)
    - [handle_error](#146-handle_error)
    - [handle_request](#147-handle_request)
    - [handle_timeout](#148-handle_timeout)
    - [process_request](#149-process_request)
    - [serve_forever](#1410-serve_forever)
    - [server_activate](#1411-server_activate)
    - [server_bind](#1412-server_bind)
    - [server_close](#1413-server_close)
    - [service_actions](#1414-service_actions)
    - [shutdown](#1415-shutdown)
    - [shutdown_request](#1416-shutdown_request)
    - [verify_request](#1417-verify_request)
- [CheeseHandler](#15-cheesehandler)
    - [_CheeseHandler__log](#151-_cheesehandler__log)
    - [address_string](#152-address_string)
    - [date_time_string](#153-date_time_string)
    - [do_AUTHHEAD](#154-do_authhead)
    - [do_GET](#155-do_get)
    - [do_POST](#156-do_post)
    - [end_headers](#157-end_headers)
    - [handle](#158-handle)
    - [handle_expect_100](#159-handle_expect_100)
    - [handle_one_request](#1510-handle_one_request)
    - [log_date_time_string](#1511-log_date_time_string)
    - [log_error](#1512-log_error)
    - [log_message](#1513-log_message)
    - [log_request](#1514-log_request)
    - [parse_request](#1515-parse_request)
    - [send_error](#1516-send_error)
    - [send_header](#1517-send_header)
    - [send_response](#1518-send_response)
    - [send_response_only](#1519-send_response_only)
    - [version_string](#1520-version_string)
- [Mock](#16-mock)
    - [catchArgs](#161-catchargs)
    - [whenReturn](#162-whenreturn)
- [Decode](#17-decode)
    - [decode](#171-decode)
- [CheeseModel](#18-cheesemodel)
    - [_CheeseModel__getAttrs](#181-_cheesemodel__getattrs)
    - [convert](#182-convert)
    - [setAttrs](#183-setattrs)
    - [toJson](#184-tojson)
    - [toModel](#185-tomodel)
- [FileHeaders](#19-fileheaders)
    - [getHeader](#191-getheader)
- [CheeseRepository](#20-cheeserepository)
    - [className](#201-classname)
    - [delete](#202-delete)
    - [exists](#203-exists)
    - [find](#204-find)
    - [findAll](#205-findall)
    - [findBy](#206-findby)
    - [findNewId](#207-findnewid)
    - [findOneBy](#208-findoneby)
    - [findOneWhere](#209-findonewhere)
    - [findUserMethod](#2010-findusermethod)
    - [findUserRepository](#2011-finduserrepository)
    - [findWhere](#2012-findwhere)
    - [getTypeOf](#2013-gettypeof)
    - [getVariables](#2014-getvariables)
    - [model](#2015-model)
    - [query](#2016-query)
    - [queryType](#2017-querytype)
    - [save](#2018-save)
    - [startTesting](#2019-starttesting)
    - [stopTesting](#2020-stoptesting)
    - [update](#2021-update)
- [Settings](#21-settings)
    - [loadJson](#211-loadjson)
    - [loadSecrets](#212-loadsecrets)
    - [loadSettings](#213-loadsettings)
    - [saveJson](#214-savejson)
- [InternalServerError](#22-internalservererror)
    - [with_traceback](#221-with_traceback)
- [Stats](#23-stats)
    - [countSpecFiles](#231-countspecfiles)
    - [rowCount](#232-rowcount)
- [ResMan](#24-resman)
    - [convertBytes](#241-convertbytes)
    - [error](#242-error)
    - [getFileName](#243-getfilename)
    - [getParentDir](#244-getparentdir)
    - [getRelativePathFrom](#245-getrelativepathfrom)
    - [joinPath](#246-joinpath)
    - [logs](#247-logs)
    - [metadata](#248-metadata)
    - [removeSlash](#249-removeslash)
    - [resources](#2410-resources)
    - [root](#2411-root)
    - [setPath](#2412-setpath)
    - [src](#2413-src)
    - [tests](#2414-tests)
    - [web](#2415-web)
- [HTTPError](#25-httperror)
    - [with_traceback](#251-with_traceback)
- [Error](#26-error)
    - [handleError](#261-handleerror)
    - [init](#262-init)
    - [logErrorMessage](#263-logerrormessage)
    - [logHttpErrorMessage](#264-loghttperrormessage)
    - [sendCustomError](#265-sendcustomerror)
- [TestError](#27-testerror)
    - [with_traceback](#271-with_traceback)
- [MockError](#28-mockerror)
    - [with_traceback](#281-with_traceback)
- [CheeseController](#29-cheesecontroller)
    - [checkJson](#291-checkjson)
    - [checkLicense](#292-checklicense)
    - [createResponse](#293-createresponse)
    - [getArgs](#294-getargs)
    - [getClientAddress](#295-getclientaddress)
    - [getCookies](#296-getcookies)
    - [getEndpoints](#297-getendpoints)
    - [getHeaders](#298-getheaders)
    - [getHeadersDict](#299-getheadersdict)
    - [getPath](#2910-getpath)
    - [getTime](#2911-gettime)
    - [modulesToJsonArray](#2912-modulestojsonarray)
    - [readArgs](#2913-readargs)
    - [readBytes](#2914-readbytes)
    - [sendResponse](#2915-sendresponse)
    - [serveFile](#2916-servefile)
    - [validateJson](#2917-validatejson)
- [CheeseBurger](#30-cheeseburger)
    - [init](#301-init)
    - [initServer](#302-initserver)
    - [loadLicence](#303-loadlicence)
    - [serveForever](#304-serveforever)


## 1. Metadata


Class that builds and loads application metadata



### 1.1 cleanInits


Remove all __init__.py files after import



### 1.2 code64


Base64 coding



### 1.3 createInits


Creates __init__.py files for import



### 1.4 decode


Dencodes data with key



### 1.5 decode64


Base64 decoding



### 1.6 encode


Encodes data with key



### 1.7 findMethod


Finds method by endpoint and http method



### 1.8 getKey


Loads secret key



### 1.9 getMethod


Returns repository's object method



### 1.10 getModel


Returns name of repository's model



### 1.11 getObjMethod


Returns object of method from controller or repository



### 1.12 getRawScheme


Returns name of repository's db scheme



### 1.13 getRepository


Returns repository by class name



### 1.14 getRepositoryFromClass


Returns repository object by class name



### 1.15 getScheme


Returns name of repository's db scheme as list



### 1.16 loadMetadata


loads metadata



### 1.17 prepareControllers


Imports controller methods



### 1.18 prepareTests


Imports test methods



### 1.19 read


Reads metadata from file .metadata



### 1.20 save


Saves metadata in file .metadata



## 2. MockManager

### 2.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 2.2 returnMock


Mocks repository method



## 3. BadRequest

### 3.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 4. Unauthorized

### 4.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 5. PaymentRequired

### 5.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 6. Forbidden

### 6.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 7. NotFound

### 7.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 8. MethodNotAllowed

### 8.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 9. NotAcceptable

### 9.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 10. Conflict

### 10.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 11. ImTeaPot

### 11.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 12. Security

### 12.1 authenticate


Do the authentication



### 12.2 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 12.3 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 12.4 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 12.5 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 12.6 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 13. CheeseServerMulti

Handle requests in a separate thread.


### 13.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 13.2 close_request

Called to clean up an individual request.


### 13.3 fileno

Return socket file number.

Interface required by selector.




### 13.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 13.5 get_request

Get the request and client address from the socket.

May be overridden.




### 13.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 13.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 13.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 13.9 process_request

Start a new thread to process the request.


### 13.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 13.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 13.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 13.13 server_bind

Override server_bind to store the server name.


### 13.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 13.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 13.16 shutdown_request

Called to shutdown and close an individual request.


### 13.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 14. CheeseServer

Handle requests in one thread.


### 14.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 14.2 close_request

Called to clean up an individual request.


### 14.3 fileno

Return socket file number.

Interface required by selector.




### 14.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 14.5 get_request

Get the request and client address from the socket.

May be overridden.




### 14.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 14.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 14.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 14.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 14.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 14.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 14.12 server_bind

Override server_bind to store the server name.


### 14.13 server_close

Called to clean-up the server.

May be overridden.




### 14.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 14.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 14.16 shutdown_request

Called to shutdown and close an individual request.


### 14.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 15. CheeseHandler


Server handler



### 15.1 _CheeseHandler__log


Server logs



### 15.2 address_string

Return the client address.


### 15.3 date_time_string

Return the current date and time formatted for a message header.


### 15.4 do_AUTHHEAD


Admin auth



### 15.5 do_GET


GET handler



### 15.6 do_POST


GET handler



### 15.7 end_headers


End headers



### 15.8 handle

Handle multiple requests if necessary.


### 15.9 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 15.10 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 15.11 log_date_time_string

Return the current time formatted for logging.


### 15.12 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 15.13 log_message


Disable nativ server logs



### 15.14 log_request

Log an accepted request.

This is called by send_response().




### 15.15 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 15.16 send_error

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




### 15.17 send_header

Send a MIME header to the headers buffer.


### 15.18 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 15.19 send_response_only

Send the response header only.


### 15.20 version_string

Return the server software version string.


## 16. Mock

### 16.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 16.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 17. Decode

### 17.1 decode


Decodes metadata

accesible via:

`python -m Cheese -m <key>`



## 18. CheeseModel


`CheeseModel` is non-static class for storing data from database.



### 18.1 _CheeseModel__getAttrs


returns every attribute in `self` object



### 18.2 convert


converts lists and CheeseModels into json



### 18.3 setAttrs


converts `kwargs` into model such as `toModel()` method

`**attrs` is an kwargs object.
It will be passed to `toModel()` method as `dict`.



### 18.4 toJson


return model data as dictionary

`allData`
- if `True` than in returned json will be
every attribute of object except for `modelName` and `scheme`
- if `False` than in returned json will be
only attributes from `scheme`



### 18.5 toModel


converts `dict` or anything iterable into `model`

`jsn` is an object with data
- if it is NOT `dict` than it need to be iterable and
it needs to be in same order as `scheme` is. (tuple, list...)



## 19. FileHeaders


https://www.geeksforgeeks.org/http-headers-content-type/



### 19.1 getHeader


Finds header for file



## 20. CheeseRepository


`CheeseRepository` is static class for communication with database



### 20.1 className


return string with name of class



### 20.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 20.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 20.4 find


return one `CheeseModel` by `Primary key`



### 20.5 findAll


return whole table of database as list of `CheeseModel`



### 20.6 findBy


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



### 20.7 findNewId


find new available `Primary key`



### 20.8 findOneBy


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



### 20.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 20.10 findUserMethod


finds name of method from user-made repository



### 20.11 findUserRepository


finds name of user-made repository



### 20.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 20.13 getTypeOf


convert arguments



### 20.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 20.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 20.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 20.17 queryType






### 20.18 save


creates new row in database

`obj` is `CheeseModel` object



### 20.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 20.20 stopTesting


stop repository testing enviroment



### 20.21 update


updates row in database

`obj` is `CheeseModel` object



## 21. Settings

### 21.1 loadJson


Loads settings from json file



### 21.2 loadSecrets


Loads app secrets



### 21.3 loadSettings


Loads settings



### 21.4 saveJson


Saves settigns in json file



## 22. InternalServerError

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. Stats


This class shows statistics about project



### 23.1 countSpecFiles


Counts files



### 23.2 rowCount


Count of rows in project.

`*suffixes` is list of file suffixes that should be counted.

Default `suffixes` are `.py`, `.js`, `.html`, `.css`.

`*suffixes` are being add to default one not overwrittes them.

accesible via:

`python -m Cheese -s`



## 24. ResMan


Resource manager

managing resources :D

bum pam pam



### 24.1 convertBytes


convert bytes



### 24.2 error


dir for error sites



### 24.3 getFileName


return name of file from path



### 24.4 getParentDir


return parent directory



### 24.5 getRelativePathFrom


return relative path from



### 24.6 joinPath


joins two paths together



### 24.7 logs


logs



### 24.8 metadata


metadata



### 24.9 removeSlash


remove / from start or end



### 24.10 resources


other resources of project



### 24.11 root


root dir of project



### 24.12 setPath


set root path of project



### 24.13 src


all source codes of project



### 24.14 tests


tests



### 24.15 web


dir from which CheeseFramework is able to serve files (index.html)



## 25. HTTPError

### 25.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 26. Error

### 26.1 handleError


Handles errors during session



### 26.2 init


Inits prefabs of HTTP error codes



### 26.3 logErrorMessage


Logs error into log



### 26.4 logHttpErrorMessage


Logs HTTP errors into log



### 26.5 sendCustomError


Sends error to client



## 27. TestError

### 27.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 28. MockError

### 28.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 29. CheeseController


`CheeseController` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 29.1 checkJson


raise BadRequest exception if any key is missing in json

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



### 29.2 checkLicense


checks license



### 29.3 createResponse


create response as tuple

`dict` is response dictionary. Dictionary will be dumped by `json` library
and coded into bytes with `utf-8` coding.

`code` is http status code as `int`

`headers` is dict with headers and its values



### 29.4 getArgs


return arguments from rest request url

`url` is url of request

`decode` if true than decode URL-encoded format



### 29.5 getClientAddress


return client's address

`server` is instance of http handler



### 29.6 getCookies


return cookies as dictionary from request header

`server` is instance of http handler



### 29.7 getEndpoints


return list of endpoints

`url` is url of request

splits url by `/` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 29.8 getHeaders


return requests headers

`server` is instance of http handler



### 29.9 getHeadersDict


return request headers as dict

`server` is instance of http handler



### 29.10 getPath


return path without arguments

`url` is url of request

splits url by `?` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 29.11 getTime


return now time and add argument in seconds

`addTime` is time in `seconds` which will be added to now time. It can be negative value.



### 29.12 modulesToJsonArray


return json array from list of modules

`modules` is list of CheeseModel instances



### 29.13 readArgs


return arguments from body of request as dictionary

`server` is instance of http handler



### 29.14 readBytes


return bytes from post body

`server` is instance of http handler



### 29.15 sendResponse


send response to client

`server` is instance of http handler

`response` is tuple (response object created in `CheeseController.createResponse(...)` method)



### 29.16 serveFile


sends file located in `/web` directory

`server` is instance of http handler

`file` is string path to any file located in `/web` directory

`header` is string of header for http response



### 29.17 validateJson


return true if all keys are in dictionary

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



## 30. CheeseBurger


Application main class



### 30.1 init


Application initialization



### 30.2 initServer


HTTP server intialization



### 30.3 loadLicence


Loads licence



### 30.4 serveForever


Starts HTTP server



