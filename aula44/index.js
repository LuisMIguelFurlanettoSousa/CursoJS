function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ("x e y tem que ser numeros");
    }

    return x + y;
}
try{
    console.log(soma(5, 5));
    console.log(soma('abc', 65));

}
catch (err){
console.log('algo melhor');
}