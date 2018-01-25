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


var button = document.getElementById("save");
var srcv = button.src;

var change = function () {
    if (srcv = "afb/savebutton.png") {
        button.src = "afb/groenvink.png"
    } else if (scrv = "afb/groenvink.png") {
        button.src = "afb/savebutton.png"
    } else {
        button.src = "afb/savebutton.png"
    }
}

button.addEventListener("click", change);
