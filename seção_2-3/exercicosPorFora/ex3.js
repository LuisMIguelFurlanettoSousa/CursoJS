function valorExiste(f, v){
    for(let i = 0; i < f.length; i++){
        if(f[i] === v){
            return true;
        }
    }
    return false;
}


let frutas = ['maçã', 'banana', 'laranja'];
console.log(valorExiste(frutas, 'banana')); // Deve retornar true
console.log(valorExiste(frutas, 'uva')); // Deve retornar false