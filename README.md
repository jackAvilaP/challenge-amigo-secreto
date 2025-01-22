# Amigo Secreto

## Descripción

En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

Los usuarios podrán agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

---

## Funcionalidades

1. **Agregar nombres**:
   - Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2. **Validar entrada**:
   - Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3. **Visualizar la lista**:
   - Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4. **Sorteo aleatorio**:
   - Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

---

## Tecnologías Utilizadas

- **HTML5** para la estructura del documento.
- **CSS3** para el diseño y estilos visuales.
- **JavaScript** para la lógica y funcionalidad de la aplicación.

---

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- **index.html**: Archivo principal que contiene la estructura de la página.
- **style.css**: Archivo que define los estilos visuales de la aplicación.
- **app.js**: Archivo que contiene la lógica de programación.
- **assets/**: Carpeta que contiene imágenes y recursos necesarios.

---

## Cómo Utilizar la Aplicación

1. Abra el archivo `index.html` en un navegador web.
2. Ingrese el nombre de un amigo en el campo de texto y haga clic en el botón "Adicionar" para agregarlo a la lista.
3. Repita el proceso hasta ingresar todos los nombres deseados.
4. Una vez que la lista esté completa, haga clic en el botón "Sortear Amigo".
5. El resultado del sorteo aparecerá en la página indicando quién es el "amigo secreto".

---

## Ejemplo de Código

### HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1>Amigo Secreto</h1>
        </header>
        <section class="input-section">
            <input type="text" id="amigo" placeholder="Escribe un nombre">
            <button onclick="agregarAmigo();">Adicionar</button>
            <ul id="listaAmigos"></ul>
            <button onclick="sortearAmigo();">Sortear Amigo</button>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>
```

### JavaScript
```javascript
let amigos = []
let ul = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');
let amigo = document.getElementById("amigo");

function agregarAmigo() {
    const nombre = amigo.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);

        actualizarLista(nombre)

        amigo.value = "";

    } else {
        alert('Por favor ingrese un nombre válido.');
    }
}

function actualizarLista(nombre) {
    const li = document.createElement("li");
    li.textContent = nombre.toLowerCase();
    ul.appendChild(li);
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

```

---

## Autor
Desarrollado por Jackson Avila Paez.

