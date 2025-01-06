const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of numeros){
    if (n === 3 || n === 5){
        console.log(`aqui é o ${n}`);
        continue;
    }
    if (n === 7){
        console.log(n);
        break;
    }

    console.log(n);
}