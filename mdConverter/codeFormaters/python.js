
function formatPython(str) {
    
    //console.log(str);
    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        //console.log(line);
        line = rplcReg(line, /(?<cheeseAnnot>#@.*;)/, "<span class=cheese_annotation>$cheeseAnnot$</span>", 1);

        line = rplcReg(line, /^(?!@#)(?<comment>#.*)/, "<span class=comment>$comment$</span>", 1);
        
        line = rplcReg(line, /class (?<class>\w+)\((?<parentClass>\w+)\):/, 
                    "<span class=keywords>class</span> <span class=class>$class$</span>(<span class=class>$parentClass$</span>):", 1);
        
        line = rplcReg(line, /def (?<def>\w+)\((?<variables>.*)\):/, 
                    "<span class=keywords>def</span> <span class=function>$def$</span>(<span class=function_variables>$variables$</span>):", 1);
        
        line = rplcReg(line, /^(?!@#)(?<annot>@.*)/, "<span class=annotation>$annot$</span>", 1);

        str += line + "<br>";
    }

    return str;
}
