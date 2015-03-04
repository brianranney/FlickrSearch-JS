var enabled = true;

function select(img) {
    if (enabled == true) {
        img.classList.toggle("selected");
        img.classList.toggle("large");
    }
}