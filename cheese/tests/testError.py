#cheese

class TestError(Exception):

    def __init__(self, value, template, comment):
        self.value = value
        self.template = template
        self.comment = comment