document.getElementById("showGallery").addEventListener("click", show);
document.getElementById("showGallery").addEventListener("click", hideShow);
document.getElementById("showGallery").addEventListener("click", disableSelect);
document.getElementById("showGallery").addEventListener("click", enableLightbox);
document.getElementById("showGallery").addEventListener("click", hideInstructions);
document.getElementById("showGallery").addEventListener("click", showBack);
document.getElementById("showGallery").addEventListener("click", scrollWin);

function show() {
    var img = document.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
        if (img[i].classList.contains("large")) {
            img[i].style.display = "none";
        } else if (img[i].classList.contains("selected")) {
            img[i].classList.toggle("selected");
            img[i].classList.toggle("small");
        }
    }
}

function hideShow() {
    document.getElementById("showGallery").style.display = "none";
}

function disableSelect() {
    enabled = false;
}

function enableLightbox() {
    var link = document.getElementsByTagName("a");
    for (var i = 0; i < link.length; i++) {
        link[i].onclick = null;
    }
}

function hideInstructions() {
    document.getElementById("resultsText").style.display = "none";
}

function showBack() {
    document.getElementById("thumbContainer").style.display = "block";
}

function scrollWin() {
    window.scrollTo(0, 0);
}