require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
            app.emit('pronto'),
            console.log('conectei ao banco de dados')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path');
const middlewares = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOption = express({
    secret: 'kajdadja caoondackdjfafn asfkdjsaofidsoaiv',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOption)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewares.middlewares)

app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar: http://localhost:3000');
        console.log('servidor executando na porta 3000');
    });
})