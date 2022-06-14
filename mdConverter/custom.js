
function changeWelcome() {
    var docDiv = document.getElementById("documentationId");
    if (docDiv == null) return;
    var str = `
        <h2 id="documentation">Documentation</h2>
        Yeeey you are here :heart_eyes: 
        <br>That's amazing, thank you. All source codes for this .md to .html converter
        are <a href="https://github.com/KubaBoi/CheeseFramework/tree/webServices/mdConverter">here</a>.<br>
        <br>
        <a href="https://kubaboi.github.io/CheeseFramework/doc.html">Complete method and classes documentation</a>
    `;

    docDiv.innerHTML = rplcReg(str, /:(?<emoji>[a-z0-9_\-\+]+):/g, "$emoji.emoji$");
}