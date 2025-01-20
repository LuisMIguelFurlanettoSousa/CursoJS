/*

&& -> false && true -> false "O valor mesmo"
|| -> true || false -> vai retornar "O valor verdadeiro"

FALSY
*false
0
'' "" `` strings vazias
null/undefind
Nan

*/

//console.log('Luis miguel' && 0 && 'julia'); retorna 0 pq parou ali com o curto circuito ja que é um falsy
//console.log('Luis' && '' && 'Julia'); retorna a string vazia pq parou ali com o curto circuito ja que é um falsy

//console.log(false || null || undefined ||'Luis' || ''); retorna luis pq é a primeira verdadeira encontrada diferente do && que retorna a primeira false onde ele para

// diferenças o && retorna falsa pq se houver uma falsa tudo é falso ja o || retorna a primeira verdadeira pq se houver uma verdadeira tudo é verdadeira 