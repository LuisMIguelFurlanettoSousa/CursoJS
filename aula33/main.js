const pessoa = {
    nome: 'luis',
    sobrenome: 'Furlanetto',
    idade: 17,
    endereco: {
        rua: 'avenida brasil',
        numero: 340
    }
};


const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);