
function clearTable(table) {
    table.innerHTML = "";
}

function addRow(table, arrayOfCells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < arrayOfCells.length; i++) {
        createElement("td", arrayOfCells[i], row);
    }
}

function addHeader(table, arrayOfCells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < arrayOfCells.length; i++) {
        createElement("th", arrayOfCells[i], row);
    }
}