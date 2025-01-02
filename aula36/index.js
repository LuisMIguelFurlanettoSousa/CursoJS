const frutas = ['Pera', 'Uva', 'maçã'];

for (let i in frutas){
    console.log(i, frutas[i]);
}

const pessoa = {
    Nome: 'Luis',
    Sobrenome: 'Furlanetto',
    Idade: 17
}

for (let key in pessoa){
    console.log(key, pessoa[key]);
}