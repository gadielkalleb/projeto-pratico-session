const express = require('express')
const router = express.Router()

/**
 * @description Schema do model de noticias
 */
const Noticias = require('../models/noticia')

/**
 * @description controller da logica de noticias
 */
const noticiasController = require('../controllers/noticias')

/**
 * @description verifica se o usuario tem a role admin
 */ 
const checkAdmin = require('../middlewares/checkUser')

const models = { Noticias }

router.use(checkAdmin)
router.get('/noticias', noticiasController.admin.bind(null, models))

module.exports = router
