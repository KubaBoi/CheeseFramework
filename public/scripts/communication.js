debug = true;
function sendPost(url, jsonRequest, output, callback) {
    var xmlHttp = new XMLHttpRequest(); 
    
    if (output) console.log("SENDING", nowTime(), url, jsonRequest);

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            json = JSON.parse(this.responseText);
            if(output) console.log("RESPONSE", nowTime(), url, json);
            if(callback) callback(json);
        }
    };
    xmlHttp.open("POST", url);
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(jsonRequest);
}

function sendGet(url, output, callback) {
    var xmlHttp = new XMLHttpRequest();

    if (output) console.log("SENDING", nowTime(), url);

    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4) {
            try {
                json = JSON.parse(this.responseText);
            }
            catch {
                json = this.responseText;
            }
            if(output) console.log("RESPONSE", nowTime(), url, json);
            if(callback) callback(json);
        }
    }
    xmlHttp.open("GET", url); 
    xmlHttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8;");
    xmlHttp.send();
}

function callEndpoint(type, url, request=null) {
    if (type == "GET") {
        return new Promise(resolve => {
            sendGet(url, debug, function(response) {
                resolve(response);
            });
        });
    } else if (type == "POST") {
        var request = JSON.stringify(request);
        return new Promise(resolve => {
            sendPost(url, request, debug, function(response) {
                resolve(response);
            });
        });
    }
    else {
        console.log("Unknown type (Had to be GET or POST");
        console.log(type);
        return null;
    }
}

function nowTime() {
    var now = new Date();
    var date = new Date(now.getTime());

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

}