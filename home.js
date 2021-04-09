function heslo() {
    document.getElementById("ithiden").style.visibility = "visible";
    document.getElementById("oddeleni1").style.visibility = "hidden";
    document.getElementById("oddeleni2").style.visibility = "hidden";
    document.getElementById("oddeleni3").style.visibility = "hidden";
    document.getElementById("oddeleni4").style.visibility = "hidden";
    document.getElementById("oddeleni5").style.visibility = "hidden";
}

function zpet() {
    window.location = 'home.html';
}

function gotoit() {
    var heslo ;

    heslo = document.getElementById("input1").value;

    if (heslo == "install") {
        window.location = 'it498461šěíýáčžěgzfkaerf.html';
    } else {
        window.location = 'home.html';
    }
}