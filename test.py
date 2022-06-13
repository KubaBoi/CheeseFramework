import inspect

class test:
    def __init__(self):
        self.a = 0
        self.g = 0

t = test()
t2 = test()
setattr(t2, "juuu", "lklk")

attributes = inspect.getmembers(t, lambda a:not(inspect.isroutine(a)))
attributes = [a for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))]
print(attributes)

attributes = inspect.getmembers(t2, lambda a:not(inspect.isroutine(a)))
attributes = [a[0] for a in attributes if not(a[0].startswith('__') and a[0].endswith('__'))]

print(attributes)
