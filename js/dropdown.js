console.log('test');
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
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

*/


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
