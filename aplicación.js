let amigos = [];

let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function renderLista() {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function agregarAmigo() {
    let nombre = inputAmigo.value; 

    if (nombre === "") {
        alert("Debes ingresar un nombre válido.");
        return;
    }

    amigos.push(nombre); 
    renderLista();

    inputAmigo.value = ""; 
    inputAmigo.focus();    
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    resultado.innerHTML = "<li>🎉 Amigo secreto: <strong>" + elegido + "</strong></li>";
}




