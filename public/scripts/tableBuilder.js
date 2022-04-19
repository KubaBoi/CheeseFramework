/**
* @deprecated Since version 1.0. Will be deleted in version 3.0. Use tableBuilder.mjs instead.
*/
console.warn("WARNING! tableBuilder.js is deprecated. Use tableBuilder.mjs instead");

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
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("th", row, cells[i].text, cells[i].attributes);
    }
}