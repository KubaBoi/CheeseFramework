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
    if (element.getAttribute("type") == "text") 
        return element.value;
    else if (element.getAttribute("type") == "radio")
        return element.checked;
    else if (element.getAttribute("type") == "checkbox")
        return element.checked;
    
}