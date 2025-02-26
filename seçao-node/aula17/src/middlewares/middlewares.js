exports.middlewaresGlobal = (req, res, next) => {
    res.locals.qualquerCoisa = 'um titulo da pagina';
    next();
}

exports.checkCsurf = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404.ejs')
    }
    next()
}

exports.csrfMiddlewares = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}