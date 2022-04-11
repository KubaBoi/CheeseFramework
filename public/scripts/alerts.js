

function showAlert(title, message, divClass="alertDiv", 
    animation={"name":"showAlert","duration":"0.5s"},
    closeAnimation={"name":"hideAlert","duration":"0.5s"}) {
    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": "alertDiv"},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title);
    createElement("label", alertDiv, message);
    createElement("button", alertDiv, "OK",
    [
        {"name": "onclick", "value": "hideAlert(true, " + closeAnimation + ")"}
    ]);

    alertDiv.style.animationName = animation.name;
    alertDiv.style.animationDuration = animation.duration;
    alertDiv.style.animationFillMode = "both";
}

function showConfirm(title, message, ifOk, divClass="alertDiv",
    animation={"name":"showAlert","duration":"0.5s"}, 
    closeAnimation={"name":"hideAlert","duration":"0.5s"}) {

    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": "alertDiv"},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title);
    createElement("label", alertDiv, message);
    createElement("button", alertDiv, "OK",
    [
        {"name": "onclick", "value": "hideAlert(true, " + closeAnimation + ")"}
    ]);
    createElement("button", alertDiv, "Cancel",
    [
        {"name": "onclick", "value": "hideAlert(false, " + closeAnimation + ")"},
        {"name": "class", "value": "cancelButton"}
    ]);

    alertDiv.style.animationName = animation.name;
    alertDiv.style.animationDuration = animation.duration;
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
function hideAlert(dec, animation) {
    var alertDiv = document.getElementById("alertDiv");
    alertDiv.style.animationName = animation.name;
    alertDiv.style.animationDuration = animation.duration;
    alertDiv.style.animationFillMode = "both";
    decision = dec;

    setTimeout(removeAlert, 400);
}

function removeAlert() {
    var alertDiv = document.getElementById("alertDiv");
    alertDiv.parentNode.removeChild(alertDiv);
}