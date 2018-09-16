const express = require('express')
const router = express.Router()

const Noticias = require('../models/noticia')

const noticiasController = require('../controllers/noticias')

const checkAdmin = require('../middlewares/checkUserAdmin')

const models = { Noticias }

// verifica se o usuario esta logado nessa sessao e se é admin
router.use(checkAdmin)
router.get('/', (req, res) => res.send('restrito'))
router.get('/noticias', noticiasController.admin.bind(null, models))

module.exports = router