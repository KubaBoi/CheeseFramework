function urlify(str) {
    //return str;
    str = searchHttp(str, "https://");
    str = searchHttp(str, "http://");
    return str;
}

function searchHttp(str, reg, index=0) {
    startIndex = str.indexOf(reg, index);
    if (startIndex == -1) {
        return str;
    }

    if (startIndex > 6) {
        hrefIndex = str.indexOf("href=", startIndex-6, startIndex);
        if (hrefIndex != -1) {
            return searchHttp(str, reg, startIndex+reg.length);
        }
    }
    if (startIndex > 5) {
        srcIndex = str.indexOf("src=\"", startIndex-5, startIndex);
        if (srcIndex != -1) {
            return searchHttp(str, reg, startIndex+reg.length);
        }
    }
    if (startIndex > 1) {
        srcIndex = str.indexOf(">", startIndex-1, startIndex);
        if (srcIndex != -1) {
            return searchHttp(str, reg, startIndex+reg.length);
        }
    }

    endIndex = str.indexOf(" ", startIndex);
    if (endIndex == -1) {
        endIndex = str.length;
    }
    url = str.substring(startIndex, endIndex);
    ahref = "<a href=\"" + url + "\">" + url + "</a>";
    newStr = str.substring(0, startIndex) + ahref + str.substring(endIndex, str.length);
    return searchHttp(newStr, reg, startIndex + ahref.length);
}

function formatEmoji(str) {
    var newStr = "";
    var emoji = "";

    for (let i in str) {
        chr = str[i];
        if (emoji == "") {
            if (chr == ":") {
                emoji += chr;
                continue
            }
        } else {
            emoji += chr;
            if (chr == " " || chr == "/") {
                newStr += emoji;
                emoji = "";
            }
            else if (chr == ":") {
                emojiKey = emoji.substring(1, emoji.length-1);
                var emojiObj = createElement("img", null, "", [
                    {"name": "src", "value": EMOJIS[emojiKey]},
                    {"name": "class", "value": "emojiImg"}
                ]);
                newStr += emojiObj.outerHTML;
                emoji = "";
                continue;
            } 
            else if (i == str.length-1) {
                newStr += emoji;
                emoji = "";
                continue;
            }
            else {
                continue;
            } 
        }

        newStr += chr;
    }

    return newStr;
}