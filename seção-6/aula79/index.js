
const falar = { 
    falar() {
    console.log(`${this.nome} esta falando`)
  }
};
const comer = { 
    comer() {
    console.log(`${this.nome} esta comendo`)
  }
};
const beber = { 
    beber() {
    console.log(`${this.nome} esta bebendo`)
  }
};


const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome, enumerable: true },
        sobrenome: { value: sobrenome, enumerable: true }
    });
}

const p1 = criaPessoa('luis', 'miguel');
console.log(p1.falar());