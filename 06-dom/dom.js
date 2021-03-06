/* Métodos/Funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID

querySelector() 
-> seleciona UM elemento de acordo com um seletor

querySelectorAll() 
-> seleciona VÁRIOS elementos de acordo com um seletor */

// selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);

// selecionando pela TAG
const pagina = document.querySelector('body');
console.log(pagina);

// selecionando todas as TAGS H2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);


/* Modificando elementos, mudando apenas o texto */
titulo.textContent = "Olá Mundo!";
subtitulo[1].textContent = "Full Stack";


// selecionando apenas uma TAG
const legenda = document.querySelector('figcaption');
// inserindo uma TAG
legenda.innerHTML = "<b>Ilustração do DOM</b>";


// CSS via JS
titulo.style.textAlign = "center";
titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';

//usar uma classe via js
const listaEditores = document.querySelector('#lista-editores');

const ultimo = document.querySelector('li:last-child');
console.log(ultimo);
ultimo.classList.add('destaque-item');

const primeiro = document.querySelector('li:first-child');
console.log(primeiro);
//testar: nomedaconst.innerHTML = "<b>Deu ruim</b>";

const segundo = document.querySelector('li:nth-child(2)');
console.log(segundo);

//ultimo.style.color = "red";

// atributo target em links via js
//queryselectorall vira array/matriz
const links = document.querySelectorAll('ul li a');

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
}