// function construtora -> objetos
// function factory -> objetos

// construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' Sou um metodo');
    }
}

const p1 = new Pessoa('luis', 'miguel');

p1.metodo();