/*sterren*/

function sterToggle() {
    this.classList.toggle('empthyster');
    this.classList.toggle('fullster');
}
document.getElementById('leegster').addEventListener('click', sterToggle);
document.getElementById('legester').addEventListener('click', sterToggle);
