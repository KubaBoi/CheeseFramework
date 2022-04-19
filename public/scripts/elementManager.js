
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
    var element = document.getElementById(id);
    var type = element.getAttribute("type");

    if (type == "text" || type == "datetime-local") 
        return element.value;
    else if (type == "number")
        return parseInt(element.value);
    else if (type == "radio" || type == "checkbox")
        return element.checked;
    
}