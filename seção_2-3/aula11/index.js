/*
alert() é um atalho para window.alert()
confirm(), aparece uma aba com a sua msg e ok e cancel, que essa janela retorna um valor boolean True para ok e False para cancelar
prompt()aparece uma aba para vc digitar uma msg, dando um input nessa msg, retornando oq foi escrito

todas essa funçoes sao parte do objeto window
se as funçoes estiverem dentro de um objeto vira um metodo 
um alert() por exemplo retorna undefind pq ele nao aponta para luagar nenhum na memoria, sempre que eu executo qualquer funçao pode ou nao retornar um valor

se eu fazer assim const confirma = confirm('Realmente deseja apagar?') o que a funçao retornar vai ser atribuido na variavel 

*/

let num1 = Number(prompt('Digite um numero: '));
let num2 = Number(prompt('Digite outro numero: '));
window.alert(`O resultado da sua conta foi ${num1 + num2}`);