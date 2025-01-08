// declaraçao de funçao (function hoisting)

falaOi();
function falaOi() {
    console.log('Oi');
}


// firt-class objects (objetos de primeira classe)
// fuction expression
const souUmDado = function() {
    console.log('sou um dado');
}

function executaFucao(funcao) {
    console.log('vou executar sua função abaixo');
    funcao();
}

executaFucao(souUmDado);

// arrow function

const funcaoArrow = () => {
    console.log('sou uma arrow function');
}

funcaoArrow();

// dentro de um objeto

const obj = {
    falar: function() {
        console.log('estou falando...');
    }
};

obj.falar();