const express = require('express');
const app = express();

// http://facebook.com/profiles/31151425343

app.use(express.urlencoded({extended: true}))

app.get('/', (req, resp) => {
    resp.send(`
        <form action="/" method="POST"> 
            Nome do Cliente: <input type="text" name="name">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, resp) => {
    resp.send('oi');
    console.log(req.params.idUsuarios)
});

app.post('/', (req, resp) => {
    resp.send(`vc enviou: ${req.body.name}`);
    console.log(req.body.name)
});

app.get('/', (req, resp) => {
    resp.send('Hello world!opa merdeus');
});


app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('servidor executando na porta 3000');
});