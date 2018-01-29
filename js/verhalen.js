/*sterren*/

function sterToggle() {
    this.classList.toggle('empthyster');
    this.classList.toggle('fullster');
}
document.getElementById('leegster').addEventListener('click', sterToggle);
