#cheese

from Cheese.httpError import HTTPError

class InternalServerError(HTTPError):
    def __init__(self, description):
        super().__init__(self, description, "Internal Server Error", 500)