// class construtora
class Pessoa {
     constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
     }

     falar() {
        console.log(`${this.nome} esta falando`);
     }
}

// objeto construtor

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando`);
}

const p1 = new Pessoa('luis', 'Furlanetto')
const p2 = new Pessoa2('luis', 'Furlanetto')
console.log(p1.falar());
console.log(p2.falar());