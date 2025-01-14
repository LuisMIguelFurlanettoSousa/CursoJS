const express = require('express');
const app = express();

//         Criar   Ler  Atualizar   apagar
//CRUD -> CREATE, READ, UPDATE,    DELETE
//          POST  GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina sobre

app.get('/', (req, resp) => {
    resp.send('Hello world!opa merdeus');
});

app.get('/contato', (req, resp) => {
    resp.send('slk meu que foda')
})

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('servidor executando na porta 3000');
});