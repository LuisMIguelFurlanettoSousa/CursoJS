function somaArr(arr) {
    const tamArr = arr.length

    if(tamArr === 0) {
        return 0
    } else if(tamArr === 1) {
        return arr[0]
    }
    const elemento = arr.shift()
    
    return elemento + somaArr(arr)
}

console.log(somaArr([12, 3, 6, 100]))