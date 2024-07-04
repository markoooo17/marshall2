function cambiarModo() {
    const body = document.querySelector('body');
    body.classList.toggle('oscuro');
}

document.getElementById("dom").addEventListener("hide.bs.collapse", function () {
    document.getElementById("alquilar").textContent = "Alquilar";
});

document.getElementById("dom").addEventListener("show.bs.collapse", function () {
    document.getElementById("alquilar").textContent = "Ocultar";
});

document.getElementById("filtro").addEventListener("change",function(){ 
let instrumento_elegido = document.querySelector("#dom option:checked").value;
let horarios = document.querySelectorAll("#contenido .card")
horarios.forEach(card =>{
card.classList.add("oculto");
    });
if(instrumento_elegido == "todos"){
        horarios.forEach(card=>{
            card.classList.remove("oculto");
        });
}else if(instrumento_elegido == "guitarra"){
        document.querySelectorAll("#contenido .guitarra").forEach(card =>{
            card.classList.remove("oculto")
        });
}else if(instrumento_elegido == "bajo"){
        document.querySelectorAll("#contenido .bajo").forEach(card =>{
            card.classList.remove("oculto")
        });
}else if(instrumento_elegido == "bateria"){
        document.querySelectorAll("#contenido .bateria").forEach(card =>{
            card.classList.remove("oculto")
        });
}else if(instrumento_elegido == "amplificador"){
        document.querySelectorAll("#contenido .amplificador").forEach(card =>{
            card.classList.remove("oculto")
        });
    }
});

document.querySelector("#agregar form").addEventListener("submit", function name(e) {
e.preventDefault();
let nombre_ingresado = nombre.value;
let telefono_ingresado = telefono.value;
let horario_ingresada = document.querySelector("#horarios option:checked").value;
let instrumento_ingresado = document.querySelector("#instrumentos option:checked").value;
const nuevo_div = document.createElement("div");
nuevo_div.classList.add("card", "m-2", "text-start", "d-inline-block", instrumento_ingresado);
nuevo_div.innerHTML = `
<div class="card-header text-end">
<i class="bi bi-x-circle-fill p-1" data-accion= "eliminar"  > </i></div>
<div class="card-body">
<h3 class="card-title text-light">${nombre_ingresado}</h3>
<p class="card-text"><strong>Telefono:</strong> <span>${telefono_ingresado}</span></p>
<p class="card-text"><strong>Horario:</strong> <span>${horario_ingresada}</span></p>
</div>
    `;
document.getElementById("contenido").prepend(nuevo_div);
document.querySelector("#agregar form").reset();

let cards_actuales = document.getElementById("contenido").innerHTML;
localStorage.setItem("horarios", cards_actuales);

});

document.getElementById("contenido").addEventListener("click", function (e) {
    if (e.target.dataset.accion == "eliminar") {
        let rta = confirm("¿Estás seguro?");
    if (rta) {
    e.target.parentElement.parentElement.remove();
    let cards_actuales = document.getElementById('contenido').innerHTML;
    localStorage.setItem("horarios", cards_actuales);
        }
    }
});

document.getElementById("eliminar_cards").addEventListener("click", function (e) {
let rta = confirm("¿Estás seguro?");
if (rta) {
document.getElementById("contenido").innerHTML = "";
localStorage.clear();
    }
});

document.addEventListener("DOMContentLoaded", function () {
let guardados = localStorage.getItem("horarios");
if (guardados != null) {
document.getElementById("contenido").innerHTML = guardados;
    }
});

document.getElementById("botonardo").addEventListener("click", function(){
document.getElementById("footersito").classList.toggle("botonfooter");
})