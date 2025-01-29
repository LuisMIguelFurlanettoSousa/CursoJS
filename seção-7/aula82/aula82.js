// herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} ja ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} ja desligado`);
            return;
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('celula');
// d1.ligar();
// d1.desligar();
// console.log(d1);

class celula extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const s1 = new celula('batata', 'amaronzado');
s1.ligar()
s1.ligar()
console.log(s1.ligado);