/*// mais diferenças entre var e let

// let tem escopo de bloco { ... bloco }
// var so tem escopo de função

const verdadeira = true;

let nome = 'Luis';
var nome2 = 'Luis';//criando

//let nome 'pedro' // nao daria certo pois esta no mesmo bloco

var nome2 = 'otavio'; // redeclarada
if (verdadeira) {
    // let nao pode ser declarado assim se nao fosse dentro de outro bloco
    let nome = 'otavio'
    var nome2 = 'lele'// redeclarando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa';//criando
        console.log(nome);
    }
}

console.log(nome, nome2);*/

var sobrenome = 'Furlanetto'

function falaoi(){
    var nome = 'luis';
    console.log('oi', nome, sobrenome);
}// a funçao aceita variaveis de fora

//console.log(nome); // vai dar erro pq nome esta dentro da funçao

falaoi();

/*se eu criadar uma variavel com var ele faz uma elevaçao hoisting q msm se eu tentar uma varial antes da execuçao dela ela vai retornar undefined ex:

console.log(sobrenome);


var sobrenome = 'Furlanetto';

nao ira dar erro e sim undefined
ja com let da erro
*/
