// pq usar o __proto__, prototype melhora drasticamente a performance de um programa ?
// todo vez para eu adicionar algo no prototype, vamos supor que o nome da minha funçao construtora é pessoa, ai toda vez para eu adicionar algo no __proto__ dela eu preciso colocar pessoa.prototype = 'qualuqer coisa', isso nao ficaria muito verboso? e nn teria uma maneira melhor de adicionar coisas ou varias coisas ai ?
// existe mais prototypes dentro de uma fuçao, exemplo __proto__ dps dentro deste proto tem o Object.prototype, pessoa --> prototype --> Object.prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
}
const pessoa1 = new Pessoa('Luis', 'Miguel');

console.dir(pessoa1);