document.getElementById("submit").addEventListener("click", createScript);
document.getElementById("submit").addEventListener("click", jsonFlickrApi);
document.getElementById("submit").addEventListener("click", hideSearch);
document.getElementById("submit").addEventListener("click", showResults);
document.getElementById("submit").addEventListener("click", showHome);
document.getElementById("submit").addEventListener("click", hideSubmit);
document.getElementById("submit").addEventListener("click", resizeHeader);

function createScript() {
    var scriptTag = document.getElementById("headScript");
    var apiKey = "15b2f18ad586576189baa04711c0ef14";
    var query = document.getElementById("userInput").value;
    scriptTag.src = "http://flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "&text=" + encodeURIComponent(query) + "&sort=relevance&per_page=20&format=json";
}


function jsonFlickrApi(rsp){
    counter = 0;
    for (var i=0; i<rsp.photos.photo.length; i++) {
        counter++;
        var photo = rsp.photos.photo[i];
        
        var a1 = document.createElement("a");
        a1.href = "#img" + counter;
        a1.classList.add("imgLink");
        a1.id = "a" + counter;
        a1.onclick = function(){ return false; };
        document.getElementById("results").appendChild(a1);
        
        var img1 = document.createElement("img");
        img1.classList.add("large");
        img1.onclick = function() { select(this); };
        img1.src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
        document.getElementById("a" + counter).appendChild(img1);
        
        var a2 = document.createElement("a");
        a2.href = "#_";
        a2.classList.add("lightbox");
        a2.id = "img" + counter;
        document.getElementById("results").appendChild(a2);
        
        var img2 = document.createElement("img");
        img2.src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
        document.getElementById("img" + counter).appendChild(img2);
        
    }  
}

function hideSearch() {
    document.getElementById("userInput").style.display = "none";
}

function hideSubmit() {
    document.getElementById("submit").style.display = "none";
}

function showResults() {
    document.getElementById("resultWrap").style.display = "block";
}

function showHome() {
    document.getElementById("homeLink").style.display = "block";
}

function resizeHeader() {
    document.getElementsByTagName("h1")[0].style.cssText = "padding: 0px 0px 20px; margin: 0px;";
}














