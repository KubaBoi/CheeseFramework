#cheese

import os
import sys

print(os.path.curdir)
print(sys.argv)

for root, dirs, files in os.walk(os.path.curdir):
    print("root ", root)