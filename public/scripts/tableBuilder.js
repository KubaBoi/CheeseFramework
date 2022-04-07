
function clearTable(table) {
    table.innerHTML = "";
}

function addRow(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        createElement("td", row, cells[i].text, cells[i].attributes);
    }
}

function addHeader(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        createElement("th", row, cells[i]);
    }
}