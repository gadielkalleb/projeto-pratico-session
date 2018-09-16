const express = require('express')
const router = express.Router()

const Noticias = require('../models/noticia')

const noticiasController = require('../controllers/noticias')

/**
 * @description verifica se o usuario esta logado nessa sessao
 */
const checkSession = require('../middlewares/checkUser')

const models = { Noticias }

router.use(checkSession)
router.get('/noticias', noticiasController.restrito.bind(null, models))

module.exports = router
