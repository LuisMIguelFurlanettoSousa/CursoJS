// //new Object -> object.prototype
// const objA = {
//     chaveA: 'A'
//     //__proto__: object.prototype
// };

// //new Object -> object.prototype
// const objB = {
//     chaveB: 'B'
//     //__proto__: objA
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA); // no __proto__ do objB eu vou poder acessar a chaveA, objB.chaveA --> A
// Object.setPrototypeOf(objC, objB);

// function Produto() {

// }

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('teclado mad68', 400);
const p2 = new Produto('AOC Hero', 1100);

// objeto literal nao pega o prototipe automaticamente de Produto
const p3 = {
    nome: 'suporte monitor e notebook',
    preco: 250
}
Object.setPrototypeOf(p3, Produto.prototype)


p1.aumento(50);
p2.desconto(30);

p3.desconto(50) // para dar certo sendo um obj literal eu tenho que passar o prototype de produto: Object.setPrototypeOf(p3, Produto.prototype)

console.log(p1);
console.log(p2);
console.log(p3);