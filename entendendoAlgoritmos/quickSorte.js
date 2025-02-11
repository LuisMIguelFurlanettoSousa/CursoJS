function quicksort(array) {
    if (array.length < 2) return array
    
    const primeiro = array[0]
    const meio = array[Math.floor(array.length / 2)]
    const ultimo = array[array.length - 1]

    const pivo = [ primeiro, meio, ultimo].sort((a, b) => a - b)[1]

    const maiores = array.filter(i => i > pivo)
    const menores = array.filter(i => i < pivo)

    return [...quicksort(menores), pivo, ...quicksort(maiores)]
} 

const array = [2, 8, 9, 6 ,3]

const arratOrdenado = quicksort(array)

console.log(arratOrdenado)