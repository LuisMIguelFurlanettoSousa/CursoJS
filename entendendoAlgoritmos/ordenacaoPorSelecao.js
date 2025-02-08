//Big O (N ^ 2)

function buscaMenor(array) {
    let menor = array[0]
    let menor_indice = 0

    for (let i in array) {
        if (array[i] < menor) {
            menor = array[i]
            menor_indice = i
        }
    }
    return menor_indice
}


function ordenaArray(array) {
    let novo_array = []
    const tamanhoArray = array.length;
    
    for (let i = 0; i < tamanhoArray; i++) {
        const menorIndice = buscaMenor(array)
        novo_array.push(array.splice(menorIndice, 1)[0])
    }
    return novo_array
}

const numerosDesordenados = [4, 8, 10, 76, 2, 3]
const arrayEmOrdem = ordenaArray(numerosDesordenados)
console.log(arrayEmOrdem)
