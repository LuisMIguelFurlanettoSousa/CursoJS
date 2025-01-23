
// arguments que sustenta todos os argumentos enviados
const conta = (operador, acumulador, ...numeros)  => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};

conta('*', 1, 20, 30, 50)