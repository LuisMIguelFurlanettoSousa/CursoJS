function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg + ' - Passo na promisse')
        }, tempo);
    })
}

async function executa() {
    try{
        const fase1 = await esperaAi('ta aq é a primeira', rand(3, 5));
        console.log(fase1);
        const fase2 = await esperaAi('segundaaaaa', rand(1, 3));
        console.log(fase2);
        const infiltrada = await esperaAi(777, rand(1, 3));
        console.log(infiltrada);
        const fase3 = await esperaAi('ooooooooooooo ta na terceiraaaaa', rand(1, 3));
        console.log(fase3);
    } catch(e) {
        console.log(e)
    }
}
executa();