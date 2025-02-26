exports.middlewares = (req, res, next) => {
    res.locals.qualquerCoisa = 'um titulo da pagina';
    next();
}