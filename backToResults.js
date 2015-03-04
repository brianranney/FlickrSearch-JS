document.getElementById("backToResults").addEventListener("click", hide);
document.getElementById("backToResults").addEventListener("click", showShow);
document.getElementById("backToResults").addEventListener("click", enableSelect);
document.getElementById("backToResults").addEventListener("click", showInstructions);
document.getElementById("backToResults").addEventListener("click", hideBack);
document.getElementById("backToResults").addEventListener("click", disableLightbox);

function hide() {
    var img = document.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
        if (img[i].classList.contains("small")) {
            img[i].classList.toggle("large");
            img[i].classList.toggle("small");
        } else if (img[i].classList.contains("large")) {
            img[i].style.display = "";
        }
    }
}

function disableLightbox() {
    var link = document.getElementsByClassName("imgLink");
    for (var i = 0; i < link.length; i++) {
        link[i].onclick = function() { return false; };
    }
}

function showShow() {
    document.getElementById("showGallery").style.display = "";
}

function enableSelect() {
    enabled = true;
}

function showInstructions() {
    document.getElementById("resultsText").style.display = "";
}

function hideBack() {
    document.getElementById("thumbContainer").style.display = "none";
}