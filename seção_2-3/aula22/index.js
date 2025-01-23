/*
Operadores logicos
&& -> AND -> E -> todas as espressões precisam ser true para retornar true
|| -> OR -> OU -> so precisa de uma verdadeira para retornar verdadeira
! -> NOT -> NÃO -> ele nega uma expresao oq é false passa a ser true
*/

const expresaoAnd = true && true && true;
const expresaoOr = true || false || false;
const expresaoNot = !true;
console.log(expresaoNot);