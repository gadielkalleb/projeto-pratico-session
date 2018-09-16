const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')

const isUserSession = require('../middlewares/isUserSession')

/**
 * @description estrategia para login local
 */
const passport = require('../middlewares/localStrategy')

router.use(passport.initialize())
router.use(passport.session())

// rota de acesso geral verifica se existe um user na sessão
router.use(isUserSession)

router.get('/change-role/:role', authController.changeRole)
router.get('/login', authController.loginForm)
router.get('/logout', authController.logout)
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'false',
}))

module.exports = router
