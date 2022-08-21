
var debug = false;

function convert(str) {
    var mdDiv = document.getElementById("md");
    clearTable(mdDiv);
    
    // urls
    //str = rplcReg(str, /(?<![\"\>\'\=\`])(?<url>https*\:\/\/.*)[ |$]{1}(?![\"\<\'\`])/, "<a href='$url$' target=_blank>$url$</a> ");
    str = rplcReg(str, /(?<url>(?<!"|'|(|>)https*\:\/\/[a-zA-Z0-9\/\.\:\%]*)(?!"|'|)|<)/, '<a href="$url.strip$" target=_blank>$url.strip$</a>');

    // hrefs within md document -> [title](#headerId) 
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>#.*)\)/g, "<a href=$href.lowerCase$>$title$</a>");
    
    // hrefs to another sites -> [title](url)
    str = rplcReg(str, /\[(?<title>.+)\]\((?<href>.*)\)/g, "<a href=$href$ target=_blank>$title$</a>");
    
    // images -> ![title](imgSrc)
    str = rplcReg(str, /\!\[(?<title>.*)\]\((?<src>.*)\)/g, "<img src=$src$ title=$title$>");
    
    // one line codes -> `code` | ```code```
    str = rplcReg(str, /\`{1,3}(?<code>[a-zA-Z0-9\#\@\&\?\/\:\=\"\'\(\)\.\,\*\[\]\%\{\} ]+)\`{1,3}/g, "<code>$code$</code>");
    
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

    str = headers(str);

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

    contents();
    changeWelcome();
    images();
}

function headers(str) {
    var lines = str.split("\n");

    var newStr = "";
    var paragraph = "";
    var parId = "";

    var mouseEvents = ""; // "onmouseover=onScrollDiv(this) onmousemove=onScrollDiv(this)";

    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.startsWith("#")) {
            if (paragraph != "") {
                newStr += `<div id=${parId}Id ${mouseEvents}>${paragraph}</div>`;
                paragraph = "";
            }
            parId = rplcReg(line, /((?<!\>)(?<hdr>#+)) (?<title>.*)/g, "$title.id$");
            line = rplcReg(line, /((?<!\>)(?<hdr>#+)) (?<title>.*)/g, "<h$hdr.len$ id=$title.id$>$title$</h$hdr.len$>");
            if (line.startsWith("<h1") || line.startsWith("<h2")) {
                line += "<hr>";
            }
        }
        paragraph += line + "\n";
    }
    newStr += `<div id=${parId}Id ${mouseEvents}>${paragraph}</div>`;
    return newStr;
}

function contents() {
    var contentsDiv = document.getElementById("contentsId");
    if (contentsDiv == null) return;
    contentsDiv.remove();
    contentsDiv.classList.add("contents");

    var cont = contentsDiv.innerHTML;
    var lines = cont.split("<br>")[2].split("</li>");

    contentsDiv.innerHTML = "<p>Contents</p>";
    
    for (let i = 0; i < lines.length; i++) {
        var index = rplcReg(lines[i], /.*\<a href="#(?<index>\d+)-.*/, "$index$");
        var dotIndex = "";
        for (let o = 0; o < index.length; o++) {
            dotIndex += index[o] + ".";
        }
        var line = lines[i].split("<a");
        contentsDiv.innerHTML += `${line[0]}${dotIndex} <a${line[1]}</li>`;
    }

    document.body.appendChild(contentsDiv);
}

function images() {
    var imgs = document.body.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        if (!img.classList.contains("emojiImg")) {
            img.classList.add("contentImg");
        }
    }
}