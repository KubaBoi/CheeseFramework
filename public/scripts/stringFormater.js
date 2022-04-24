function stringShorter(str, maxChars) {
    if (str.length > maxChars) 
        return str.slice(0, maxChars) + "...";
    return str;
}