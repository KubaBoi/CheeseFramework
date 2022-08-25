
var varsAsm = ["DB", "DW", "DD", "DQ", "DT", "RESB", "RESW", "RESD", "TIMES"];
var typesAsm = ["BYTE", "WORD", "DWORD", "QWORD", "TBYTE"];
var instAsm = ["MOV", "JMP", "JZ", "CMP", "LODSB", "LODSW", "LODSD", "INC", "RET"];
var regsAsm = ["AL", "AH", "SI", "DI", "AX", "EAX", "RAX"];

function formatAsm(str) {

    var lines = str.split("\n");
    str = "";
    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];

        // one line comments
        line = rplcReg(line, /(?<!\>)(?<comment>;.*)/, "<span class=comment>$comment$</span>", 1);
     
        for (let o = 0; o < varsAsm.length; o++) {
            let vr = varsAsm[o];
            let re = new RegExp(`(?<vr>${vr}|${vr.toLowerCase()}) (?<value>[a-zA-Z0-9]+)`);
            line = rplcReg(line, re, `<span class=keyword>$vr.upperCase$</span> <span class=class>$value$</span>`, 1);
        }

        for (let o = 0; o < typesAsm.length; o++) {
            let type = typesAsm[o];
            let re = new RegExp(` (?<type>${type}|${type.toLowerCase()}) `);
            line = rplcReg(line, re,  " <span class=function_variable>$type.lowerCase$</span> ", 1);
        }

        for (let o = 0; o < instAsm.length; o++) {
            let inst = instAsm[o];
            let re = new RegExp(`(?<inst>${inst}|${inst.toLowerCase()})`);
            line = rplcReg(line, re,  "<span class=multiline_comment>$inst.upperCase$</span>", 1);
        }

        for (let o = 0; o < regsAsm.length; o++) {
            let reg = regsAsm[o];
            let re = new RegExp(` (?<reg>${reg}|${reg.toLowerCase()}) `);
            line = rplcReg(line, re,  " <span class=annotation>$reg.upperCase$</span> ", 1);

            re = new RegExp(` (?<reg>${reg}|${reg.toLowerCase()}),`);
            line = rplcReg(line, re,  " <span class=annotation>$reg.upperCase$</span>,", 1);
        }

        str += line + "<br>";
    }

    return str;
} 