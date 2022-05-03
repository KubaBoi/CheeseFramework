
var json_keywords = ["{", "}", "[", "]", "(", ")"];

function formatJson(str) {
    str = strings(str);

    for (let i = 0; i < json_keywords.length; i++) {
        str = str.replace(json_keywords[i], `<label class='keywords'>${json_keywords[i]}</label>`);
    }

    return str;
}