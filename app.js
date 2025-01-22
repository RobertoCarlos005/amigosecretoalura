// Crear un array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        console.log(`${nombre} ha sido agregado a la lista.`);
        input.value = ""; // Limpiar el campo de texto
    } else {
        alert("El nombre es inválido o ya existe en la lista.");
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear los amigos
function sortearAmigos() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return;
    }

    let sorteados = [...amigos];
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posibles = sorteados.filter(a => a !== amigo);

        if (posibles.length === 0) {
            alert("El sorteo no se puede completar. Inténtalo nuevamente.");
            return;
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[amigo] = elegido;
        sorteados = sorteados.filter(a => a !== elegido);
    }

    mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo en el DOM
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultadoAmigos");
    listaResultado.innerHTML = ""; // Limpiar la lista de resultados

    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        listaResultado.appendChild(li);
    }

    console.log("Resultados del sorteo:", resultado);
}
