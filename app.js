// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let ul = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');
let amigo = document.getElementById("amigo");

function agregarAmigo() {
    const nombre = amigo.value.trim();

    if (nombre !== "") {
        amigos.push(nombre); 

        const li = document.createElement("li");
        li.textContent = nombre.toLowerCase(); 
        ul.appendChild(li);

        amigo.value = ""; 
    
    } else {
        alert('Por favor ingrese un nombre válido.');
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        
        const i = Math.floor(Math.random() * (amigos.length));
        const li = document.createElement("li");
    
        li.textContent = `El amigo secreto sorteado es: ${amigos[i].charAt(0).toUpperCase() + amigos[i].slice(1)}`;
    
        ulResultado.appendChild(li);

    } else {
        alert('Por favor debes añadir amigos!.')
    }
}
