console.log(comprar);

console.log(window.innerWidth) // objeto global

console.log(document.querySelector('h1').textContent) // objeto global

//document.querySelector('h1').textContent = 'Hola mundo';

document.getElementById('miTitulo').innerHTML = 'Hola como estas german' // objeto global

let array = document.querySelectorAll('h1');

for (let i = 0; i < array.length; i++) {
    array[i].innerHTML = 'Hola como estas german'
}


//document.getElementsByClassName('pirulo')[0].innerHTML = 'Hola como estas german'
// document.getElementsByName('h1')[0].innerHTML = 'Hola como estas german'
//document.getElementsByTagName('h1')[0].innerHTML = 'Hola como estas german'



//estilos

document.querySelector('h1').style.color = 'red';

document.querySelector('h1').style.backgroundColor = 'blue';

document.querySelector('h1').style.fontSize = '50px';
