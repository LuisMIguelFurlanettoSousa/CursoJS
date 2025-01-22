// Herança

function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.aumento = function(valor) {
    this.valor += valor;
};

Produto.prototype.desconto = function (valor) {
    this.valor -= valor;
};

function Camiseta(nome, valor, cor) {
    Produto.call(this, nome, valor)
}

Camiseta.prototype = Object.create(Produto.prototype)

const camiseta = new Camiseta('oversize', 110, 'black')


camiseta.aumento(10)
console.log(camiseta)
console.log(Produto)