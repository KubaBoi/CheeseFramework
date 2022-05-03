
async function getMd(url) {
    var response = await callEndpoint("GET", url);
    convert(response);
}