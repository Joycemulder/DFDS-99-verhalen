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

var hamburgerbutton = document.getElementById("buttondrop");
var kruisbutton = document.getElementById("buttonup");
var menuzakt = document.getElementById("menu");

var menuopen = function () {
    hamburgerbutton.classList.remove("navopen");
    kruisbutton.classList.add("navdicht");
    menuzakt.classList.remove("menu1");
    menuzakt.classList.add("menu2");

}

hamburgerbutton.addEventListener("click", menuopen);

var menudicht = function () {
    hamburgerbutton.classList.add("navopen");
    kruisbutton.classList.remove("navdicht");
    menuzakt.classList.add("menu1");
    menuzakt.classList.remove("menu2");


}
kruisbutton.addEventListener("click", menudicht)

var navbutton = document.getElementById("clicknavopen");
var srcv = navbutton.src;

console.log("navbutton");

var change = function () {
    if (srcv = "afb/hamburger.png") {
        navbutton.src = "afb/kruismenu.png"
    } else if (srcv = "afb/kruismenu.png") {
        navbutton.src = "afb/hamburger.png"
    }
}

navbutton.addEventListener("click", change);
