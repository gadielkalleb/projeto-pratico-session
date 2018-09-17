const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')

/**
 * @description checa se um usuario na sessão
 * @returns se houver um usuario ele retorna a sua primera role
 */
const isUserSession = require('../middlewares/isUserSession')

/**
 * @description estrategia para login local
 */
const passport = require('../middlewares/localStrategy')

/**
 * @description estrategia de login com facebook
 */
const facebook = require('../middlewares/facebookStrategy')

/**
 * inicializa passport 
 */
router.use(passport.initialize())
router.use(passport.session())

// rota de acesso geral verifica se existe um user na sessão
router.use(isUserSession)

// estrategia manual de login
router.get('/change-role/:role', authController.changeRole)
router.get('/login', authController.loginForm)
router.get('/logout', authController.logout)

/**
 * Estrategia de login local com passport
 */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'false',
}))

/**
 * Estrategia de login Usando facebook com passport
 */
router.get('/facebook', facebook.authenticate('facebook'))
router.get('/facebook/callback', facebook.authenticate('facebook', {
  failureRedirect: '/', 
}), async(req, res) => res.redirect('/'))

module.exports = router
