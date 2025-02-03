function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg)
            console.log('tempo: ' + tempo)
        }, tempo);
    })
}

esperaAi('qulquer coisa', rand(3, 5))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Qualquer coisa 2 sla maluco doidera', rand(1, 5))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi(1234, rand(3, 5))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log(e)
  });