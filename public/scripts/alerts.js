
function showErrorAlert(error, alertTime=0) {
    showWrongAlert(error.NAME, `${error.CODE}<br>${error.DESCRIPTION}`, alertTime);
}

function showOkAlert(title, message, alertTime=0) {
    if (alertTime == 0) {
        showAlert(title, message, "divOkAlert",
                {"name": "okShowAlert", "duration": "0.5s"},
                {"name": "okHideAlert", "duration": "0.5s"}
            );
    } else {
        showTimerAlert(title, message, alertTime, "divOkAlert",
                {"name": "okShowAlert", "duration": "0.5s"},
                {"name": "okHideAlert", "duration": "0.5s"}
            );
    }
}

function showWrongAlert(title, message, alertTime=0) {
    if (alertTime == 0) {
        showAlert(title, message, "divWrongAlert",
                {"name": "okShowAlert", "duration": "0.5s"},
                {"name": "okHideAlert", "duration": "0.5s"}
            );
    } else {
        showTimerAlert(title, message, alertTime, "divWrongAlert",
                {"name": "okShowAlert", "duration": "0.5s"},
                {"name": "okHideAlert", "duration": "0.5s"}
            );
    }
}

function showTimerAlert(title, message, time, divClass="alertDiv", 
    animation={"name":"showAlert","duration":"0.5s"},
    closeAnimation={"name":"hideAlert","duration":"0.5s"}) {
        
    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": divClass},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title, [{"name":"class","value":"alertH2"}]);
    createElement("label", alertDiv, message, [{"name":"class","value":"alertLabel"}]);

    alertDiv.style.animationName = animation.name;
    alertDiv.style.animationDuration = animation.duration;
    alertDiv.style.animationFillMode = "both";

    setTimeout(function() { hideAlert(true, closeAnimation) }, time);
}

function showAlert(title, message, divClass="alertDiv", 
    animation={"name":"showAlert","duration":"0.5s"},
    closeAnimation={"name":"hideAlert","duration":"0.5s"}) {
        
    var alertDiv = createElement("div", document.body, "", 
    [
        {"name": "class", "value": divClass},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title, [{"name":"class","value":"alertH2"}]);
    createElement("label", alertDiv, message, [{"name":"class","value":"alertLabel"}]);
    createElement("button", alertDiv, "OK",
    [
        {"name": "class", "value": "alertOKButton"},
        {"name": "onclick", "value": "hideAlert(true, {'name':'" + closeAnimation.name + "','duration':'" + closeAnimation.duration + "'})"}
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
        {"name": "class", "value": divClass},
        {"name": "id", "value": "alertDiv"}
    ]);

    createElement("h2", alertDiv, title, [{"name":"class","value":"alertH2"}]);
    createElement("label", alertDiv, message, [{"name":"class","value":"alertLabel"}]);
    createElement("button", alertDiv, "OK",
    [
        {"name": "class", "value": "alertOKButton"},
        {"name": "onclick", "value": "hideAlert(true, {'name':'" + closeAnimation.name + "','duration':'" + closeAnimation.duration + "'})"}
    ]);
    createElement("button", alertDiv, "Cancel",
    [
        {"name": "onclick", "value": "hideAlert(false, {'name':'" + closeAnimation.name + "','duration':'" + closeAnimation.duration + "'})"},
        {"name": "class", "value": "alertCancelButton"}
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