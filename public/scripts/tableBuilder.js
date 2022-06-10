
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
    return row;
}

function addHeader(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("th", row, cells[i].text, cells[i].attributes);
    }
    return row;
}

function insertRow(table, rowIndex, cells, rowAttributes=[]) {
    var row = table.insertRow(rowIndex);

    for (let i = 0; i < rowAttributes.length; i++) {
        row.setAttribute(rowAttributes[i].name, rowAttributes[i].value);
    }

    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].attributes) {
            cells[i].attributes = [];
        }
        createElement("td", row, cells[i].text, cells[i].attributes);
    }

    return row;
}