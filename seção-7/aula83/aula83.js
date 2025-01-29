class Telefone {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    static testandoStatic() {
        console.log(`Eu achei o this: que vai retornar toda a classe que eu estou`);
        console.log(`Este this se refere à própria classe onde o método foi definido.`);
        console.log(`Métodos estáticos são chamados diretamente na classe, sem precisar instanciar um objeto.`);
        console.log(`Exemplo correto: MinhaClasse.testandoStatic()`);
        console.log(`Exemplo errado: const obj = new MinhaClasse(); obj.testandoStatic(); // Isso daria erro.`);
        console.log(`Métodos estáticos não têm acesso direto às propriedades de instâncias da classe.`);
        console.log(`Eles são úteis para utilitários, funções auxiliares ou lógica que não depende de instâncias.`);
    }
}

console.log(Telefone.testandoStatic());