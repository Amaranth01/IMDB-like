let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let imgArray = ['assets/img/Robert Pattinson ans Zoe Kravitz', 'assets/img/Most Anticipated', 'assets/img/Docteur Strange', 'assets/img/New Movie of 2022',
    'assets/img/Pam & Tommy', 'assets/img/Thimothée Chalamet', 'assets/img/Peaky Blinders', 'assets/img/Alana Haim', 'assets/img/Archive 81','assets/img/Zndaya',
    'assets/img/Breaking Bad', 'assets/img/Wolf like me', 'assets/img/Black Adam'];
let div = document.querySelector('#car1');


//function for load the image
function load() {
    for (let i = 0; i < imgArray.length; i++) {
        //create a div for stock the images
        div.style.backgroundImage = "url('" + imgArray[i] + ".jpg')";
    }
}

let j = 0;
load();
div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";

buttonLeft.addEventListener('click', function (){
    j--;
    load();
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    // condition for go back
    if (j === -1) {
        j = imgArray.length -1;
        load();
        div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    }
});

buttonRight.addEventListener('click', function (){
    j++;
    load();
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    //condition for go ahead
    if (j === imgArray.length - 1) {
        j = -1;
    }
});

setInterval(function () {
    load();
    j++;
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    if (j === imgArray.length - 1) {
        j = 0;
    }
}, 600000);