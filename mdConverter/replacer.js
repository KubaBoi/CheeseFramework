
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
    },
    "len": function(vl){
        let len = vl.length;
        if (len > 3) return 3;
        return len;
    }
}

function rplcReg(str, reg, temp, maxIters=-1, dict={}) {
    // finds variable names from temp
    var tempVars = matchAll(temp, /\$[a-zA-Z0-9\.]+\$/g, /[\$]/g);

    var iter = 0;
    while (true) {
        if (iter == maxIters || iter > 1000) break;
        iter++;
        var tempCopy = temp;
        var match = reg.exec(str);
        if (match == null) break; // no more matches

        if (temp == "<a href='$url$' target=_blank>$url$</a>") {
            //console.log(match);
        }

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
        str = str.replaceAt(match.index, match[0], tempCopy);
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

// cool funkce
String.prototype.replaceAt = function(index, what, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + what.length);
}

function emojiImg(emoji) {
    if (EMOJIS[emoji] == null) return emoji;
    var emojiObj = createElement("img", null, "", [
        {"name": "src", "value": EMOJIS[emoji]},
        {"name": "class", "value": "emojiImg"}
    ]);

    return emojiObj.outerHTML;
}