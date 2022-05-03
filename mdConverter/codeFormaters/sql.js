
var sql_keywords = [
    "update",
    "select",
    "where",
    "and",
    "asc",
    "desc",
    "insert",
    "into",
    "create",
    "table",
    "values",
    "or",
    "drop",
    "is",
    "null",
    "join",
    "inner",
    "right",
    "left",
    "like",
    "not",
    "delete"
]

function formatSql(str) {
    str = strings(str, "'");

    for (let i = 0; i < sql_keywords.length; i++) {
        str = str.replace(sql_keywords[i], `<label class='keywords'>${sql_keywords[i]}</label>`);
    }

    return str;
}