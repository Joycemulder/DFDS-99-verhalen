console.log('test');

/*zoeken*/

var clickTwee = document.getElementById("zoek");
var dropdownTwee = document.getElementById("mijndropdownzoek");
var functieTwee = function () {
    dropdownTwee.classList.toggle("showtwee");
}

clickTwee.addEventListener('click', functieTwee);

/*dropdown filter */
var click = document.getElementById("myFunction");
var dropdown = document.getElementById("myDropdown");
var functie = function () {
    dropdown.classList.toggle("show");
}

click.addEventListener('click', functie);

/*dropdownmenu*/

var clickDrie = document.getElementById("buttondrop");
var dropdownDrie = document.getElementById("menu");
var functieDrie = function () {
    dropdownDrie.classList.toggle("showdrie");
}

clickDrie.addEventListener('click', functieDrie);



/*save button*/

var buttonSave = document.getElementById("save");
var srcv = buttonSave.src;

console.log("buttonsaved");

var change = function () {
    if (srcv = "afb/savebutton.png") {
        buttonSave.src = "afb/groenvink.png"
    } else if (srcv = "afb/groenvink.png") {
        buttonSave.src = "afb/savebutton.png"
    } else {
        buttonSave.src = "afb/savebutton.png"
    }
}

buttonSave.addEventListener("click", change);
