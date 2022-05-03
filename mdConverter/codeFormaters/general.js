
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function strings(str, stringChar='"') {
    doingString = "";
    doingInt = false;
    newStr = "";
    for (let i = 0; i < str.length; i++) {
        chr = str[i];
        if (chr == stringChar && str[i+1] == stringChar && str[i+2] == stringChar) {
            i += 2;
            newStr += '"""';
            continue;
        }

        if (chr == stringChar && str[i+1] != stringChar) {
            if (doingString == "" && !doingInt) {
                newStr += "<span class='string'>" + stringChar;
                doingString = chr;
            }
            else {
                newStr += stringChar + "</span>";
                doingString = "";
            }
        }
        else if (numbers.includes(chr) && doingString == "" && !doingInt) {
            newStr += "<span class='numbers'>" + chr;
            doingInt = true;
        }
        else {
            if (doingInt && !numbers.includes(chr)) {
                newStr += "</span>";
                doingInt = false;
            }
            if (json_keywords.includes(chr)) {
                newStr += "<span class='keywords'>" + chr + "</span>";
            }
            else if (chr == ":") {
                newStr += "<span class='python_multiline_comment'>" + chr + "</span>";
            }
            else {
                newStr += chr;
            }
        }
    }

    return newStr;
}