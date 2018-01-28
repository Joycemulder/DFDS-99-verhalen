console.log('test');
/*When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


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
    hamburgerButton.classList.remove("navopen");
    kruisButton.classList.add("navdicht");
    menuzakt.classList.remove("menu1");
    menuzakt.classList.add("menu2");


}

hamburgerButton.addEventListener("click", menuopen);

var menudicht = function () {
    hamburgerButton.classList.add("navopen");
    kruisButton.classList.remove("navdicht");
    menuzakt.classList.add("menu1");
    menuzakt.classList.remove("menu2");


}
kruisButton.addEventListener("click", menudicht)

var buttonSave = document.getElementById("clicknavopen");
var srcv = buttonSave.src;

console.log("buttonsaved");

var change = function () {
    if (srcv = "afb/hamburger.png") {
        buttonSave.src = "afb/kruismenu.png"
    } else if (srcv = "afb/kruismenu.png") {
        buttonSave.src = "afb/hamburger.png"
    }
}

buttonSave.addEventListener("click", change);
