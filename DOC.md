# CheeseFramework documentation

[Back to README](https://kubaboi.github.io/CheeseFramework/)

:bangbang: This documentantion is automaticaly generated from code documentation.

timestamp: 23.08.18.18.20

Cheese version v(1.4.94)

## Contents

- [MockManager](#1-mockmanager)
    - [prepareResponse](#11-prepareresponse)
    - [returnMock](#12-returnmock)
- [Metadata](#2-metadata)
    - [cleanInits](#21-cleaninits)
    - [code64](#22-code64)
    - [createInits](#23-createinits)
    - [decode](#24-decode)
    - [decode64](#25-decode64)
    - [encode](#26-encode)
    - [findMethod](#27-findmethod)
    - [getKey](#28-getkey)
    - [getMethod](#29-getmethod)
    - [getModel](#210-getmodel)
    - [getObjMethod](#211-getobjmethod)
    - [getRawScheme](#212-getrawscheme)
    - [getRepository](#213-getrepository)
    - [getRepositoryFromClass](#214-getrepositoryfromclass)
    - [getScheme](#215-getscheme)
    - [loadMetadata](#216-loadmetadata)
    - [prepareControllers](#217-preparecontrollers)
    - [prepareTests](#218-preparetests)
    - [read](#219-read)
    - [save](#220-save)
- [Settings](#3-settings)
    - [loadJson](#31-loadjson)
    - [loadSecrets](#32-loadsecrets)
    - [loadSettings](#33-loadsettings)
    - [saveJson](#34-savejson)
- [ResMan](#4-resman)
    - [convertBytes](#41-convertbytes)
    - [error](#42-error)
    - [getFileName](#43-getfilename)
    - [getParentDir](#44-getparentdir)
    - [getRelativePathFrom](#45-getrelativepathfrom)
    - [joinPath](#46-joinpath)
    - [logs](#47-logs)
    - [metadata](#48-metadata)
    - [removeSlash](#49-removeslash)
    - [resources](#410-resources)
    - [root](#411-root)
    - [setPath](#412-setpath)
    - [src](#413-src)
    - [tests](#414-tests)
    - [web](#415-web)
- [CheeseBurger](#5-cheeseburger)
    - [init](#51-init)
    - [initServer](#52-initserver)
    - [loadLicence](#53-loadlicence)
    - [serveForever](#54-serveforever)
- [Error](#6-error)
    - [handleError](#61-handleerror)
    - [init](#62-init)
    - [logErrorMessage](#63-logerrormessage)
    - [logHttpErrorMessage](#64-loghttperrormessage)
    - [sendCustomError](#65-sendcustomerror)
- [InternalServerError](#7-internalservererror)
    - [with_traceback](#71-with_traceback)
- [CheeseRepository](#8-cheeserepository)
    - [className](#81-classname)
    - [delete](#82-delete)
    - [exists](#83-exists)
    - [find](#84-find)
    - [findAll](#85-findall)
    - [findBy](#86-findby)
    - [findNewId](#87-findnewid)
    - [findOneBy](#88-findoneby)
    - [findOneWhere](#89-findonewhere)
    - [findUserMethod](#810-findusermethod)
    - [findUserRepository](#811-finduserrepository)
    - [findWhere](#812-findwhere)
    - [getTypeOf](#813-gettypeof)
    - [getVariables](#814-getvariables)
    - [model](#815-model)
    - [query](#816-query)
    - [queryType](#817-querytype)
    - [save](#818-save)
    - [startTesting](#819-starttesting)
    - [stopTesting](#820-stoptesting)
    - [update](#821-update)
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
    - [_CheeseHandler__log](#111-_cheesehandler__log)
    - [address_string](#112-address_string)
    - [date_time_string](#113-date_time_string)
    - [do_AUTHHEAD](#114-do_authhead)
    - [do_GET](#115-do_get)
    - [do_POST](#116-do_post)
    - [end_headers](#117-end_headers)
    - [handle](#118-handle)
    - [handle_expect_100](#119-handle_expect_100)
    - [handle_one_request](#1110-handle_one_request)
    - [log_date_time_string](#1111-log_date_time_string)
    - [log_error](#1112-log_error)
    - [log_message](#1113-log_message)
    - [log_request](#1114-log_request)
    - [parse_request](#1115-parse_request)
    - [send_error](#1116-send_error)
    - [send_header](#1117-send_header)
    - [send_response](#1118-send_response)
    - [send_response_only](#1119-send_response_only)
    - [version_string](#1120-version_string)
- [CheeseController](#12-cheesecontroller)
    - [checkJson](#121-checkjson)
    - [checkLicense](#122-checklicense)
    - [createResponse](#123-createresponse)
    - [getArgs](#124-getargs)
    - [getClientAddress](#125-getclientaddress)
    - [getCookies](#126-getcookies)
    - [getEndpoints](#127-getendpoints)
    - [getHeaders](#128-getheaders)
    - [getHeadersDict](#129-getheadersdict)
    - [getPath](#1210-getpath)
    - [getTime](#1211-gettime)
    - [modulesToJsonArray](#1212-modulestojsonarray)
    - [readArgs](#1213-readargs)
    - [readBytes](#1214-readbytes)
    - [sendResponse](#1215-sendresponse)
    - [serveFile](#1216-servefile)
    - [validateJson](#1217-validatejson)
- [Stats](#13-stats)
    - [countSpecFiles](#131-countspecfiles)
    - [rowCount](#132-rowcount)
- [Decode](#14-decode)
    - [decode](#141-decode)
- [CheeseModel](#15-cheesemodel)
    - [_CheeseModel__getAttrs](#151-_cheesemodel__getattrs)
    - [convert](#152-convert)
    - [setAttrs](#153-setattrs)
    - [toJson](#154-tojson)
    - [toModel](#155-tomodel)
- [TestError](#16-testerror)
    - [with_traceback](#161-with_traceback)
- [MockError](#17-mockerror)
    - [with_traceback](#171-with_traceback)
- [Mock](#18-mock)
    - [catchArgs](#181-catchargs)
    - [whenReturn](#182-whenreturn)
- [Security](#19-security)
    - [authenticate](#191-authenticate)
    - [findRole](#192-findrole)
    - [fitPatern](#193-fitpatern)
    - [handleExceptions](#194-handleexceptions)
    - [prepareString](#195-preparestring)
    - [validate](#196-validate)
- [BadRequest](#20-badrequest)
    - [with_traceback](#201-with_traceback)
- [Unauthorized](#21-unauthorized)
    - [with_traceback](#211-with_traceback)
- [PaymentRequired](#22-paymentrequired)
    - [with_traceback](#221-with_traceback)
- [Forbidden](#23-forbidden)
    - [with_traceback](#231-with_traceback)
- [NotFound](#24-notfound)
    - [with_traceback](#241-with_traceback)
- [MethodNotAllowed](#25-methodnotallowed)
    - [with_traceback](#251-with_traceback)
- [NotAcceptable](#26-notacceptable)
    - [with_traceback](#261-with_traceback)
- [Conflict](#27-conflict)
    - [with_traceback](#271-with_traceback)
- [ImTeaPot](#28-imteapot)
    - [with_traceback](#281-with_traceback)
- [HTTPError](#29-httperror)
    - [with_traceback](#291-with_traceback)
- [FileHeaders](#30-fileheaders)
    - [getHeader](#301-getheader)


## 1. MockManager

### 1.1 prepareResponse


Prepares response
Finds its type and returns it
If type is Pointer returns value



### 1.2 returnMock


Mocks repository method



## 2. Metadata


Class that builds and loads application metadata



### 2.1 cleanInits


Remove all __init__.py files after import



### 2.2 code64


Base64 coding



### 2.3 createInits


Creates __init__.py files for import



### 2.4 decode


Dencodes data with key



### 2.5 decode64


Base64 decoding



### 2.6 encode


Encodes data with key



### 2.7 findMethod


Finds method by endpoint and http method



### 2.8 getKey


Loads secret key



### 2.9 getMethod


Returns repository's object method



### 2.10 getModel


Returns name of repository's model



### 2.11 getObjMethod


Returns object of method from controller or repository



### 2.12 getRawScheme


Returns name of repository's db scheme



### 2.13 getRepository


Returns repository by class name



### 2.14 getRepositoryFromClass


Returns repository object by class name



### 2.15 getScheme


Returns name of repository's db scheme as list



### 2.16 loadMetadata


loads metadata



### 2.17 prepareControllers


Imports controller methods



### 2.18 prepareTests


Imports test methods



### 2.19 read


Reads metadata from file .metadata



### 2.20 save


Saves metadata in file .metadata



## 3. Settings

### 3.1 loadJson


Loads settings from json file



### 3.2 loadSecrets


Loads app secrets



### 3.3 loadSettings


Loads settings



### 3.4 saveJson


Saves settigns in json file



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



### 4.4 getParentDir


return parent directory



### 4.5 getRelativePathFrom


return relative path from



### 4.6 joinPath


joins two paths together



### 4.7 logs


logs



### 4.8 metadata


metadata



### 4.9 removeSlash


remove / from start or end



### 4.10 resources


other resources of project



### 4.11 root


root dir of project



### 4.12 setPath


set root path of project



### 4.13 src


all source codes of project



### 4.14 tests


tests



### 4.15 web


dir from which CheeseFramework is able to serve files (index.html)



## 5. CheeseBurger


Application main class



### 5.1 init


Application initialization



### 5.2 initServer


HTTP server intialization



### 5.3 loadLicence


Loads licence



### 5.4 serveForever


Starts HTTP server



## 6. Error

### 6.1 handleError


Handles errors during session



### 6.2 init


Inits prefabs of HTTP error codes



### 6.3 logErrorMessage


Logs error into log



### 6.4 logHttpErrorMessage


Logs HTTP errors into log



### 6.5 sendCustomError


Sends error to client



## 7. InternalServerError

### 7.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 8. CheeseRepository


`CheeseRepository` is static class for communication with database



### 8.1 className


return string with name of class



### 8.2 delete


deletes row from database

`obj` is `CheeseModel` object



### 8.3 exists


return `true` if there is any row in database

`**columns` is dictionary of column names and its values

example:
```
exists(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 8.4 find


return one `CheeseModel` by `Primary key`



### 8.5 findAll


return whole table of database as list of `CheeseModel`



### 8.6 findBy


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



### 8.7 findNewId


find new available `Primary key`



### 8.8 findOneBy


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



### 8.9 findOneWhere


return one `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findOneWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 8.10 findUserMethod


finds name of method from user-made repository



### 8.11 findUserRepository


finds name of user-made repository



### 8.12 findWhere


return list of `CheeseModel`

`**columns` is dictionary of column names and its values

example:
```
findWhere(age=15, gender="m")
->
SQL: "... WHERE age = 15 AND gender = 'm' ..."
```



### 8.13 getTypeOf


convert arguments



### 8.14 getVariables


creates array of variables from sql

ascii from 48-57 (numbers) and 65-90 (big letters) and 97-122 (small letters)

or 46 (.) or 95 (_)



### 8.15 model


return `CheeseModel` with `Primary key`, `modelName` and `scheme`



### 8.16 query


Access point to database. Returns database output.

`userRepository` is string name of used repository

`**kwargs` is `dict` of arguments for SQL request



### 8.17 queryType






### 8.18 save


creates new row in database

`obj` is `CheeseModel` object



### 8.19 startTesting


sets repository testing enviroment

`mockManager` is instance of `MockManager` used by testing



### 8.20 stopTesting


stop repository testing enviroment



### 8.21 update


updates row in database

`obj` is `CheeseModel` object



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


Server handler



### 11.1 _CheeseHandler__log


Server logs



### 11.2 address_string

Return the client address.


### 11.3 date_time_string

Return the current date and time formatted for a message header.


### 11.4 do_AUTHHEAD


Admin auth



### 11.5 do_GET


GET handler



### 11.6 do_POST


GET handler



### 11.7 end_headers


End headers



### 11.8 handle

Handle multiple requests if necessary.


### 11.9 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

If the client is expecting a 100 Continue response, we must
respond with either a 100 Continue or a final response before
waiting for the request body. The default is to always respond
with a 100 Continue. You can behave differently (for example,
reject unauthorized requests) by overriding this method.

This method should either return True (possibly after sending
a 100 Continue response) or send an error response and return
False.




### 11.10 handle_one_request

Handle a single HTTP request.

You normally don't need to override this method; see the class
__doc__ string for information on how to handle specific HTTP
commands such as GET and POST.




### 11.11 log_date_time_string

Return the current time formatted for logging.


### 11.12 log_error

Log an error.

This is called when a request cannot be fulfilled.  By
default it passes the message on to log_message().

Arguments are the same as for log_message().

XXX This should go to the separate error log.




### 11.13 log_message


Disable nativ server logs



### 11.14 log_request

Log an accepted request.

This is called by send_response().




### 11.15 parse_request

Parse a request (internal).

The request should be stored in self.raw_requestline; the results
are in self.command, self.path, self.request_version and
self.headers.

Return True for success, False for failure; on failure, any relevant
error response has already been sent back.




### 11.16 send_error

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




### 11.17 send_header

Send a MIME header to the headers buffer.


### 11.18 send_response

Add the response header to the headers buffer and log the
response code.

Also send two standard headers with the server software
version and the current date.




### 11.19 send_response_only

Send the response header only.


### 11.20 version_string

Return the server software version string.


## 12. CheeseController


`CheeseController` is static class for controlling endpoints.

Controller documentation:
https://kubaboi.github.io/CheeseFramework/#71-api-controllers



### 12.1 checkJson


raise BadRequest exception if any key is missing in json

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



### 12.2 checkLicense


checks license



### 12.3 createResponse


create response as tuple

`dict` is response dictionary. Dictionary will be dumped by `json` library
and coded into bytes with `utf-8` coding.

`code` is http status code as `int`

`headers` is dict with headers and its values



### 12.4 getArgs


return arguments from rest request url

`url` is url of request

`decode` if true than decode URL-encoded format



### 12.5 getClientAddress


return client's address

`server` is instance of http handler



### 12.6 getCookies


return cookies as dictionary from request header

`server` is instance of http handler



### 12.7 getEndpoints


return list of endpoints

`url` is url of request

splits url by `/` and returns this list

example:
```
"hello/world/gut" -> ["hello", "world", "gut"]
```



### 12.8 getHeaders


return requests headers

`server` is instance of http handler



### 12.9 getHeadersDict


return request headers as dict

`server` is instance of http handler



### 12.10 getPath


return path without arguments

`url` is url of request

splits url by `?` and return first part

example:
```
"hello/world?foo=0" -> "hello/world"
```



### 12.11 getTime


return now time and add argument in seconds

`addTime` is time in `seconds` which will be added to now time. It can be negative value.



### 12.12 modulesToJsonArray


return json array from list of modules

`modules` is list of CheeseModel instances



### 12.13 readArgs


return arguments from body of request as dictionary

`server` is instance of http handler



### 12.14 readBytes


return bytes from post body

`server` is instance of http handler



### 12.15 sendResponse


send response to client

`server` is instance of http handler

`response` is tuple (response object created in `CheeseController.createResponse(...)` method)



### 12.16 serveFile


sends file located in `/web` directory

`server` is instance of http handler

`file` is string path to any file located in `/web` directory

`header` is string of header for http response



### 12.17 validateJson


return true if all keys are in dictionary

`keys` is list of keys that should be in `dict`

`dict` is tested dictionary



## 13. Stats


This class shows statistics about project



### 13.1 countSpecFiles


Counts files



### 13.2 rowCount


Count of rows in project.

`*suffixes` is list of file suffixes that should be counted.

Default `suffixes` are `.py`, `.js`, `.html`, `.css`.

`*suffixes` are being add to default one not overwrittes them.

accesible via:

`python -m Cheese -s`



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



## 16. TestError

### 16.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 17. MockError

### 17.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 18. Mock

### 18.1 catchArgs


pointer - id of object which will be filled with return
methodName - name of method which will be cached



### 18.2 whenReturn


methodName - name of method which will be mocked
response - response which mocked return will return
kwargs - dict of arguments singalizing that this is THE case



## 19. Security

### 19.1 authenticate


Do the authentication



### 19.2 findRole


Finds role id

`dict` is dictionary of replaceable values

`roleIdSql` sql string for finding role id



### 19.3 fitPatern


`auth` is string of authentication

`re` is regex for recognising authentication



### 19.4 handleExceptions


Handles custom exception defined in `securitySettings.json`



### 19.5 prepareString


`dict` is dictionary of replaceable values

`string` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



### 19.6 validate


Takes validation string and decide if sql is valid or not

`dict` is dictionary of replaceable values

`validation` is sql string for replacing values

`encoders` is dictionary of encoders

`server` is instance of http handler



## 20. BadRequest

### 20.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 21. Unauthorized

### 21.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 22. PaymentRequired

### 22.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 23. Forbidden

### 23.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 24. NotFound

### 24.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 25. MethodNotAllowed

### 25.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 26. NotAcceptable

### 26.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 27. Conflict

### 27.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 28. ImTeaPot

### 28.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 29. HTTPError

### 29.1 with_traceback

Exception.with_traceback(tb) --
set self.__traceback__ to tb and return self.


## 30. FileHeaders


https://www.geeksforgeeks.org/http-headers-content-type/



### 30.1 getHeader


Finds header for file



