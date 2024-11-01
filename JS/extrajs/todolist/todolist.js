const input = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.disabled = true;
        inputItem.classList.add('item-input');
        inputItem.value = nuevaTarea;

        const nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('item');

        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = '🔒';
        botonEditar.classList.add('boton-editar');

        const botonRemover = document.createElement('button');
        botonRemover.innerHTML = '🗑️';
        botonRemover.classList.add('boton-remover');

        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        container.appendChild(nuevoDiv);

        botonEditar.addEventListener('click', function() {
            if(inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '🔓';
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '🔒';
            }
        });

        botonRemover.addEventListener('click', function() {
            container.removeChild(nuevoDiv);
        });
    }
}

function chequearInput() {
    if(input.value !== '') {
        new Item(input.value);
        input.value = '';
    }
}

botonAgregar.addEventListener('click', chequearInput);