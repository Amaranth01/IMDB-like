let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let titleBig = document.getElementById('bigTitle');
let carPoster = document.getElementById('poster');
let littleTitle = document.getElementById('subTitle');
let dur = document.getElementById('duration');

let imgArray = ['assets/img/Robert Pattinson ans Zoe Kravitz', 'assets/img/Most Anticipated', 'assets/img/Docteur Strange', 'assets/img/New Movie of 2022',
    'assets/img/Pam & Tommy', 'assets/img/Thimothée Chalamet', 'assets/img/Peaky Blinders', 'assets/img/Alana Haim', 'assets/img/Archive 81','assets/img/Zndaya',
    'assets/img/Breaking Bad', 'assets/img/Wolf like me', 'assets/img/Black Adam'];
let poster = [
    "assets/img/icône Robert Pattinson",
    "",
    "assets/img/icône Docteur Strange",
    "",
    "assets/img/icône Pam & Tommy.jpg",
    "",
    "assets/img/incône Peaky Blinders",
    "assets/img/icône Alana Haim",
    "",
    "",
    "",
    "assets/img/icône Kisten Bell's",
    "assets/img/icône Wolf like me",
    "assets/img/icône Adam Black",
]

let title = [
    "Robert Pattinson and Zoë Kravitz Team Up in 'The Batman'",
    "What Are the Most Anticipated New Shows of 2022?",
    "'Doctor Strange in the Multiverse of Madness'",
    "The Most Anticipated New Movies of 2022",
    "Pam & tommy",
    "Thimothée Chalamet's path from Homeland to 'Dune'",
    "'Peaky Blinders Season 6'",
    "Alana Haim Brings Het Love of L.A to 'Licorice Pizza'",
    "Archive 81",
    "Zendaya's Journey From 'Shake It Up' to 'Dune'",
    "The Most Shocking Moments from 'Breaking Bad'",
    "Wolf Like Me",
    "What We Know About 'Black Adam'"
]

let subtitle = [
    "Watch the New trailer",
    "The IMDb Audience Has Spoken",
    "Watch the Teaser Trailer",
    "Get Your Watchlists Ready",
    "Watch the Trailer",
    "See His Rise to Frame",
    "Watch the Trailer",
    "Watch the Interview",
    "Watch the Trailer",
    "Follow Her Rise to Fame",
    "Classic Episodes to Revisit",
    "Watch the Trailer",
    "Dwayne Johnson's DC Comics Antihero"
]

let duration = [
    "2:39",
    "2:30",
    "2:12",
    "2:45",
    "1:47",
    "3:48",
    "1:32",
    "2:06",
    "2:20",
    "3:55",
    "2:09",
    "2:00",
    "3:23"
]

let div = document.querySelector('#car1');

//function for load the image
function load() {
    for (let i = 0; i < imgArray.length; i++) {
        //create a div for stock the images
        div.style.backgroundImage = "url('" + imgArray[i] + ".jpg')";
        carPoster.style.backgroundImage = "url('" + poster[i] + ".jpg')"
        titleBig.innerHTML = title[i];
        littleTitle.innerHTML = subtitle[i];
        dur.innerHTML = duration[i];
    }
}

let j = 0;
load();
div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";

buttonLeft.addEventListener('click', function (){
    j--;
    load();
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    carPoster.style.backgroundImage = "url('" + poster[j] + ".jpg')"
    titleBig.innerHTML = title[j];
    littleTitle.innerHTML = subtitle[j];
    dur.innerHTML = duration[j];
    // condition for go back
    if (j === -1) {
        j = imgArray.length -1;
        load();
        div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
        carPoster.style.backgroundImage = "url('" + poster[j] + ".jpg')"
        titleBig.innerHTML = title[j];
        littleTitle.innerHTML = subtitle[j];
        dur.innerHTML = duration[j];
    }
});

buttonRight.addEventListener('click', function (){
    j++;
    load();
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    carPoster.style.backgroundImage = "url('" + poster[j] + ".jpg')"
    titleBig.innerHTML = title[j];
    littleTitle.innerHTML = subtitle[j];
    dur.innerHTML = duration[j];
    //condition for go ahead
    if (j === imgArray.length - 1) {
        j = -1;
    }
});

setInterval(function () {
    load();
    j++;
    div.style.backgroundImage = "url('" + imgArray[j] + ".jpg')";
    carPoster.style.backgroundImage = "url('" + poster[j] + ".jpg')"
    titleBig.innerHTML = title[j];
    littleTitle.innerHTML = subtitle[j];
    dur.innerHTML = duration[j];
    if (j === imgArray.length - 1) {
        j = 0;
    }
}, 600000);