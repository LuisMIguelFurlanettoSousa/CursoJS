const fs = require(`fs`).promises

module.exports = (caminhoArquivo, conteudo) => {
    fs.writeFile(caminhoArquivo, conteudo, { flag: 'w' })
}