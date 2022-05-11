
function changeWelcome() {
    var docDiv = document.getElementById("documentationId");
    var str = `
        <h2 id="documentation">Documentation</h2>
        <br>
        Yeeey you are here :heart_eyes: . That's amazing, thank you. All source codes for this .md to .html converter
        are <a href="https://github.com/KubaBoi/CheeseFramework/tree/webServices/mdConverter">here</a><br>
    `;

    docDiv.innerHTML = rplcReg(str, /:(?<emoji>[a-z0-9_\-\+]+):/g, "$emoji.emoji$");
}