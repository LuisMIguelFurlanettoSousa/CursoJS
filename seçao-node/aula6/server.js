const express = require('express')
const app = express()

//         Criar   Ler  Atualizar   apagar
//CRUD -> CREATE, READ, UPDATE,    DELETE
//          POST  GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina sobre

app.get('/', (req, res) => {
    res.send(`hello world`)
})

app.listen(3000, () => {
    console.log('estou escutando na poorta 3000')
    console.log('http://localhost:3000')
})

