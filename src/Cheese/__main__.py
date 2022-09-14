# cheese

import sys
import getopt

from Cheese.cheeser import Cheeser
from Cheese.stats import Stats
from Cheese.decode import Decode


def help():
    print("""====Cheese HELP====

-h --help                   Cheese HELP
-g --generate               Generates new project by template
-G --Generate               Generates new project by template with example files
-s --stats                  Statistics about project
                                count files and rows in files
                                with [.py, .js, .html, .css] suffixes
-S --Stats <suffixes>       Statistics about project
                                count files and rows in files with default suffixes
                                and additional suffixes in <suffixes> argument
                                example: -S \"txt sql vue\"
-m --metadata <key>         Generates decoded .json file with metadata
                                <key> argument is key to decode metadata

	""")


def main(argv):
    try:
        opts, args = getopt.getopt(
            argv, "hgGsS:m:", ["help", "generate", "Generate", "stats", "Stats=", "metadata="])
    except getopt.GetoptError as e:
        print(e)
        print("")
        help()
        sys.exit(2)

    for opt, arg in opts:
        if (opt in ("-h", "--help")):
            help()
            sys.exit()
        elif (opt in ("-g", "--generate")):
            Cheeser.generate(False)
            sys.exit()
        elif (opt in ("-G", "--Generate")):
            Cheeser.generate(True)
            sys.exit()
        elif (opt in ("-s", "--stats")):
            Stats.rowCount()
            sys.exit()
        elif (opt in ("-S", "--Stats")):
            args = arg.split(" ")
            Stats.rowCount(*args)
            sys.exit()
        elif (opt in ("-m", "--metadata")):
            Decode.decode(arg)
            sys.exit()


if __name__ == "__main__":
    main(sys.argv[1:])
