module.exports = async (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user
    if (!req.session.role) {
      req.session.role = req.user.role[0]
    }
    res.locals.role = req.session.role
  }
  return next()
}
