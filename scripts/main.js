// Image switcher code

let miImage = document.querySelector("img")

miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/videojuegos1.jpg") {
        miImage.setAttribute("src","images/videojuegos2.jpg");
    } else {
        miImage.setAttribute("src","images/videojuegos1.jpg");
    }
}

// Personalized welcome message code

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if(!miNombre) {
    estableceNombreUsuario();
} else {
    localStorage.setItem("nombre",miNombre);
    miTitulo.textContent = "Balam es genial," + miNombre;
}
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Los videojuegos son geniales,  " +
    nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}