function retornaHr(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando intancia de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-04-2007 12:58:12');
    const hora = retornaHr();
    console.log(hora);
}catch (e){
    //tratar erro
} finally {
    console.log('tenha um bom dia');
}
