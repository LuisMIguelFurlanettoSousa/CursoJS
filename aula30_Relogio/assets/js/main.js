function mostraData(data, dSemana, mesEscrito) {
    const elementocontainer = document.querySelector('.container');
    const dia = data.getDate();
    const hrs = data.getHours();
    const min = data.getMinutes();
    const ano = data.getFullYear();
    elementocontainer.innerHTML = `<p>${dSemana}, ${dia} ${mesEscrito} ${ano} ${hrs}:${min}</p>`;

}

function diaSemana(day){
    switch(day){
        case 0:
            day = 'Domingo-Feira';
            break
        case 1:
            day = 'Segunda-Feira';
            break
        case 2:
            day = 'Terça-Feira';
            break
        case 3:
            day = 'Quarta-Feira';
            break
        case 4:
            day = 'Quinta-Feira';
            break
        case 5:
            day = 'Sexta-Feira';
            break
        case 6:
            day = 'Sabado';
    }
    return day
}

function mes(mes){
    switch(mes) {
        case 0:
            mes = 'Janeiro';
            break
        case 1:
            mes = 'Fevereiro';
            break
        case 2:
            mes = 'Março';
            break
        case 3:
            mes = 'Abril';
            break
        case 4:
            mes = 'Maio';
            break
        case 5:
            mes = 'Junho';
            break
        case 6:
            mes = 'Julho';
            break
        case 7:
            mes = 'Agosto';
            break
        case 8:
            mes = 'Setembro';
            break
        case 9:
            mes = 'Outubro';
            break
        case 10:
            mes = 'Novembro';
            break
        case 11:
            mes = 'Dezembro';
    }
    return mes
}


const data = new Date();
const dSemana = diaSemana(data.getDay());
const mesEscrito = mes(data.getMonth());
mostraData(data, dSemana, mesEscrito);
