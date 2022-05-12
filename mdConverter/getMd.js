
var mdUrl = "";
async function getMd(url) {
    mdUrl = url;
    var response = await callEndpoint("GET", url);
    convert(response);
}

async function source() {
    var contentsDiv = document.getElementById("contentsId");
    var sourceDiv = document.getElementById("source");
    if (sourceDiv == null) {
        contentsDiv.style.visibility = "hidden";
        var d = document.getElementById("d");
        var sourceDiv = createElement("div", d, "", [
            {"name": "id", "value": "source"},
            {"name": "class", "value": "main"}
        ]);

        var response = await callEndpoint("GET", mdUrl);
        if (response.ERROR == null) {
            createElement("pre", sourceDiv, response);
        }
    }
    else {
        sourceDiv.remove();
        contentsDiv.style.visibility = "visible";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == "p") {
        source();
    }
}, false);