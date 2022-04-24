var testingDoubleClick = false;
var testingDoubleClickTimeout = null;

function sglC(func) {
    clickTest(0, func);
}

function dblC(func) {
    clickTest(1, func);
}

function clickTest(type, func) {
    if (!testingDoubleClick) {
        testingDoubleClick = true;
        var wanted = true;
        if (type != 0) wanted = false;
        testingDoubleClickTimeout = setTimeout(function() {singleClickDone(wanted, func);}, 300);
    }
    else {
        if (type == 1) doubleClickDone(func);
        clearTimeout(testingDoubleClickTimeout);
        testingDoubleClickTimeout = null;
        testingDoubleClick = false;
    }
}

function singleClickDone(wanted, func) {
    if (wanted) func();

    testingDoubleClick = false;
    testingDoubleClickTimeout = null;
}

function doubleClickDone(func) {
    func();
}