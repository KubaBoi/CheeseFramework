
function formatPython(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        console.log(line);
        // from
        line = rplcReg(line, /(?<!.*)(?<kwFrom>from) (?<from>.+)/, "<span class=keyword>$kwFrom$</span> <span class=class>$from$</span> ", 1)
        //import
        line = rplcReg(line, /(?<kwImport>import) (?<import>.*)/,  "<span class=keyword>$kwImport$</span> <span class=class>$import$</span>", 1)
        // cheese annotations
        line = rplcReg(line, /(?<cheeseAnnot>#@.*;)/, "<span class=cheese_annotation>$cheeseAnnot$</span>", 1);
        // one line comments
        line = rplcReg(line, /^(?!@#)(?<comment>#.*)/, "<span class=comment>$comment$</span>", 1);
        // python annotation
        line = rplcReg(line, /^(?!@#)(?<annot>@.*)/, "<span class=annotation>$annot$</span>", 1);
        
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
        console.log(line);
    }

    return str;
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
