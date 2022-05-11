
function formatCode() {
    
    var pres = document.body.getElementsByTagName("pre");
    for (let i = 0; i < pres.length; i++) {
        var pre = pres[i];
        var clsList = pre.classList;

        if (clsList.contains("language-python")) {
            pre.innerHTML = formatPython(pre.innerHTML);
        }
        else if (clsList.contains("language-json")) {
            pre.innerHTML = formatJson(pre.innerHTML);
        }
        /*else if (clsList.contains("language-sql")) {
            pre.innerHTML = formatSql(pre.innerHTML);
        }*/
    }
}