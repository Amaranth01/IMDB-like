let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let imgArray = ['img/Robert Pattinson ans Zoe Kravitz', 'img/Most Anticipated', 'img/Docteur Strange', 'img/New Movie of 2022',
    'img/Pam & Tommy', 'img/Thimothée Chalamet', 'img/Peaky Blinders', 'img/Alana Haim', 'img/Archive 81','img/Zndaya',
    'img/Breaking Bad', 'img/Wolf like me', 'img/Black Adam'];
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