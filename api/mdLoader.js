var file = null;
var lastModifiedDate = null;
var paused = false;

function shouldReload() {
    return file != null &&
        (lastModifiedDate == null ||
            file.lastModifiedDate.valueOf() != lastModifiedDate.valueOf()) &&
        !paused;
}

function parseFile() {
    if (shouldReload()) {
        var rdr = new FileReader();
        // Closure that returns a function closing over the file that has been loaded
        rdr.onload = (function (fileToLoad) {
            return function (fileLoadevent) {
                var converter = new Markdown.Converter();
                var html = converter.makeHtml(fileLoadevent.target.result);
                document.getElementById('file-name').innerText = fileToLoad.name;
                document.getElementById('output').innerHTML = html;
                lastModifiedDate = fileToLoad.lastModifiedDate;
            };
        })(file);
        rdr.readAsText(file);
    }

    var reloadDelay = document.getElementById('reload-delay-ms').value;
    setTimeout(parseFile, reloadDelay);
}

function handleSelectFile(e) {
    if (e.target.files[0] != null) {
        file = e.target.files[0];
        parseFile();
    }
}

function windowOnLoad() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Everything we need is available
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }

    document.getElementById('file').addEventListener('change', handleSelectFile, false);
}

function onClickPause() {
    paused = !paused;
    document.getElementById("pause-button").style.display = "none";
    document.getElementById("resume-button").style.display = "inline";
    return false;
}

function onClickResume() {
    paused = !paused;
    document.getElementById("pause-button").style.display = "inline";
    document.getElementById("resume-button").style.display = "none";
    return false;
}

window.onload = windowOnLoad;