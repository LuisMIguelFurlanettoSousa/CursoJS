function exibirPessoas(p){
    for(let chave in p){
        console.log(`${p[chave]}`);
    }
}

let pessoa = {
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo'
}
console.log(exibirPessoas(pessoa));