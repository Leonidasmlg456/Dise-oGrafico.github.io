// script.js

function toggleAudio(audioId) {
    var audio = document.getElementById(audioId);

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
}

function toggleDarkMode() {
    var body = document.body;
    body.style.backgroundColor = (body.style.backgroundColor === "black") ? "white" : "black";
    var footer = document.querySelector('.footer');
    var redesSociales = document.querySelector('.redes-sociales');
    var flecha = document.querySelector('.flecha');
    // Cambia el color de fondo y el color del texto en el pie de página y enlaces de redes sociales
    footer.style.backgroundColor = (footer.style.backgroundColor === "black") ? "white" : "black";
    redesSociales.style.color = (redesSociales.style.color === "white") ? "black" : "white";
    // Cambia el color de la flecha
    flecha.style.color = (flecha.style.color === "white") ? "black" : "white";
}
