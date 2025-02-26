module.exports = (req, res, next) => {
    console.log()
    console.log(`seu nome é ${req.body.cliente}`)
    console.log()
    next()
}