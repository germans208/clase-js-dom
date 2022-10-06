console.log(document.querySelector('form'));

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); //en este caso evita que se envie el formulario

    // let name = document.getElementById('name').value;

    // let email = document.getElementById('email').value;

    // if (name == '' || email == '') {

    //     // Swal.fire({
    //     //     icon: 'error',
    //     //     title: 'Oops...',
    //     //     text: 'Ingrese los datos pedidos',
    //     // })


    // }


    let name = document.getElementById('name'); //obtengo el elemento del DOM input
    let email = document.getElementById('email');// obtengo el elemento del DOM input
    let nameHelp = document.getElementById('nameHelp'); //obtengo el elemento del DOM div
    let emailHelp = document.getElementById('emailHelp'); //obtengo el elemento del DOM div

    if (name.value == '') {

        nameHelp.innerHTML = 'Ingrese los datos pedidos del nombre'; //  CAMBIAR TEXTO
        nameHelp.classList.add('error'); //agrega una clase

    } else {

        nameHelp.innerHTML = ''; //  CAMBIAR TEXTO
        nameHelp.classList.remove('error'); //agrega una clase

    }

    if (email.value == '') {

        emailHelp.innerHTML = 'Ingrese los datos pedidos del email'; //  CAMBIAR TEXTO
        emailHelp.classList.add('error'); //agrega una clase

    } else {

        emailHelp.innerHTML = ''; //  CAMBIAR TEXTO
        emailHelp.classList.remove('error'); //agrega una clase

    }


    if (name.value != '' && email.value != '') {

        window.location.href = 'mostrar.html';

        
    }


});
