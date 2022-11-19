function nam(){
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
    var emBe = document.getElementById("emBe");
    if (nam.style.display=="flex")
    nam.style.display="none";
    else
    nam.style.display="flex";
    nu.style.display="none";
    emBe.style.display="none";
}

function nu(){
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
    var emBe = document.getElementById("emBe");
    if (nu.style.display=="flex")
    nu.style.display="none";
    else
    nu.style.display="flex";
    nam.style.display="none";
    emBe.style.display="none";
}

function emBe(){
    var nam = document.getElementById("nam");
    var nu = document.getElementById("nu");
    var emBe = document.getElementById("emBe");
    if (emBe.style.display=="flex")
    emBe.style.display="none";
    else
    emBe.style.display="flex";
    nam.style.display="none";
    nu.style.display="none";
}