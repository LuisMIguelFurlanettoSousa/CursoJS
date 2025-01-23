function criaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = criaFuncao('luis');
const funcao2 = criaFuncao('sla');

console.log(funcao(), funcao2());