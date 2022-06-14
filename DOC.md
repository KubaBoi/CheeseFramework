## 1. CheeseController

### 1.1 checkJson


        raise BadRequest exception if any key is missing in json

        `keys` is list of keys that should be in `dict`

        `dict` is tested dictionary
        

### 1.2 checkLicense


        checks license
        

### 1.3 createResponse


        create response as tuple
        
        `dict` is response dictionary. Dictionary will be dumped by `json` library 
        and coded into bytes with `utf-8` coding. 

        `code` is http status code as `int`
        

### 1.4 getArgs


        return arguments from rest request url

        `url` is url of request

        `decode` if true than decode URL-encoded format
        

### 1.5 getClientAddress


        return client's address

        `server` is instance of http handler
        

### 1.6 getCookies


        return cookies as dictionary from request header

        `server` is instance of http handler 
        

### 1.7 getEndpoints


        return list of endpoints

        `url` is url of request

        splits url by `/` and returns this list

        example:
        ```
        "hello/world/gut" -> ["hello", "world", "gut"]
        ```
        

### 1.8 getPath


        return path without arguments

        `url` is url of request

        splits url by `?` and return first part

        example:
        ```
        "hello/world?foo=0" -> "hello/world"
        ```
        

### 1.9 getTime


        return now time and add argument in seconds

        `addTime` is time in `seconds` which will be added to now time. It can be negative value.
        

### 1.10 modulesToJsonArray


        return json array from list of modules

        `modules` is list of CheeseModel instances
        

### 1.11 readArgs


        return arguments from body of request as dictionary

        `server` is instance of http handler
        

### 1.12 readBytes


        return bytes from post body

        `server` is instance of http handler
        

### 1.13 sendResponse


        send response to client

        `server` is instance of http handler

        `response` is tuple (response object created in `CheeseController.createResponse(...)` method)
        

### 1.14 serveFile


        sends file located in `/web` directory

        `server` is instance of http handler

        `file` is string path to any file located in `/web` directory

        `header` is string of header for http response 
        

### 1.15 validateJson


        return true if all keys are in dictionary

        `keys` is list of keys that should be in `dict`

        `dict` is tested dictionary
        

## 2. CheeseModel

### 2.1 _CheeseModel__getAttrs


        returns every attribute in `self` object
        

### 2.2 setAttrs


        converts `kwargs` into model such as `toModel()` method

        `**attrs` is an kwargs object. 
        It will be passed to `toModel()` method as `dict`.
        

### 2.3 toJson


        return model data as dictionary

        `allData` 
        - if `True` than in returned json will be 
        every attribute of object except for `modelName` and `scheme`
        - if `False` than in returned json will be 
        only attributes from `scheme`
        

### 2.4 toModel


        converts `dict` or anything iterable into `model`

        `jsn` is an object with data
        - if it is NOT `dict` than it need to be iterable and 
        it needs to be in same order as `scheme` is. (tuple, list...)
        

## 3. CheeseRepository

### 3.1 className


        return string with name of class
        

### 3.2 find


        return one `CheeseModel` by `Primary key`
        

### 3.3 findAll


        return whole table of database as list of `CheeseModel`
        

### 3.4 findBy


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
        

### 3.5 findOneBy


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
        

### 3.6 model


        return `CheeseModel` with `Primary key`, `modelName` and `scheme`
        

## 4. CheeseServerMulti

### 4.1 _handle_request_noblock

Handle one request, without blocking.

        I assume that selector.select() has returned that the socket is
        readable before this function was called, so there should be no risk of
        blocking in get_request().
        

### 4.2 close_request

Called to clean up an individual request.

### 4.3 fileno

Return socket file number.

        Interface required by selector.

        

### 4.4 finish_request

Finish one request by instantiating RequestHandlerClass.

### 4.5 get_request

Get the request and client address from the socket.

        May be overridden.

        

### 4.6 handle_error

Handle an error gracefully.  May be overridden.

        The default is to print a traceback and continue.

        

### 4.7 handle_request

Handle one request, possibly blocking.

        Respects self.timeout.
        

### 4.8 handle_timeout

Called if no new request arrives within self.timeout.

        Overridden by ForkingMixIn.
        

### 4.9 process_request

Start a new thread to process the request.

### 4.10 process_request_thread

Same as in BaseServer but as a thread.

        In addition, exception handling is done here.

        

### 4.11 serve_forever

Handle one request at a time until shutdown.

        Polls for shutdown every poll_interval seconds. Ignores
        self.timeout. If you need to do periodic tasks, do them in
        another thread.
        

### 4.12 server_activate

Called by constructor to activate the server.

        May be overridden.

        

### 4.13 server_bind

Override server_bind to store the server name.

### 4.14 service_actions

Called by the serve_forever() loop.

        May be overridden by a subclass / Mixin to implement any code that
        needs to be run during the loop.
        

### 4.15 shutdown

Stops the serve_forever loop.

        Blocks until the loop has finished. This must be called while
        serve_forever() is running in another thread, or it will
        deadlock.
        

### 4.16 shutdown_request

Called to shutdown and close an individual request.

### 4.17 verify_request

Verify the request.  May be overridden.

        Return True if we should proceed with this request.

        

## 5. CheeseServer

### 5.1 _handle_request_noblock

Handle one request, without blocking.

        I assume that selector.select() has returned that the socket is
        readable before this function was called, so there should be no risk of
        blocking in get_request().
        

### 5.2 close_request

Called to clean up an individual request.

### 5.3 fileno

Return socket file number.

        Interface required by selector.

        

### 5.4 finish_request

Finish one request by instantiating RequestHandlerClass.

### 5.5 get_request

Get the request and client address from the socket.

        May be overridden.

        

### 5.6 handle_error

Handle an error gracefully.  May be overridden.

        The default is to print a traceback and continue.

        

### 5.7 handle_request

Handle one request, possibly blocking.

        Respects self.timeout.
        

### 5.8 handle_timeout

Called if no new request arrives within self.timeout.

        Overridden by ForkingMixIn.
        

### 5.9 process_request

Call finish_request.

        Overridden by ForkingMixIn and ThreadingMixIn.

        

### 5.10 serve_forever

Handle one request at a time until shutdown.

        Polls for shutdown every poll_interval seconds. Ignores
        self.timeout. If you need to do periodic tasks, do them in
        another thread.
        

### 5.11 server_activate

Called by constructor to activate the server.

        May be overridden.

        

### 5.12 server_bind

Override server_bind to store the server name.

### 5.13 server_close

Called to clean-up the server.

        May be overridden.

        

### 5.14 service_actions

Called by the serve_forever() loop.

        May be overridden by a subclass / Mixin to implement any code that
        needs to be run during the loop.
        

### 5.15 shutdown

Stops the serve_forever loop.

        Blocks until the loop has finished. This must be called while
        serve_forever() is running in another thread, or it will
        deadlock.
        

### 5.16 shutdown_request

Called to shutdown and close an individual request.

### 5.17 verify_request

Verify the request.  May be overridden.

        Return True if we should proceed with this request.

        

## 6. CheeseHandler

### 6.1 address_string

Return the client address.

### 6.2 date_time_string

Return the current date and time formatted for a message header.

### 6.3 handle

Handle multiple requests if necessary.

### 6.4 handle_expect_100

Decide what to do with an "Expect: 100-continue" header.

        If the client is expecting a 100 Continue response, we must
        respond with either a 100 Continue or a final response before
        waiting for the request body. The default is to always respond
        with a 100 Continue. You can behave differently (for example,
        reject unauthorized requests) by overriding this method.

        This method should either return True (possibly after sending
        a 100 Continue response) or send an error response and return
        False.

        

### 6.5 handle_one_request

Handle a single HTTP request.

        You normally don't need to override this method; see the class
        __doc__ string for information on how to handle specific HTTP
        commands such as GET and POST.

        

### 6.6 log_date_time_string

Return the current time formatted for logging.

### 6.7 log_error

Log an error.

        This is called when a request cannot be fulfilled.  By
        default it passes the message on to log_message().

        Arguments are the same as for log_message().

        XXX This should go to the separate error log.

        

### 6.8 log_request

Log an accepted request.

        This is called by send_response().

        

### 6.9 parse_request

Parse a request (internal).

        The request should be stored in self.raw_requestline; the results
        are in self.command, self.path, self.request_version and
        self.headers.

        Return True for success, False for failure; on failure, any relevant
        error response has already been sent back.

        

### 6.10 send_error

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

        

### 6.11 send_header

Send a MIME header to the headers buffer.

### 6.12 send_response

Add the response header to the headers buffer and log the
        response code.

        Also send two standard headers with the server software
        version and the current date.

        

### 6.13 send_response_only

Send the response header only.

### 6.14 version_string

Return the server software version string.

## 7. BadRequest

### 7.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 8. Unauthorized

### 8.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 9. PaymentRequired

### 9.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 10. Forbidden

### 10.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 11. NotFound

### 11.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 12. MethodNotAllowed

### 12.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 13. NotAcceptable

### 13.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 14. Conflict

### 14.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 15. ImTeaPot

### 15.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 16. HTTPError

### 16.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 17. InternalServerError

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
        

## 19. MockManager

### 19.1 prepareResponse


        Prepares response
        Finds its type and returns it
        If type is Pointer returns value
        

### 19.2 returnMock


        Mocks repository method
        

## 20. TestError

### 20.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

## 21. MockError

### 21.1 with_traceback

Exception.with_traceback(tb) --
    set self.__traceback__ to tb and return self.

