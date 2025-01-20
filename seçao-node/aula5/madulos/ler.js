const fs = require('fs').promises;

module.exports = (caminho) => {
    const dados = fs.readFile(caminho, 'utf-8');
    return dados;
};