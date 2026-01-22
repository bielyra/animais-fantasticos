/* const animaisSection = document.getElementById('animais');
console.log(animais);

const primeiroUl = document.querySelector('ul');
const navItem = primeiroUl.querySelector('li');

console.log(navItem);  


const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//console.log(gridSectionHTML); // 4 itens
//console.log(gridSectionNode); // 3 itens



// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll('img');
console.log(imgs);


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[-- paragrafos.length]);

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
    console.log(item);
});
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    console.log(item);
});
*/







// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);

// Mostre no console cada parágrado do site

const pDoSite = document.querySelectorAll('p');

console.log(pDoSite);


pDoSite.forEach((item) => {
    console.log(item);
});
// Mostre o texto dos parágrafos no console
pDoSite.forEach((item) => {
    console.log(item.innerText);
});