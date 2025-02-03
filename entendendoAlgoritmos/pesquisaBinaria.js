function pesquisaBinaria (lista, num) {
    const listaOrdenada = lista.sort((a, b) => a - b);

    let baixo = 0;
    let alto = listaOrdenada.length - 1;

    while( baixo <= alto ) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = listaOrdenada[meio];
        
        if(chute === num) return `O numero é ${chute}`;
        chute > num ? alto = meio - 1 : baixo = meio + 1; 
        }
    return -1;
}

const lista = [3, 7, 9, 1, 18, 33];
console.log(pesquisaBinaria(lista, 1));