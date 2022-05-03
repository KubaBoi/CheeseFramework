
var keywords = [
    "def ",
    "class ",
    "import ",
    "from ",
    "in ",
    "return "
]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



function formatPython(str) {
    var newStr = "";
    var lines = str.split("\n");
    for (let i = 0; i < lines.length; i++) {
        line = lines[i];

        if (line.trim().startsWith("#@")) {
            resp = multiLine(";", "python_cheese_annotation", i, lines);
            i = resp[0];
            newStr += resp[1];
        }
        else if (line.trim().startsWith("@")) {
            newStr += "<label class='python_annotation'>" + line + "</label><br>";
        }
        else if (line.trim().startsWith("def")) {
            newStr += replaceName("def", "python_def", line);
        }
        else if (line.trim().startsWith("class")) {
            newStr += replaceName("class", "python_class", line);
        }
        else if (line.trim().startsWith("#")) {
            newStr += "<label class='python_comment'>" + line + "</label><br>"
        }
        else if (line.trim().startsWith('"""')) {
            resp = multiLine('"""', "python_multiline_comment", i, lines, false);
            i = resp[0];
            newStr += resp[1];
        }
        else {
            commIndex = line.indexOf("#");
            if (commIndex != -1) {
                newStr += line.substring(0, commIndex) + "<label class='python_comment'>" + line.substring(commIndex, line.length) + "</label><br>"
            } 
            else {
                newStr += line + "<br>";
            }
        }
    }

    doingString = "";
    doingInt = false;
    ultraNewStr = "";
    for (let i = 0; i < newStr.length; i++) {
        chr = newStr[i];
        if (chr == "\"" && newStr[i+1] == "\"" && newStr[i+2] == "\"") {
            i += 2;
            ultraNewStr += '"""';
            continue;
        }

        if (chr == "\"" && newStr[i+1] != "\"") {
            if (doingString == "" && !doingInt) {
                ultraNewStr += "<span class='python_string'>\"";
                doingString = chr;
            }
            else {
                ultraNewStr += "\"</span>";
                doingString = "";
            }
        }
        else if (numbers.includes(chr) && doingString == "" && !doingInt) {
            ultraNewStr += "<span class='python_numbers'>" + chr;
            doingInt = true;
        }
        else {
            if (doingInt && !numbers.includes(chr)) {
                ultraNewStr += "</span>";
                doingInt = false;
            }
            ultraNewStr += chr;
        }
    }

    for (let i = 0; i < keywords.length; i++) {
        ultraNewStr = ultraNewStr.replace(keywords[i], `<label class='python_keywords'>${keywords[i]}</label>`);
    }

    return ultraNewStr;
}

function replaceName(structureName, className, line) {
    startIndex = line.indexOf(structureName) + structureName.length + 1;
    structName = "";
    for (let o = startIndex; o < line.length; o++) {
        if (line[o] == "(") {
            newStr = line.replace(structName, "<label class='" + className + "'>" + structName + "</label>") + "<br>";
        }
        structName += line[o];
    }
    return newStr;
}

function multiLine(end, className, index, lines, firstCanBe=true) {
    multiLineAnnotation = "<span class='" + className + "'>";

    for (let i = index; i < lines.length; i++) {
        var line = lines[i];
        multiLineAnnotation += line + "<br>";
        if (line.trim().endsWith(end)) {
            if (firstCanBe && i == index) {
                index = i;
                break;
            }
            if (!firstCanBe && i != index) {
                index = i;
                break;
            }
        }
    }
    return [index, multiLineAnnotation + "</span>"];
} 