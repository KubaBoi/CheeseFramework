
async function getMd(url) {
    var response = await callEndpoint("GET", url);
    var converter = new Markdown.Converter();
    var html = converter.makeHtml(response);
    document.getElementById('output').innerHTML = html;
    lastModifiedDate = fileToLoad.lastModifiedDate;
}