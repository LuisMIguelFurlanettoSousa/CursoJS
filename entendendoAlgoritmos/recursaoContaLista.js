function contaLista(arr) {
    if (arr[1] === undefined && arr[0] !== undefined) return 1
    arr.pop()
    let elemento = 1
    return elemento += contaLista(arr)  
}

const array = [1, 1, 1, 1, 1, 1]
const tamanhoLista = contaLista(array)

console.log(tamanhoLista)