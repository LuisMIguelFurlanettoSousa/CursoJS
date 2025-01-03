function mostraHr() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHr());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Ola, mundo!');
}, 5000);