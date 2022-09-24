# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 22.09.24.19.06

Cheese version v(1.4.91)

## Contents

- [InternalServerError](#1-internalservererror)
    - [with_traceback](#11-with_traceback)
- [Stats](#2-stats)
    - [countSpecFiles](#21-countspecfiles)
    - [rowCount](#22-rowcount)
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
    - [loadJson](#61-loadjson)
    - [loadSecrets](#62-loadsecrets)
    - [loadSettings](#63-loadsettings)
    - [saveJson](#64-savejson)
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
- [CheeseBurger](#9-cheeseburger)
    - [init](#91-init)
    - [initServer](#92-initserver)
    - [loadLicence](#93-loadlicence)
    - [serveForever](#94-serveforever)
- [CheeseServerMulti](#10-cheeseservermulti)
    - [_handle_request_noblock](#101-_handle_request_noblock)
    - [close_request](#102-close_request)
    - [fileno](#103-fileno)
    - [finish_request](#104-finish_request)
    - [get_request](#105-get_request)
    - [handle_error](#106-handle_error)
    - [handle_request](#107-handle_request)
    - [handle_timeout](#108-handle_timeout)
    - [process_request](#109-process_request)
    - [process_request_thread](#1010-process_request_thread)
    - [serve_forever](#1011-serve_forever)
    - [server_activate](#1012-server_activate)
    - [server_bind](#1013-server_bind)
    - [service_actions](#1014-service_actions)
    - [shutdown](#1015-shutdown)
    - [shutdown_request](#1016-shutdown_request)
    - [verify_request](#1017-verify_request)
- [CheeseServer](#11-cheeseserver)
    - [_handle_request_noblock](#111-_handle_request_noblock)
    - [close_request](#112-close_request)
    - [fileno](#113-fileno)
    - [finish_request](#114-finish_request)
    - [get_request](#115-get_request)
    - [handle_error](#116-handle_error)
    - [handle_request](#117-handle_request)
    - [handle_timeout](#118-handle_timeout)
    - [process_request](#119-process_request)
    - [serve_forever](#1110-serve_forever)
    - [server_activate](#1111-server_activate)
    - [server_bind](#1112-server_bind)
    - [server_close](#1113-server_close)
    - [service_actions](#1114-service_actions)
    - [shutdown](#1115-shutdown)
    - [shutdown_request](#1116-shutdown_request)
    - [verify_request](#1117-verify_request)
- [CheeseHandler](#12-cheesehandler)
    - [_CheeseHandler__log](#121-_cheesehandler__log)
    - [address_string](#122-address_string)
    - [date_time_string](#123-date_time_string)
    - [do_AUTHHEAD](#124-do_authhead)
    - [do_GET](#125-do_get)
    - [do_POST](#126-do_post)
    - [end_headers](#127-end_headers)
    - [handle](#128-handle)
    - [handle_expect_100](#129-handle_expect_100)
    - [handle_one_request](#1210-handle_one_request)
    - [log_date_time_string](#1211-log_date_time_string)
    - [log_error](#1212-log_error)
    - [log_message](#1213-log_message)
    - [log_request](#1214-log_request)
    - [parse_request](#1215-parse_request)
    - [send_error](#1216-send_error)
    - [send_header](#1217-send_header)
    - [send_response](#1218-send_response)
    - [send_response_only](#1219-send_response_only)
    - [version_string](#1220-version_string)
- [MockManager](#13-mockmanager)
    - [prepareResponse](#131-prepareresponse)
    - [returnMock](#132-returnmock)
- [Decode](#14-decode)
    - [decode](#141-decode)
- [CheeseModel](#15-cheesemodel)
    - [_CheeseModel__getAttrs](#151-_cheesemodel__getattrs)
    - [convert](#152-convert)
    - [setAttrs](#153-setattrs)
    - [toJson](#154-tojson)
    - [toModel](#155-tomodel)
- [FileHeaders](#16-fileheaders)
    - [getHeader](#161-getheader)
- [CheeseRepository](#17-cheeserepository)
    - [className](#171-classname)
    - [delete](#172-delete)
    - [exists](#173-exists)
    - [find](#174-find)
    - [findAll](#175-findall)
    - [findBy](#176-findby)
    - [findNewId](#177-findnewid)
    - [findOneBy](#178-findoneby)
    - [findOneWhere](#179-findonewhere)
    - [findUserMethod](#1710-findusermethod)
    - [findUserRepository](#1711-finduserrepository)
    - [findWhere](#1712-findwhere)
    - [getTypeOf](#1713-gettypeof)
    - [getVariables](#1714-getvariables)
    - [model](#1715-model)
    - [query](#1716-query)
    - [queryType](#1717-querytype)
    - [save](#1718-save)
    - [startTesting](#1719-starttesting)
    - [stopTesting](#1720-stoptesting)
    - [update](#1721-update)
- [Security](#18-security)
    - [authenticate](#181-authenticate)
    - [findRole](#182-findrole)
    - [fitPatern](#183-fitpatern)
    - [handleExceptions](#184-handleexceptions)
    - [prepareString](#185-preparestring)
    - [validate](#186-validate)
- [Error](#19-error)
    - [handleError](#191-handleerror)
    - [init](#192-init)
    - [logErrorMessage](#193-logerrormessage)
    - [logHttpErrorMessage](#194-loghttperrormessage)
    - [sendCustomError](#195-sendcustomerror)
- [TestError](#20-testerror)
    - [with_traceback](#201-with_traceback)
- [MockError](#21-mockerror)
    - [with_traceback](#211-with_traceback)
- [BadRequest](#22-badrequest)
    - [with_traceback](#221-with_traceback)
- [Unauthorized](#23-unauthorized)
    - [with_traceback](#231-with_traceback)
- [PaymentRequired](#24-paymentrequired)
    - [with_traceback](#241-with_traceback)
- [Forbidden](#25-forbidden)
    - [with_traceback](#251-with_traceback)
- [NotFound](#26-notfound)
    - [with_traceback](#261-with_traceback)
- [MethodNotAllowed](#27-methodnotallowed)
    - [with_traceback](#271-with_traceback)
- [NotAcceptable](#28-notacceptable)
    - [with_traceback](#281-with_traceback)
- [Conflict](#29-conflict)
    - [with_traceback](#291-with_traceback)
- [ImTeaPot](#30-imteapot)
    - [with_traceback](#301-with_traceback)


## 1. InternalServerError

### 1.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 2. Stats


This class shows statistics about project



### 2.1 countSpecFiles


Counts files



### 2.2 rowCount


Count of rows in project.

`*suffixes` is list of file suffixes that should be counted.

Default `suffixes` are `.py`, `.js`, `.html`, `.css`.

`*suffixes` are being add to default one not overwrittes them.

accesible via:

`python -m Cheese -s`



## 3. Mock

### 3.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 3.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 4. ResMan


Resource manager

managing resources :D

bum pam pam



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

### 6.1 loadJson


Loads settings from json file



### 6.2 loadSecrets


Loads app secrets



### 6.3 loadSettings


Loads settings



### 6.4 saveJson


Saves settigns in json file



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



## 9. CheeseBurger


Application main class



### 9.1 init


Application initialization



### 9.2 initServer


HTTP server intialization



### 9.3 loadLicence


Loads licence



### 9.4 serveForever


Starts HTTP server



## 10. CheeseServerMulti

Handle requests in a separate thread.


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

Start a new thread to process the request.


### 10.10 process_request_thread

Same as in BaseServer but as a thread.

In addition, exception handling is done here.




### 10.11 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 10.12 server_activate

Called by constructor to activate the server.

May be overridden.




### 10.13 server_bind

Override server_bind to store the server name.


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




## 11. CheeseServer

Handle requests in one thread.


### 11.1 _handle_request_noblock

Handle one request, without blocking.

I assume that selector.select() has returned that the socket is
readable before this function was called, so there should be no risk of
blocking in get_request().



### 11.2 close_request

Called to clean up an individual request.


### 11.3 fileno

Return socket file number.

Interface required by selector.




### 11.4 finish_request

Finish one request by instantiating RequestHandlerClass.


### 11.5 get_request

Get the request and client address from the socket.

May be overridden.




### 11.6 handle_error

Handle an error gracefully.  May be overridden.

The default is to print a traceback and continue.




### 11.7 handle_request

Handle one request, possibly blocking.

Respects self.timeout.



### 11.8 handle_timeout

Called if no new request arrives within self.timeout.

Overridden by ForkingMixIn.



### 11.9 process_request

Call finish_request.

Overridden by ForkingMixIn and ThreadingMixIn.




### 11.10 serve_forever

Handle one request at a time until shutdown.

Polls for shutdown every poll_interval seconds. Ignores
self.timeout. If you need to do periodic tasks, do them in
another thread.



### 11.11 server_activate

Called by constructor to activate the server.

May be overridden.




### 11.12 server_bind

Override server_bind to store the server name.


### 11.13 server_close

Called to clean-up the server.

May be overridden.




### 11.14 service_actions

Called by the serve_forever() loop.

May be overridden by a subclass / Mixin to implement any code that
needs to be run during the loop.



### 11.15 shutdown

Stops the serve_forever loop.

Blocks until the loop has finished. This must be called while
serve_forever() is running in another thread, or it will
deadlock.



### 11.16 shutdown_request

Called to shutdown and close an individual request.


### 11.17 verify_request

Verify the request.  May be overridden.

Return True if we should proceed with this request.




## 12. CheeseHandler


Server handler



### 12.1 _CheeseHandler__log


Server logs



### 12.2 address_string

Return the client address.


### 12.3 date_time_string

Return the current date and time formatted for a message header.


### 12.4 do_AUTHHEAD


Admin auth



### 12.5 do_GET


GET handler



### 12.6 do_POST


GET handler



### 12.7 end_headers


End headers



### 12.8 handle

Handle multiple requests if necessary.


### 12.9 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 12.10 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 12.11 log_date_time_string

Return the current time formatted for logging.


### 12.12 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 12.13 log_message


Disable nativ server logs



### 12.14 log_request

Log an accepted request.

This is called by send_response().




### 12.15 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 12.16 send_error

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




### 12.17 send_header

Send a MIME header to the headers buffer.


### 12.18 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 12.19 send_response_only

Send the response header only.


### 12.20 version_string

Return the server software version string.


## 13. MockManager

### 13.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 13.2 returnMock


Mocks repository method



## 14. Decode

### 14.1 decode


Decodes metadata

accesible via:

`python -m Cheese -m <key>`



## 15. CheeseModel


`CheeseModel` is non-static class for storing data from database.



### 15.1 _CheeseModel__getAttrs


returns every attribute in `self` object



### 15.2 convert


converts lists and CheeseModels into json



### 15.3 setAttrs


converts `kwargs` into model such as `toModel()` method

`**attrs` is an kwargs object.
It will be passed to `toModel()` method as `dict`.



### 15.4 toJson


return model data as dictionary

`allData`
- if `True` than in returned json will be
every attribute of object except for `modelName` and `scheme`
- if `False` than in returned json will be
only attributes from `scheme`



### 15.5 toModel


converts `dict` or anything iterable into `model`

`jsn` is an object with data
- if it is NOT `dict` than it need to be iterable and
it needs to be in same order as `scheme` is. (tuple, list...)



## 16. FileHeaders


https://www.geeksforgeeks.org/http-headers-content-type/



### 16.1 getHeader


Finds header for file



## 17. CheeseRepository


`CheeseRepository` is static class for communication with database



### 17.1 className


return string with name of class



### 17.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 17.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 17.4 find


return one `CheeseModel` by `Primary key`



### 17.5 findAll


return whole table of database as list of `CheeseModel`



### 17.6 findBy


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



### 17.7 findNewId


find new available `Primary key`



### 17.8 findOneBy


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



### 17.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 17.10 findUserMethod


finds name of method from user-made repository



### 17.11 findUserRepository


finds name of user-made repository



### 17.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 17.13 getTypeOf


convert arguments



### 17.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 17.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 17.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 17.17 queryType






### 17.18 save


creates new row in database

`obj` is `CheeseModel` object



### 17.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 17.20 stopTesting


stop repository testing enviroment



### 17.21 update


updates row in database

`obj` is `CheeseModel` object



## 18. Security

### 18.1 authenticate


Do the authentication



### 18.2 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 18.3 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 18.4 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 18.5 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 18.6 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 19. Error

### 19.1 handleError


Handles errors during session



### 19.2 init


Inits prefabs of HTTP error codes



### 19.3 logErrorMessage


Logs error into log



### 19.4 logHttpErrorMessage


Logs HTTP errors into log



### 19.5 sendCustomError


Sends error to client



## 20. TestError

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. MockError

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. BadRequest

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. Unauthorized

### 23.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 24. PaymentRequired

### 24.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 25. Forbidden

### 25.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 26. NotFound

### 26.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 27. MethodNotAllowed

### 27.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 28. NotAcceptable

### 28.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 29. Conflict

### 29.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 30. ImTeaPot

### 30.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


