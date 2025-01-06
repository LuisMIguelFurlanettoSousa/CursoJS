function adicionarIdade(obj){
    return obj.idade = obj.idade + 1
}


let pessoa = { nome: 'Carlos', idade: 33 };
adicionarIdade(pessoa);
console.log(pessoa.idade); // Deve retornar 34