function clickToSignIn(){
    var signInBox = document.getElementById("form");
    var homePage = document.getElementById("homePage");
    signInBox.style.display = "block";
    homePage.style.opacity = 0.5;
}
function cancelSignIn(){
    var signInBox = document.getElementById("form");
    var homePage = document.getElementById("homePage");
    signInBox.style.display = "none";
    homePage.style.opacity = 1;
}
function clickToSignUp(){
    var signUpBox = document.getElementById("entireBox");
    var signInBox = document.getElementById("form");
    var homePage = document.getElementById("homePage");
    signInBox.style.display = "none";
    signUpBox.style.display = "block";
    homePage.style.display="none";
}
function cancelSignUp(){
    var signUpBox = document.getElementById("entireBox");
    var signInBox = document.getElementById("form");
    var homePage = document.getElementById("homePage");
    signInBox.style.display = "block";
    signUpBox.style.display = "none";
    homePage.style.display="block";
}