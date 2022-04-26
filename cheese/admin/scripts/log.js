debug = false;

function getActiveLog() {
    url = "/admin/getActiveLog";
    
    return new Promise(resolve => {
        sendGet(url, debug, function(response){
            resolve(response);
        });  
    });
}

function deleteLog(log) {
    url = "/admin/deleteLog?log=" + log;
    
    return new Promise(resolve => {
        sendGet(url, debug, function(response){
            resolve(response);
        });  
    });
}

async function buildLogTable() {
    response = await getActiveLog();
    if (!response.ERROR) {
        var table = document.querySelector("#logTable");
        table.innerHTML = "";
        table.innerHTML = response.RESPONSE.LOG;

        var label = document.querySelector("#logDesc");
        if (label.tagName == "LABEL") {
            label.innerHTML = "<button onclick=\"location='/admin/logs'\">All logs</button>	&nbsp;" +
            "<button onclick=\"location='/admin/activeLog.html'\">Full log</button>";
        }
        else {
            label.innerHTML = "Cheese log - " + response.RESPONSE.LOG_DESC + " - <label class='okGreen'>ACTIVE</label>";
        }
    }
}

if (typeof dontRunScript == "undefined") updateInterval = setInterval(update, 1000);
var oldC = 0;
var oldScrollHeight = 0;
function update() {
    buildLogTable();
    element = document.getElementById("log");
    var a = element.scrollTop;
    var b = element.scrollHeight - element.clientHeight;
    if (oldC < 500 && oldScrollHeight != element.scrollHeight) {
        element.scrollTop = b;
    }

    oldScrollHeight = element.scrollHeight;
    oldC = b - a;
}

async function deleteFile(log) {
    response = await deleteLog(log);
    if (!response.ERROR) {
        alert("Log " + log + " was deleted")
        location.reload();
    }
    else {
        alert("An error occurred: " + response.ERROR);
    }
}