
function formatCode() {
    
    var codes = document.body.getElementsByTagName("code");
    for (let i = 0; i < codes.length; i++) {

        clsList = codes[i].classList;
        if (clsList.contains("language-python")) {
            codes[i].innerHTML = formatPython(codes[i].innerHTML);
        }
        else if (clsList.contains("language-json")) {
            codes[i].innerHTML = formatJson(codes[i].innerHTML);
        }
        else if (clsList.contains("language-sql")) {
            codes[i].innerHTML = formatSql(codes[i].innerHTML);
        }
    }
    return "";
}