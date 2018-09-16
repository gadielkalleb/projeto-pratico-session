module.exports = async (req, res, next) => {
  if ('user' in req.session) {
    res.locals.user = req.session.user
    res.locals.role = req.session.role
  }
  return next()
}
