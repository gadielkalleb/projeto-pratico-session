require('dotenv').config()
const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

/**
 * @description esta variavel é minhha conexão com meu banco de dados
 * @returns verifica se houve conexão com o mongoDB
 */
const mongo = require('./db/mongodb')

const app = express()
const port = process.env.PORT || 3000

// routes
const noticias = require('./routes/noticias')
const restrito = require('./routes/restrito')
const auth = require('./routes/auth')
const pages = require('./routes/pages')
const admin = require('./routes/admin')

// minha view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middle de sessaão
app.use(session({
  secret: 'fullstack-master',
  resave: true,
  saveUninitialized: true,
}))

// middle de para pegar o corpo das requisições
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))

// uso das rotas 
app.use('/', auth)
app.use('/', pages)
app.use('/restrito', restrito)
app.use('/noticias', noticias)
app.use('/admin', admin)

app.listen(port, () => {
  console.log(`Escutando na porta ${port}. Aplicação rodando em http://localhost:${port}`)
  mongo
})
