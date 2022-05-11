
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
    str = rplcReg(str, /((?<!\>)(?<hdr>#+)) (?<title>.*)/g, "<h$hdr.length$ id=$title.id$>$title$</h$hdr.length$>");

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
