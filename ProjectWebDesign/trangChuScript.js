var indexValue = 1;
showImg(indexValue);

function slidePicture(e){
    showImg(indexValue += e);
}

function showImg(e){
    var i;  
    const img = document.querySelectorAll(".pic");
    if (e > img.length){
        indexValue = 1;
    }
    if (e < 1){
        indexValue = img.length;
    }
    for (i=0 ; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue - 1].style.display = "block";
}
