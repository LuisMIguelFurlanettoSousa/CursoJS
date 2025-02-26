exports.formHome = (req, res) => {
    res.render('index', {
        titulo: 'ooooooooooooooooooooooooo',
        numero: [3, 34, 5, 6, 5, 37, 45, 74],
    })
    return
}

exports.respHome = (req, res) => {
    res.send(req.body)
    return
}
