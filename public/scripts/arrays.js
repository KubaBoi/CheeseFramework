
function removeFromArray(array, item) {
    let index = array.indexOf(item);
    removeFromArrayByIndex(array, index);
}

function removeFromArrayByIndex(array, index) {
    if (index == -1) return;
    array.splice(index, 1);
}