import { createElement } from "https://kubaboi.github.io/CheeseFramework/public/scripts/elementManager.mjs";

export function clearTable(table) {
    table.innerHTML = "";
}

export function addRow(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("td", row, cells[i].text, cells[i].attributes);
    }
}

export function addHeader(table, cells, rowAttributes=[]) {
    var row = createElement("tr", table, "", rowAttributes);
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].attributes)
            cells[i].attributes = [];
        createElement("th", row, cells[i].text, cells[i].attributes);
    }
}