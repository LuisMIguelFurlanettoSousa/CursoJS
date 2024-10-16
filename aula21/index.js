/*
Operadores de compração
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/
// Maior que (>)
let a = 10;
let b = 5;
console.log(a > b);  // True, porque 10 é maior que 5

// Menor que (<)
a = 3;
b = 7;
console.log(a < b);  // True, porque 3 é menor que 7

// Maior ou igual (>=)
a = 5;
b = 5;
console.log(a >= b);  // True, porque 5 é igual a 5

// Menor ou igual (<=)
a = 4;
b = 8;
console.log(a <= b);  // True, porque 4 é menor que 8

// Igual a (==)
a = 6;
b = 6;
console.log(a == b);  // True, porque 6 é igual a 6

// Estritamente igual (===)
a = 5;
b = '5';
console.log(a === b);  // False, porque 5 (número) não é igual a '5' (string)

// Diferente de (!=)
a = 10;
b = 20;
console.log(a != b);  // True, porque 10 é diferente de 20

// Estritamente diferente (!==)
a = 5;
b = '5';
console.log(a !== b);  // True, porque 5 (número) é estritamente diferente de '5' (string)