const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Blizzy');
console.log(p1.nome);

const path = require('path');
const axios = require('axios');

console.log(path, axios);