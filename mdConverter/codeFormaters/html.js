
function formatHtml(str) {

    var lines = str.split("\n");
    str = "";

    for (let i = 0; i < lines.length; i++) {
        var line = lines[i];
        
        line = line.replaceAll("<", "&lt;");
        line = line.replaceAll(">", "&gt;");

        line = line.replaceAll("&lt;script", "&lt;<span class=keyword>script</span>");
        line = line.replaceAll("&lt;/script&gt;", "&lt;<span class=keyword>/script</span>&gt;");

        line = rplcReg(line, /\&lt;\!--(?<comment>.*)--\&gt;/, "<span class=comment>&lt;!--$comment$--&gt;</span>");

        str += line + " <br>";
    }
    return str;
}