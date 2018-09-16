module.exports = async (req, res, next) => {
  if (req.isAuthenticated()) {
    if ((req.user.role.indexOf('admin') >= 0) || (req.user.role.indexOf('restrito') >= 0)) {
      return next()
    } else {
      res.redirect('/')
    }
  }
  res.redirect('/login')
}
