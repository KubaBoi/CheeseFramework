
function formatPython(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // multiline comment
        rsp = multiLine(lines, '"""', '"""', "multiline_comment", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }
        // cheese annotations
        rsp = multiLine(lines, "#@", ";", "cheese_annotation", i);
        if (rsp[2]) {
            str += rsp[0];
            i = rsp[1];
            continue;
        }

        // from
        line = rplcReg(line, /^(?<kwFrom>from) (?<from>.+)/, "<span class=keyword>$kwFrom$</span> <span class=class>$from$</span> ", 1)
        //import
        line = rplcReg(line, /(?<kwImport>import) (?<import>.*)/,  "<span class=keyword>$kwImport$</span> <span class=class>$import$</span>", 1)
        // python annotation
        line = rplcReg(line, /(?<!#)(?<annot>@.*)/, "<span class=annotation>$annot$</span>", 1);
        // one line comments
        line = rplcReg(line, /(?<!\>)(?<comment>#.*)/, "<span class=comment>$comment$</span>", 1);

        //string
        line = rplcReg(line, /(?<str>"\w*")/g, "<span class=string>$str$</span>", 3);

        // class
        line = rplcReg(line, /class (?<class>\w+)\((?<parentClass>\w+)\):/, 
                    "<span class=keyword>class</span> <span class=class>$class$</span>(<span class=class>$parentClass$</span>):", 1,
                    {
                        "parentClass.args": function(vl){return args(vl, "class")}
                    });
        // def
        line = rplcReg(line, /def (?<def>\w+)\((?<variables>.*)\):/, 
                    "<span class=keyword>def</span> <span class=function>$def$</span>($variables.args$):", 1,
                    {
                        "variables.args": function(vl){return args(vl)}
                    });

        str += line + "<br>";
    }

    return str;
}

function multiLine(lines, start, end, cls, index) {
    var line = lines[index];
    if (!line.trim().startsWith(start)) return [line, index, false];

    // check if multiline is not in one line
    reg = RegExp(`${start}.*${end}`);
    if (reg.test(line)) {
        return [`<span class=${cls}>${line}</span><br>`, index, true];
    }
    
    var newStr = "";
    newStr += `<span class=${cls}>${line}<br>`;
    
    line = lines[++index];
    while (!line.trim().endsWith(end)) {
        newStr += line + "<br>";
        line = lines[++index];
    }
    newStr += `${line}</span><br>`;
    return [newStr, index, true];
}

function args(args, cls="function_variable") {
    argsArray = args.split(",");
    newStr = "";
    for (let i = 0; i < argsArray.length; i++) {
        newStr += `<span class=${cls}>${argsArray[i].trim()}</span>`
        if (i < argsArray.length - 1) {
            newStr += ", ";
        }
    }
    return newStr;
}
