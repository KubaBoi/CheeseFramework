
debug = true;

var starters = [
    ["```", code],
    ["#", header],
    ["-", uls],
    ["<", raw],
    ["[", badge]
]

var activeLine = "";
var mdDiv = document.getElementById("md");

var multiLineCode = "";
var isCode = false;
var codeType = "";

var activeP = null;

function convert(str) {
    var lines = str.split("\n");

    for (let i = 0; i < lines.length; i++) {
        activeLine = lines[i];
        if (!isCode) {
            starter = findStarter();
            if (starter != false) {
                starter();
            } else {
                label();
            }
        } else {
            code();
        }
    }

    var childs = mdDiv.childNodes;
    
    for (let i = 0; i < childs.length; i++) {
        var item = childs[i];

        if (item.nodeName != "FIGURE") {
            item.innerHTML = formatEmoji(item.innerHTML);
            item.innerHTML = urlify(item.innerHTML);
        }
    }

    formatCode();
}

function findStarter() {
    line = activeLine.trim();
    for (let i = 0; i < starters.length; i++) {
        if (line.startsWith(starters[i][0])) {
            return starters[i][1];
        }
    }
    return false;
}

function code() {
    if (!isCode && !isMultiLine(0)) {
        label();
        return;
    }

    if (!isCode) {
        codeType = activeLine.replace("```", "").trim();
        isCode = true;
        return;
    }

    if (activeLine.trim().endsWith("```")) {
        isCode = false;
        addMultiLineCode();
    } else {
        multiLineCode += activeLine + "\n";
    }
}

function header() {
    headers = activeLine.split(" ")[0];
    h = createElement("h" + String(headers.length), mdDiv); 
    formatedText = oneLineCode(h, 0, activeLine.replace(headers, ""));
    if (!formatedText) {
        h.innerHTML = activeLine.replace(headers, "");
    }
}

function uls() {
    //console.log("UL: ", + activeLine);
}

function label() {
    activeP = createElement("p", mdDiv);
    formatedText = oneLineCode(activeP);
    if (!formatedText) {
        activeP.innerHTML = activeLine;
    } else {
        activeP.classList.add("biggerLines");
    }
}

function raw() {
    mdDiv.innerHTML += activeLine;
}

function badge() {
    parts = activeLine.split("]");
    badgeUrl = parts[1].replace("(", "").replace(")", "");
    hrefUrl = parts[2].replace("(", "").replace(")", "");
    a = createElement("a", mdDiv, "", [
        {"name": "href", "value": hrefUrl}
    ]);
    createElement("img", a, "", [
        {"name": "src", "value": badgeUrl}
    ])
}




function isMultiLine(index) {
    startIndex = activeLine.indexOf("```", index);
    endIndex = activeLine.indexOf("```", startIndex+1);

    if (endIndex == -1) {
        return true;
    }
    return false;
}

function oneLineCode(element, index=0, text="") {
    if (text == "") {
        text = activeLine;
    }
    startIndex = text.indexOf("```", index);
    if (startIndex == -1) {
        element.innerHTML += text.substring(index, text.length);
        return false;
    }
    endIndex = text.indexOf("```", startIndex+1);
    element.innerHTML += text.substring(index, startIndex-1) + " ";
    createElement("span", element, text.substring(startIndex+3, endIndex), [
        {"name": "class", "value": "oneLineCode"}
    ]);

    oneLineCode(element, endIndex + 3, text);

    return true;
}

function addMultiLineCode() {
    figure = createElement("figure", mdDiv);
    pre = createElement("pre", figure);
    createElement("code", pre, multiLineCode, [
        {"name": "class", "value": "language-" + codeType}
    ]);
    multiLineCode = "";
}

