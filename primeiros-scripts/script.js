/* // /* const animaisSection = document.getElementById('animais');
// console.log(animais);

// const primeiroUl = document.querySelector('ul');
// const navItem = primeiroUl.querySelector('li');

// console.log(navItem);  


// const titulo = document.querySelector('.titulo');
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// //console.log(gridSectionHTML); // 4 itens
// //console.log(gridSectionNode); // 3 itens



// // Retorne no console todas as imagens do site

// const imgs = document.querySelectorAll('img');
// console.log(imgs);


// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imagensAnimais);


// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// // Selecione o primeiro h2 dentro de .animais-descricao

// const h2Animais = document.querySelector('.animais-descricao h2');
// console.log(h2Animais);

// // Selecione o último p do site

// const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos[-- paragrafos.length]);

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//     console.log(item);
// });
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//     console.log(item);
// });
// ///////////////////////////////////////////////////////
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// imgs.forEach(() => i++);

// // Mostre no console cada parágrado do site

// const pDoSite = document.querySelectorAll('p');

// console.log(pDoSite);


// pDoSite.forEach((item) => {
//     console.log(item);
// });
// // Mostre o texto dos parágrafos no console
// pDoSite.forEach((item) => {
//     console.log(item.innerText);
// });



// /// 0305 Classes e Atributos

// // classes
// const menu = document.querySelector('.menu');
// menu.classList.add('ativo', 'teste');
// menu.classList.remove('azul');


// if(menu.classList.contains('azul')){
//     menu.classList.add('possui-azul');
// } else {
//     menu.classList.add('nao-possui-azul');
// }

// menu.className += ' Jorge';

// console.log(menu.className);

// // atributos

// const animais = document.querySelector('.animais');

// console.log(animais.attributes.length);

// const img = document.querySelector('img');
// const srcImg = img.getAttribute('src');
// console.log(srcImg);

// img.setAttribute('alt', ' baita de uma raposa bonita');

// console.log(img.getAttribute('alt'));

// console.log(img.hasAttribute('id'));

// img.removeAttribute('alt');

// console.log(img.hasAttributes());

// // Adicione a classe ativo a todos os itens do menu

// const itensMenu = document.querySelectorAll('.menu a');
// itensMenu.forEach((item) => {
//     item.classList.add('ativo');
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// itensMenu.forEach((item, index) => {
//     /*if(index !== 0){
//         item.classList.remove('ativo');
//     }
        
//     item.classList.remove('ativo');
// });
// itensMenu[0].classList.add('ativo');
// // Verifique se as imagens possuem o atributo alt

// const todasImgs = document.querySelectorAll('img');
// todasImgs.forEach((item) => {
//     const possuiAlt = item.hasAttribute('alt');
//     console.log(item, possuiAlt);
// }); 

// // Modifique o href do link externo no menu

// const linkExterno = document.querySelector('a[href^="http"]');
// linkExterno.setAttribute('href', 'https://www.google.com');
// // Dimensões e Distâncias 
// const larguraTela = window.innerWidth;
// const alturaTela = window.innerHeight;

// if(larguraTela>= 48){
//     if(alturaTela<48){
//     }
//     console.log('Possue o tamanho mínimo recomendado pelo google');}else{
//         console.log('A tela não possue altura nem largura mínima recomendada pelo google');
//     }
// console.log(`Possue ${larguraTela} de largura e ${alturaTela} de altura`);


// const listaAnimais = document.querySelector('.animais-lista');
// const height = listaAnimais.scrollHeight;
// const widht = listaAnimais.scrollWidth;

// console.log(height, widht);

// console.log(window.innerHeight);

// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const pImg = document.querySelector('img');
// const imgTop = pImg.offsetTop;

// console.log(imgTop);

// // Retorne a soma da largura de todas as imagens

// function somaLarguraImagens(){
// const todasImgs = document.querySelectorAll('img');    
// let soma = 0;
// todasImgs.forEach((todasImgs) => {
//     soma += todasImgs.offsetWidth;
// });    
// console.log(soma);
// }

// window.onload = function(){
//     somaLarguraImagens();
// }      
// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a');
// console.log(links);
// // tentar arrumar esse foreach e o if... organizar pra poder mostrar no console se cada link possui ou não o tamanho recomendado e depois corrigir o tamanho dos links no css
// links.forEach((link) => {
//     const linksWidth = item.offsetWidth;
//     const linksHeight = item.offsetHeight;});
//     if(linksWidth >= 48 && linksHeight >= 48){
//         console.log(item, 'Possui o tamanho recomendado');
//     } else {
//         console.log(item, 'Não possui o tamanho recomendado');
// }    

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const browserSmall = window.matchMedia('(max-width: 720px)').matches;

// if (browserSmall){
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile');
// }

// 

// // 0307 - Eventos

// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// }

// //h1.addEventListener('click', callback);
// //h1.addEventListener('mousemove', callback);
// //window.addEventListener('scroll', callback);
// //window.addEventListener('resize', callback);

// function handleKeyboard(event) {
//     if(event.key === 'a'){
//         document.body.classList.toggle('azul');
//     }
    
//     //console.log(event.key);
// }
// document.addEventListener('keydown', handleKeyboard);
// //window.addEventListener('keydown', callback);


// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });

// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links

// const linkInterno = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//     console.log(event);
//     event.preventDefault();
//     //event.currentTarget.classList.add('ativo');
//     linkInterno.forEach((link) => {
//         link.classList.remove('ativo');
//     });
//     event.currentTarget.classList.add('ativo');
// }


// linkInterno.forEach((link) => {
//     link.addEventListener('click', handleLink);
// });
        

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados


// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event){
//     //console.log(event.currentTarget);
//     //event.currentTarget.remove();
// }


// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', handleElemento);{
//     }
// });

// console.log(todosElementos);


// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento


// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function handleClickT(event){
//     console.log(event.key);
    
//     if(event.key === 't'){
//         document.documentElement.classList.toggle('textomaior');
//     }
// }

// window.addEventListener('keydown', handleClickT);

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// //menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// //menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
//  const lista = document.querySelector('.animais-lista');

//  console.log(lista.children[--lista.children.length]);
//  console.log(lista.querySelector('li:last-child'));

//  console.log(lista.previousSibling);

//  const contato = document.querySelector('.contato');
//  const titulo = contato.querySelector('.titulo');
//  const mapa = document.querySelector('.mapa');


// //contato.appendChild(lista); // move lista para o final de contato
// //contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// //contato.removeChild(titulo); // remove titulo de contato
// //contato.replaceChild(lista, titulo); // substitui titulo por lista

//  const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

//  console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);


cloneh1.classList.add('azul');
faq.appendChild(cloneh1); */