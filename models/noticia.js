const mongoose = require('mongoose')

const NoticiaSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Noticia = mongoose.model('Noticia', NoticiaSchema)

module.exports = Noticia
