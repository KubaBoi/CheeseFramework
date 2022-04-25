// startArray are divs that are nnecessary for first run
// divArray are others that do not need to be now
async function loadPage(startArray, doAfter=null, afterArray=[]) {
    for (let i = 0; i < startArray.length; i++) {
        var name = startArray[i];
        var response = await callEndpoint("GET", "/webParts/" + name + ".html")
        if (!response.ERROR) {
            var div = document.getElementById(name + "Div");
            div.innerHTML = response;
        }
    }

    if (doAfter != null)
        doAfter();
    
    for (let i = 0; i < afterArray.length; i++) {
        var name = afterArray[i];
        var response = await callEndpoint("GET", "/webParts/" + name + ".html")
        if (!response.ERROR) {
            var div = document.getElementById(name + "Div");
            div.innerHTML = response;
        }
    }
}

async function getHtml(name, path, parentId, attributeClass="") {
    var response = await callEndpoint("GET",
         "/webParts/" + path + name + ".html")
    if (!response.ERROR) {
        var parent = document.getElementById(parentId);
        var div = createElement("div", parent, "", 
        [
            {"name": "id", "value": name + "Div"},
            {"name": "class", "value": attributeClass} 
        ]);
        div.innerHTML = response;
        return div;
    }
    else {
        return null;
    }
}