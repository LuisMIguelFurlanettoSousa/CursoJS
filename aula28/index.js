
// const data = new date();
//const data = new date(0);  01/01/1970 timastap unix, marco 0

//const data = new Date(2019, 3, 20, 15, 14, 27, 999); // retorna essa data informada ano, mes começando a contar do 0, horas, min, seg, ms

//const data = new Date(1730136639908);

//console.log('dia:', data.getDate());
//console.log('ano:', data.getFullYear());
//console.log('mes:', data.getMonth() + 1); //começa do 0
//console.log('hr:', data.getHours());
//onsole.log('min:', data.getMinutes());
//console.log('s:', data.getSeconds());
//console.log('ms:', data.getMilliseconds());
//console.log('dia da semana:', data.getDay()); // 0 - domingo 6 - sabado
//console.log(data.toString());
//console.log(Date.now()); retorna a data do marco zero ate o dia informado em milessegundos

function zeroaEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(d){
    const dia = zeroaEsquerda(d.getDate());
    const mes = zeroaEsquerda(d.getMonth() + 1);
    const ano = zeroaEsquerda(d.getFullYear());
    const hora = zeroaEsquerda(d.getHours());
    const min = zeroaEsquerda(d.getMinutes());
    const seg = zeroaEsquerda(d.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);