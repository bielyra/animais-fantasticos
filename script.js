const animaisSection = document.getElementById('animais');
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
