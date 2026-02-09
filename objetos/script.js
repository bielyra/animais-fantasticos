
// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
*/
function Pessoa() {
  this.nome = 'Nome pessoa';
  this.idade = 0;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa();
joao.nome = 'João';
joao.idade = 20;
const maria = new Pessoa();
maria.nome = 'Maria';
maria.idade = 25;
const bruno = new Pessoa();
bruno.nome = 'Bruno';
bruno.idade = 15;

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}
const listaItens = new Dom('li');
const ul = new Dom('ul');
listaItens.addClass('ativar');
ul.addClass('ativar-ul');

/* function Carro(){
    this.marca = 'Marca do carro';
    this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

const nome = prompt('Qual o seu nome?');
const idade = prompt('Qual a sua idade?');
const pessoa = new Object();
pessoa.nome = nome;
pessoa.idade = idade;
console.log(pessoa);

const resposta = confirm("Você gosta de JavaScript?");
if (resposta) {
  console.log("Que ótimo!");
} else {
  console.log("Ah, que pena!");
} */

// prototype 1 - aula 0402
/* function Pessoa(nome, idade) {
 this.nome = nome;
 this.idade = idade;
}
const andre = new Pessoa('André', 28);
 
console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
*/
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
/* 
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}
const pessoa1 = new Pessoa('João', 'Silva', 30);
console.log(pessoa1.nomeCompleto());
console.log(pessoa1.idade);


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //funcao
li.innerText; //string
li.value; //number
li.hidden; //boolean
li.offsetLeft; // number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;  // String, pois o valor de li.hidden é boolean, e o construtor de boolean é String

// Liste 5 objetos nativos

Array
String
Object
Number
Boolean

// Liste 5 objetos do browser

Window
Document
Element
NodeList
HTMLCollection
History

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

USB
Serial

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento */
/* 
const transacoes2 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];


let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes2.forEach((item) => {
  const valorLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += valorLimpo;
  } else if (item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += valorLimpo;
  }

});


console.log(taxaTotal);
console.log(recebimentoTotal);



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);



// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html);



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length -1));
console.log(frase.slice (-1));


// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;

transacoes.forEach((item) =>{
  item = item.toLowerCase().trim().slice(0,4);
  if(item === 'taxa')
    taxasTotal++
})

console.log(`Em transações, possui o total de ${taxasTotal} taxas`);


// Retorne um número aleatório
// entre 1050 e 2000

const numAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(numAleatorio);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
/////////////////////////////////////////////////////////////
//console.log(Math.max(inteiros));
const maior = Math.max(...numeros.split(', ').map(Number));
console.log(maior); 

//////////////////////////////////////////////////////////
const arrayNumeros = numeros.split(', ');
console.log(arrayNumeros);

let numMaior = -Infinity;

arrayNumeros.forEach((item) =>{
  
  const num = Number(item);

  if(num > numMaior){
    numMaior = num;
  }
});
console.log(numMaior);



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPrecos(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}


let soma = 0;

listaPrecos.forEach((preco) =>{
  soma += limparPrecos(preco);
  
})

console.log(soma);

limparPrecos(listaPrecos[0]);

 */

/////////// Arrays - 0406 
/* const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');

console.log(dados[1][2].cor) // azul

let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

const carrosArray = Array.from(carros);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2

array = new Array(1,4,6,2,3,4,7,8,9,5,78,9,52,43,62,12)

console.log(array.sort((a, b) => a - b))
console.log(array.sort((a, b) => b - a))
////////////////////////////////////////////////////
*/
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']; 

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor);

// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');


console.log(comidas);




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();

// Inverta a ordem dos estudantes
estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));


// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));


console.log(estudantes);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');
console.log(html);



const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const antigoArrayCarros = carros.slice();
console.log(carros.pop());
console.log(carros);
console.log(antigoArrayCarros);



