exports.formHome = (req, res) => {
    console.log(req.session)
    res.render('index')
}

exports.respHome = (req, res) => {
    res.send(req.body.name)
    console.log('cheguei aq')
}