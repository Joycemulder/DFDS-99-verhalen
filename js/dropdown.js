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


var grijsOpslaan = document.getElementById("save");
var groenOpgeslagen = document.getElementById("saved");

var change = function () {
    grijsOpslaan.classList.remove('opslaan');
    groenOpgeslagen.classList.add('opgeslagen');
}

grijsOpslaan.addEventlistener("click", change);
