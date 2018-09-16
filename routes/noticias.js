const express = require('express')
const router = express.Router()

const Noticias = require('../models/noticia')
const noticiasController = require('../controllers/noticias')

const models = { Noticias }

router.get('/', noticiasController.index.bind(null, models))

module.exports = router
