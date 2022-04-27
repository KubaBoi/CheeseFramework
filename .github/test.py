import os

prepFile = os.path.abspath(os.path.join(os.path.dirname( __file__ ), "..", ".."))

print(prepFile)

for root, dirs, files in os.walk(prepFile):
    for dir in dirs:
        print(dir)