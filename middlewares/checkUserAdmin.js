module.exports = async (req, res, next) => {
  if ('user' in req.session) {
    if (req.session.user.role.indexOf('admin') >= 0) {
      return next()
    } else {
      res.redirect('/')
    }
  }
  res.redirect('/admin')
}
