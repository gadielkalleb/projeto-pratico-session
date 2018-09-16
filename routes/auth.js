const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

const User = require('../models/user')

const isUserSession = require('../middlewares/isUserSession')

const models = { User }

// rota de acesso geral verifica se existe um user na sessão
router.use(isUserSession)

router.get('/change-role/:role', authController.changeRole)
router.get('/login', authController.loginForm)
router.get('/logout', authController.logout)
router.post('/login', authController.loginProcess.bind(null, models))

module.exports = router