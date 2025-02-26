exports.formHome = (req, res) => {
    res.render('index')
}

exports.respHome = (req, res) => {
    res.send(req.body.name)
    console.log('cheguei aq')
}