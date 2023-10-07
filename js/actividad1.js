const input = document.querySelector('#input'); // Selecciona el input por su id
const addButton = document.querySelector('#add-button'); // Selecciona el botón de agregar por su id
const deleteButton = document.querySelector('#delete-button'); // Selecciona el botón de eliminar por su id
const list = document.querySelector('#list'); // Selecciona la lista por su id

// Agrega un elemento a la lista con el texto del input
addButton.addEventListener('click', () => {
    const text = input.value.toLowerCase(); // Obtiene el texto del input y lo convierte a minúsculas
    if (text == "") { return; } // Si el texto está vacío, no hace nada
    const listItem = document.createElement('li'); // Crea un elemento para agregar a la lista
    listItem.textContent = text; // le asigna el texto del input al elemento
    list.appendChild(listItem); // agrega el elemento a la lista
    input.value = ''; // Limpia el input
});

// Elimina el último elemento de la lista
deleteButton.addEventListener('click', () => {
    const lastItem = list.lastElementChild; // guarda el último elemento agregado a la lista
    if (lastItem) { // Si hay un último elemento, osea lista no está vacía
        list.removeChild(lastItem); // Elimina el último elemento
    }
});