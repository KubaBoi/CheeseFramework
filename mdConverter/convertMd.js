
debug = false;

var starters = [
    ["```", code],
    ["#", header],
    ["-", uls],
    ["<", raw],
    ["[", badge]
]

var activeLine = "";
var mdDiv = document.getElementById("md");
var contentsDiv = document.getElementById("contents");

var multiLineCode = "";
var isCode = false;
var codeType = "";

var contentsItems = [];
var isContents = false;

var ulsItems = [];
var isUls = false;

var activeP = null;
var mainIndex = 0;

function convertOld(str) {
    var lines = str.split("\n");

    clearTable(mdDiv);
    clearTable(contentsDiv);

    multiLineCode = "";
    isCode = false;
    codeType = "";

    contentsItems = [];
    isContents = false;

    ulsItems = [];
    isUls = false;

    activeP = null;
    mainIndex = 0;

    while (mainIndex < lines.length) {
        activeLine = lines[mainIndex];
        if (!isCode && !isContents && !isUls) {
            starter = findStarter();
            if (starter != false) {
                starter();
            } else {
                label();
            }
        } 
        else if (isCode) {
            code();
        }
        else if (isContents) {
            contents();
        }
        else if (isUls) {
            uls();
        }
        mainIndex++;
    }

    var childs = mdDiv.childNodes;
    
    for (let i = 0; i < childs.length; i++) {
        var item = childs[i];

        if (item.nodeName != "FIGURE") {
            item.innerHTML = formatEmoji(item.innerHTML);
            item.innerHTML = urlify(item.innerHTML);
            item.innerHTML = formatCheckBox(item.innerHTML);
            formatedOutput = formatOneLineCode(item.innerHTML);
            if (formatedOutput[0]) {
                if (item.nodeName == "UL") {
                    item.classList.add("biggerLinesUl");
                }
                else {
                    item.classList.add("biggerLines");
                }
                item.innerHTML = formatedOutput[1];
            }
        }
    }

    formatCode();

    var lastStart = 0;
    createElement("p", contentsDiv, "Contents");
    var activeUl = createElement("ol", contentsDiv);
    for (let i = 0; i < contentsItems.length; i++) {
        var item = contentsItems[i];
        if (item.trim() == "") continue;
        
        var startIndex = item.indexOf("-");
        if (startIndex == 1) startIndex = 0;

        var li = badge(item.replace("-", "").trim());
        if (lastStart < startIndex) {
            activeUl = createElement("ol", activeUl);
        }
        else if (lastStart > startIndex) {
            for (let o = 0; o < (lastStart - startIndex)/4; o++) {
                activeUl = activeUl.parentNode;
            }
        }
        activeUl.appendChild(li);
        lastStart = startIndex;
    }
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
    if (activeLine.replace(headers, "").trim() == "Contents") {
        isContents = true;
    }
    else {
        var headerTitle = activeLine.replace(headers, "").trim();
        createElement("h" + String(headers.length), mdDiv, headerTitle, [
            {"name": "id", "value": headerTitle.replaceAll(".", "").replaceAll(" ", "-").toLowerCase()}
        ]); 
    }
}

function uls() {
    if (!isUls) {
        ulsItems = [];
        ulsItems.push(activeLine);
        isUls = true;
        return;
    }

    if (!activeLine.trim().startsWith("-")) {
        if (activeLine.trim() == "") {
            return;
        }
        isUls = false;
        mainIndex--;

        var lastStart = 0;
        var activeUl = createElement("ul", mdDiv);
        for (let i = 0; i < ulsItems.length; i++) {
            var item = ulsItems[i];
            if (item.trim() == "") continue;
            
            var startIndex = item.indexOf("-");
            if (startIndex == 1) startIndex = 0;

            var li = createElement("li", null, item.replace("-", "").trim())//badge(item.replace("-", "").trim());
            if (lastStart < startIndex) {
                activeUl = createElement("ul", activeUl);
            }
            else if (lastStart > startIndex) {
                for (let o = 0; o < (lastStart - startIndex)/4; o++) {
                    activeUl = activeUl.parentNode;
                }
            }

            activeUl.appendChild(li);
            lastStart = startIndex;
        }
        return;
    }

    ulsItems.push(activeLine);
}

function contents() {
    if (activeLine.startsWith("##")) {
        isContents = false;
        header();
    }
    else {
        contentsItems.push(activeLine);
    }
}

function label() {
    createElement("p", mdDiv, activeLine);

}

function raw() {
    mdDiv.innerHTML += activeLine;
}

function badge(str="") {
    if (str == "") {
        str = activeLine;
    }

    if (str[1] == "!") {
        var parts = str.split("]");
        var badgeUrl = parts[1].replace("(", "").replace(")", "");
        var hrefUrl = parts[2].replace("(", "").replace(")", "");
        var a = createElement("a", mdDiv, "", [
            {"name": "href", "value": hrefUrl},
            {"name": "target", "value": "_blank"}
        ]);
        createElement("img", a, "", [
            {"name": "src", "value": badgeUrl}
        ])
    }
    else if (str[1] == " " || str[1] == "x") {
        return str;
    }
    else {
        var parts = str.split("]");
        var title = parts[0].replace("[", "");
        var href = parts[1].replace("(", "").replace(")", "").toLowerCase();
        var numberS = href.split("-")[0];
        var number = "";
        for (let i = 0; i < numberS.length; i++) {
            if (numberS[i] == "#") continue;
            number += numberS[i] + ".";
        }
        var li = createElement("li", null, number);
        createElement("a", li, title, [
            {"name": "href", "value": href}
        ]);
        return li;
    }
}




function isMultiLine(index) {
    startIndex = activeLine.indexOf("```", index);
    endIndex = activeLine.indexOf("```", startIndex+1);

    if (endIndex == -1) {
        return true;
    }
    return false;
}

function addMultiLineCode() {
    figure = createElement("figure", mdDiv);
    pre = createElement("pre", figure);
    createElement("code", pre, multiLineCode, [
        {"name": "class", "value": "language-" + codeType}
    ]);
    multiLineCode = "";
}

