
function clearTable(table) {
    table.innerHTML = "";
}

function addRow(table, arrayOfCells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < arrayOfCells.length; i++) {
        createElement("td", row, arrayOfCells[i]);
    }
}

function addHeader(table, arrayOfCells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < arrayOfCells.length; i++) {
        createElement("th", row, arrayOfCells[i]);
    }
}