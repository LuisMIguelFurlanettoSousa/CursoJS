const path = require('path')

const caminhoArquivo = path.resolve(__dirname, `teste.json`)
const ler = require('./modulos/ler')
const escrever = require(`./modulos/escrever`)

// const dados = [
//     {nome: `luis`},
//     {nome: `julia`},
//     {nome: `luis`},
//     {nome: `julia`},
// ]

// const json = JSON.stringify(dados,' ', 2)

// escrever(caminhoArquivo, json)

async function lerArquivo(caminhoArquivo) {
    const conteudo = await ler(caminhoArquivo) 
    return conteudo
}

const conteudoArquivo = lerArquivo(caminhoArquivo)
    .then((resp) => console.log(resp))
    .catch((e) => console.log(e))

console.log(conteudoArquivo)