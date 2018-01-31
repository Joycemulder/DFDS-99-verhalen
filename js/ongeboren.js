console.log('test');

/*zoeken*/

var clickTwee = document.getElementById("zoek");
var dropdownTwee = document.getElementById("mijndropdownzoek");
var functieTwee = function () {
    dropdownTwee.classList.toggle("showtwee");
}

clickTwee.addEventListener('click', functieTwee);


/*dropdownmenu*/

var clickDrie = document.getElementById("buttondrop");
var dropdownDrie = document.getElementById("menu");
var functieDrie = function () {
    dropdownDrie.classList.toggle("showdrie");
}

clickDrie.addEventListener('click', functieDrie);
/*sterren*/

function sterToggle() {
    this.classList.toggle('empthyster');
    this.classList.toggle('fullster');
}
document.getElementById('leegster').addEventListener('click', sterToggle);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
