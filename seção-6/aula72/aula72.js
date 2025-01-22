// defineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave, se tiver como true nn aparece a chave nem no for 
        configurable: true, // pode ser reconfigurado (true), nao configuravel false, se tiver false nn pode nem apagar a variavel

        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError ('mensagem')
            }

            estoquePrivado = valor
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 9000
console.log(p1);
console.log(p1.estoque);
