const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

//const escrever = require('./madulos/escrever');
const ler = require('./madulos/ler');

// const pessoas = [
//     { nome: 'Luis'},
//     { nome: 'Julia'},
//     { nome: 'Eu'},
//     { nome: 'sla'},
// ];

// const json = JSON.stringify(pessoas, '', 1);
// escrever(cominhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    return renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo)


