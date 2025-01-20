const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;

imc = peso / (altura * altura);

let anoNascimento;

anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} idade, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu imc é ${imc}`);// template strngs
console.log(`${nome} nasceu em ${anoNascimento}`);