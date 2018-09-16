const express = require('express')
const router = express.Router()

const Noticias = require('../models/noticia')

const noticiasController = require('../controllers/noticias')

const checkSession = require('../middlewares/checkUserRestrito')

const models = { Noticias }

// verifica se o usuario esta logado nessa sessao
router.use(checkSession)
router.get('/noticias', noticiasController.restrito.bind(null, models))

module.exports = router
