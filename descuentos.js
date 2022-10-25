
const boton = document.querySelector('#calcular');
const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const pResultado = document.querySelector('#resultado');


boton.addEventListener('click', calcularPrecioConDescuento);



function calcularPrecioConDescuento() {
    // (Precio * (100 - Descuento)) / 100
const price = Number(inputPrecio.value);
const discount = Number(inputDescuento.value);


if (!price || !discount){
    pResultado.innerText = "No se ha recibido ningún precio ni descuento, no se puede ejecutar la tarea";
    return;
}

const nuevoPrecio = (price * (100 - discount))/ 100;

pResultado.innerText = 'El nuevo precio con descuento es $' + nuevoPrecio;

}