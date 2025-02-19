exports.formHome = (req, resp) => {
    resp.send(`
        <form action="/" method="POST"> 
            Nome do Cliente: <input type="text" name="name">
            <button>Enviar</button>
        </form>
    `);
}

exports.respHome = (req, res) => {
    res.send(req.body.name)
    console.log('cheguei aq')
}