
var debug = false;

function convert(str) {
    var mdDiv = document.getElementById("md");
    var contentsDiv = document.getElementById("contents");
    clearTable(mdDiv);
    clearTable(contentsDiv);
    
    // hrefs within md document -> [title](#headerId) 
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>#.*)\)/g, "<a href=$href.lowerCase$>$title$</a>");
    
    // hrefs to another sites -> [title](url)
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>.*)\)/g, "<a href=$href$ target=_blank>$title$</a>");
    
    // images -> ![title](imgSrc)
    str = rplcReg(str, /\!\[(?<title>.*)\]\((?<src>.*)\)/g, "<img src=$src$ title=$title$>");
    
    // one line codes -> ```code```
    // no space
    str = rplcReg(str, /\`{3}(?<code>[a-zA-Z0-9\#\@\&\?\/\:\=]+)\`{3}/g, "<code>$code$</code>");
    // with space
    str = rplcReg(str, /\`{3}(?<code>.+)\`{3}/g, "<code>$code$</code>");
    
    // check boxes -> [ ] || [x]
    str = rplcReg(str, /\[(?<checkBox>[ x])\]/g, "$checkBox.checkBox$");

    // contents
    //str = rplcReg()

    // list -> - something
    str = rplcReg(str, /^((?<![a-zA-Z0-9])(?<spaces>[ ]*)- )(?<li>.*)/gm, "<li style=margin-left:$spaces.length$%;>$li$</li>");

    //str = str.rplcRegAll(/(?<!\")[ ]*https\:\/\/.*(?=!<\/) /g, urls);
    str = rplcReg(str, /\`{3}(?<codeType>[a-z]+)/g, "<pre class=language-$codeType$>");
    str = rplcReg(str, /\`{3}/g, "</pre>");

    mdDiv.innerHTML = str;

    formatCode();

    str = mdDiv.innerHTML;

    // headers -> ## Header
    str = rplcReg(str, /(?<hdr>#+) (?<title>.*)/g, "<h$hdr.length$ id=$title.id$>$title$</h$hdr.length$>");

    /** emojis -> :emoji:
     * list in emojis.js (https://github.com/KubaBoi/CheeseFramework/blob/webServices/mdConverter/emojis.js)
     * credit https://github.com/privatenumber/gh-emojis
     */
    str = rplcReg(str, /:(?<emoji>[a-z0-9_\-\+]+):/g, "$emoji.emoji$");

    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.match(/^(\<)/) == null) {
            if (i < lines.length-1) {
                if (line == "" && lines[i+1] != "") {
                    str += "<br><br>";
                    continue;
                }
                else if (lines[i+1] == "") {
                    str += `${line}<br><br>`
                    i++;
                    continue;
                }
            }
            str += line;
        }
        else {
            if (line.match(/\<pre.*/) != null) {
                while (line.match(/\<\/pre\>/) == null) {
                    str += line + "\n";
                    line = lines[++i];
                }
            }
            str += line;
        }
    }

    mdDiv.innerHTML = str;
}

//console.log("http://github.com/KubaBoi/CheeseFramework/tree/development</code>".match(/(https*\:\/\/.* *)(\<\/code\>)$/g));

var preFuncs = {
    "lowerCase": function(vl){return vl.toLowerCase();},
    "upperCase": function(vl){return vl.toUpperCase();},
    "emoji": function(vl){return emojiImg(vl);},
    "id": function(vl){
        vl = vl.replaceAll(/:[a-z0-9_]+:/g, "");
        vl = vl.trim().replaceAll(" ", "-").replaceAll(".", "").toLowerCase();
        return vl;
    },
    "checkBox": function(vl){
        if (vl == "x") return emojiImg("heavy_check_mark");
        return emojiImg("x");
    }
}

function rplcReg(str, reg, temp, maxIters=-1, dict={}) {
    // finds variable names from temp
    var tempVars = matchAll(temp, /\$[a-zA-Z0-9\.]+\$/g, /[\$]/g);

    var iter = 0;
    while (true) {
        if (iter == maxIters) break;
        iter++;
        var tempCopy = temp;
        var match = reg.exec(str);
        if (match == null) break; // no more matches

        //runs through all variables from temp
        for (let i = 0; i < tempVars.length; i++) {
            // searching for advanced variables (title.length...)
            var tempVar = tempVars[i].split("."); 
            var var0 = tempVar[0];
            var value = match.groups[var0];
            
            // runs through all variable parameters (.length, .id, .emoji ...)
            for (let vrI = 1; vrI < tempVar.length; vrI++) {
                value = value[tempVar[vrI]]; //finds matching parameter
                
                // if parameter does not exists
                if (value == undefined) {
                    var subFunc = dict[tempVars[i]]; // try to find function from user defined functions

                    // if user did not define this function
                    // try to find function from pre defined functions
                    if (subFunc == undefined) {
                        subFunc = preFuncs[tempVar[vrI]]; // when even this does not match that crash
                    }
                    // rewrite value to its default
                    value = match.groups[var0];
                    // runs found function
                    value = subFunc(value);
                }
            }
            // inserts value
            tempCopy = tempCopy.replace(`\$${tempVars[i]}\$`, value);
        }
        str = str.replace(match[0], tempCopy);
    }
    return str;
}

function matchFirst(str, reg, replace="", to="") {
    var arr = str.match(reg);
    if (arr == null) return str;
    if (replace == "") return arr[0];
    return arr[0].replaceAll(replace, to);
}

function matchAll(str, reg, replace="", to="") {
    var arr = str.match(reg);
    if (arr == null) return [];
    if (replace == "") return arr;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replaceAll(replace, to);
    }
    return arr;
}

function emojiImg(emoji) {
    if (EMOJIS[emoji] == null) return emoji;
    var emojiObj = createElement("img", null, "", [
        {"name": "src", "value": EMOJIS[emoji]},
        {"name": "class", "value": "emojiImg"}
    ]);

    return emojiObj.outerHTML;
}