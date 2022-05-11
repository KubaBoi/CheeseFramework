
function formatJson(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // multiline comment
        rsp = multiLine(lines, "/*", "*/", "multiline_comment", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }

        line = rplcReg(line, /(?<key>".*"):(?<value>.*),*/, "<span class=keyword>$key$</span>: $value.getType$", 1,
        {
            "value.getType": function(vl){return getType(vl);}
        });

        // one line comments
        line = rplcReg(line, /(?<comment>\/\/.*)/, "<span class=comment>$comment$</span>", 1);

        str += line + "<br>";
    }

    return str;
}

function getType(value) {
    var regStr = RegExp(/".*"/);
    var regNum = RegExp(/\d+/);

    var cls = "bool";
    if (regStr.test(value)) cls = "string";
    else if (regNum.test(value)) cls = "number";

    var comma = "";
    if (value.trim().endsWith(",")) {
        comma = ",";
        value = value.slice(0, -1); 
    }

    var bracket = "";
    if (value.trim().startsWith("{")) {
        bracket = "{";
        value = value.replace("{", "");
    }
    var bracket = "";
    if (value.trim().startsWith("[")) {
        bracket = "[";
        value = value.replace("[", "");
    }

    return `${bracket}<span class=${cls}>${value.trim()}</span>${comma}`;
}
