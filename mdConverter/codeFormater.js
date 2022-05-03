
function formatCode() {
    
    var codes = document.body.getElementsByTagName("code");
    for (let i = 0; i < codes.length; i++) {

        clsList = codes[i].classList;
        if (clsList.contains("language-python")) {
            codes[i].innerHTML = formatPython(codes[i].innerHTML);
        }
    }
    return "";
}