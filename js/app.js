



let comprar = confirm("¿Desea comprar?");


console.log(comprar);

//clases

if (comprar) {

    document.querySelector('p').innerHTML = 'Gracias por su compra'; //  CAMBIAR TEXTO
    document.querySelector('p').classList.add('nombreClase'); //agrega una clase

    document.querySelector('p').classList.remove('nombreClase'); //remueve una clase



} else {
    document.querySelector('p').innerHTML = 'No se realizo la compra'; //   CAMBIA EL TEXTO


    Swal.fire({
        icon: 'error',
        title: 'No se realizo la compra',
        text: 'Fondos insuficientes',
       // footer: '<a href="index.html">vaya a la pagina principal</a>'
    })

}


//alert('Hola mundo');





