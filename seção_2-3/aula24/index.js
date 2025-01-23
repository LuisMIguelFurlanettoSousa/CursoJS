// if pode ser executado sozinho
// sempre que existe else teve um if antes
// posso ter varios else ifs na checagem
// so posso ter uma else na checagem

const hora = 50;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if(hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else{
    console.log('ola');
}