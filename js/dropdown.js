console.log('test');
/*When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var click = document.getElementById("myFunction");
var dropdown = document.getElementById("myDropdown");
var functie = function () {
    dropdown.classList.toggle("show");
}

click.addEventListener('click', functie);



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


/*menu*/
console.log('test');

var hamburgerButton = document.getElementById("buttondrop");
var kruisButton = document.getElementById("buttonup");
var menuzakt = document.getElementById("menu");

var menuopen = function () {


    hamburgerButton.classList.add("navopen");
    kruisButton.classList.remove("navdicht");
    menuzakt.classList.add("menu1");
    menuzakt.classList.remove("menu2");
    hamburgerButton.classList.add("navopen");

}

hamburgerButton.addEventListener("click", menuopen);

console.log('hi');

var menudicht = function () {
    hamburgerButton.classList.remove("navopen");
    kruisButton.classList.add("navdicht");
    menuzakt.classList.remove("menu1");
    menuzakt.classList.add("menu2");


}
kruisButton.addEventListener("click", menudicht);

console.log('hallo');



var buttonham = document.getElementById("clicknavopen");
var srcv = buttonham.src;

console.log("buttonham");

var click = document.getElementById("zoek");
var dropdown = document.getElementById("mijndropdownzoek");
var functie = function () {
    dropdown.classList.toggle("show");
}

click.addEventListener('click', functie);
