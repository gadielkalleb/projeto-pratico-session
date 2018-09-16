const express = require('express')
const router = express.Router()

const Noticias = require('../models/noticia')

const noticiasController = require('../controllers/noticias')

/**
 * @description verifica se o usuario tem a role admin
 */ 
const checkAdmin = require('../middlewares/checkUser')

const models = { Noticias }

router.use(checkAdmin)
router.get('/', (req, res) => res.send('restrito'))
router.get('/noticias', noticiasController.admin.bind(null, models))

module.exports = router
