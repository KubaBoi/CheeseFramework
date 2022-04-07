
function clearTable(table) {
    table.innerHTML = "";
}

function addRow(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("td", row, cells[i].text, cells[i].attributes);
    }
}

function addHeader(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        console.log(cells[i]);
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("th", row, cells[i].text, cells[i].attributes);
    }
}