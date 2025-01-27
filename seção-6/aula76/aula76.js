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
    Produto.call(this, nome, valor); // Camiset herda todo o conteudo que Produto tem e pode tb ter conteudo so dela
    this.cor = cor;
};


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumentoP = function(percentual) {
    this.valor = this.valor + (this.valor * (percentual / 100));
}

function Caneca(nome, valor, material, estoque) {
    Produto.call(this, nome, valor);

    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:false,
        
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof(valor) !== 'number' || valor < 0){
                throw new console.error('O valor precisa ser positivo.');
            }
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('oversize', 1, 'black');
const caneca = new Caneca('caneca fudida', 20, 'madeira', 3)
const produto = new Produto('gen', 20);

console.log(caneca);
// console.log(camiseta);
// console.log(produto);