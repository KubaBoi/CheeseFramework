function createElement(type, parent=null, innerHTML="", attributes=[]) {
    var element = document.createElement(type);
    element.innerHTML = innerHTML;

    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].name, attributes[i].value);
    }

    if (parent != null) {
        parent.appendChild(element);
    }

    return element;
}

function getValueOf(id) {
    return document.getElementById(id).value;
}