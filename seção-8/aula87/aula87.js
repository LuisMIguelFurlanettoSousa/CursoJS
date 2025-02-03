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

const promises = [
    //'primeira coisa', 
    esperaAi('primeira promise', rand(1, 3)),
    esperaAi('segunda promise', rand(1, 3)),
    esperaAi('terceira promise', rand(1, 3)),
    //'ultima coisa',
] 


// Promise.race(promises)
//     .then((valor) => {
//         console.log(valor);
//     })

// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor);
//     })

Promise.resolve()