const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero esta entra 6 e 8');
} else if (1 === 1) { // quando for executado vai sair do if mesmo se a proxima for verdadeira pq essa linha é verdadeira
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11) { // verdadeira
    console.log('O numero esta entra 9 e 11');
} else {
    console.log('O numero nao esta entre 0 e 11');
}

console.log('...Aq é o resto do codigo');