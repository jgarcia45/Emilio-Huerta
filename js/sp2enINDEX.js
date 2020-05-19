var english = document.getElementById("English");
var spanish = document.getElementById("Spanish");
var english1 = document.getElementById("English1");
var spanish1 = document.getElementById("Spanish1");


spanish.style.display = "none";
spanish1.style.display = "none";

function translateEnglish() {
    english.style.display = "block";
    spanish.style.display = "none";
    
    english1.style.display = "block";
    spanish1.style.display = "none";
}

function translateSpanish() {
    spanish.style.display = "block";
    english.style.display = "none";
    spanish1.style.display = "block";
    english1.style.display = "none";
}