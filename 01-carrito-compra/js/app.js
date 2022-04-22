'use strict';

// Variables 

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


cargarEventListeners();
function cargarEventListeners() {

    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
}

/********************************************** Funciones **************************************************************/

function agregarCurso(e) {
    e.preventDefault();  // Prevenimos la accion del navegador por defecto

    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito...')
    }
}

