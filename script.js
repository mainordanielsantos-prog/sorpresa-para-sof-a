
function abrirCarta() {

    document.getElementById("carta").style.display = "block";

    document.getElementById("botonCarta").style.display = "none";

    document.getElementById("carta").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

function mostrarFinal() {

    document.getElementById("final").style.display = "block";

    document.getElementById("final").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    crearExplosion();

}

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazonFlotante");

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize = (15 + Math.random() * 25) + "px";

    corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 10000);

}

function crearExplosion() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {
            crearCorazon();
        }, i * 100);

    }

}

setInterval(crearCorazon, 700);
