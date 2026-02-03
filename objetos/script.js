
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
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
