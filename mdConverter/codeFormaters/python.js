
var python_keywords = [
    "def ",
    "class ",
    "import ",
    "from ",
    "in ",
    "return "
]

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
            commIndex = line.trim().indexOf("#");
            if (commIndex != -1 && commIndex != 0) {
                newStr += line.substring(0, commIndex) + "<label class='python_comment'>" + line.substring(commIndex, line.length) + "</label><br>"
            } 
            else {
                newStr += line + "<br>";
            }
        }
    }

    newStr = strings(newStr);

    for (let i = 0; i < python_keywords.length; i++) {
        newStr = newStr.replaceAll(python_keywords[i], `<label class='keywords'>${python_keywords[i]}</label>`);
    }

    return newStr;
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
            if (!firstCanBe && i == index) {
                continue;
            }
            else {
                index = i;
                break;
            }
        }
    }
    return [index, multiLineAnnotation + "</span>"];
} 