// defineProperty

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave, se tiver como true nn aparece a chave nem no for 
        value: estoque, // valor da chave
        writable: true, // deixa o estoque inalteravel (false), alteravel (true)
        configurable: true, // pode ser reconfigurado (true), nao configuravel false, se tiver false nn pode nem apagar a variavel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 50000; // so posso alterar o valor se writeble estiver true
//delete p1.estoque; // so apagar se configurable estiver true
console.log(p1);
console.log(Object.keys(p1));

for (chave in p1) {
    console.log(chave);
}