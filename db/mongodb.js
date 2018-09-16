const mongoose = require('mongoose')
const path = require('path')

const initialUser = require(path.resolve('./middlewares/initialUser'))

// banco de dados 
const mongo = process.env.MONGODB || 'mongodb://localhost/noticias'
mongoose.Promise = global.Promise

// conecta no meu banco de dados
mongoose.connect(mongo)
  .then(() => {
    initialUser()
    console.log('Banco de dados conectado')
}).catch(e => console.log(e))

module.exports = mongoose
