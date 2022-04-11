function showAlert(title, message) {
    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": "alertDiv"},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title);
    createElement("label", alertDiv, message);
    createElement("button", alertDiv, "OK",
    [
        {"name": "onclick", "value": "hideAlert()"}
    ]);

    alertDiv.style.animationName = "showAlert";
    alertDiv.style.animationDuration = "0.5s";
    alertDiv.style.animationFillMode = "both";
}

function showConfirm(title, message, ifOk) {
    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": "alertDiv"},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title);
    createElement("label", alertDiv, message);
    createElement("button", alertDiv, "OK",
    [
        {"name": "onclick", "value": "hideAlert()"}
    ]);
    createElement("button", alertDiv, "Cancel",
    [
        {"name": "onclick", "value": "hideAlert(false)"},
        {"name": "class", "value": "cancelButton"}
    ]);

    alertDiv.style.animationName = "showAlert";
    alertDiv.style.animationDuration = "0.5s";
    alertDiv.style.animationFillMode = "both";
    decision = null;

    doIfOk(ifOk);
}

function doIfOk(ifOk) {
    if (decision == null) {
        setTimeout(doIfOk, 100, ifOk);
        return;
    }
    if (decision == false) {
        decision = null;
        return;
    }
    decision = null;
    ifOk();
}

var decision = null;
function hideAlert(dec=true) {
    var alertDiv = document.getElementById("alertDiv");
    alertDiv.style.animationName = "hideAlert";
    alertDiv.style.animationDuration = "0.5s";
    alertDiv.style.animationFillMode = "both";
    decision = dec;

    setTimeout(removeAlert, 400);
}

function removeAlert() {
    var alertDiv = document.getElementById("alertDiv");
    alertDiv.parentNode.removeChild(alertDiv);
}