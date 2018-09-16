exports.changeRole = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role.indexOf(req.params.role) >= 0) {
      req.session.role = req.params.role
    }
  }
  res.redirect('/')
}

exports.loginForm = (req, res) => res.render('login')

exports.loginProcess = async ({ User }, req, res) => {
  const user =  await User.findOne({ username: req.body.username })
  if (user) {
    const isValid = await user.checkPassword(req.body.password)
    if(isValid) {
      req.session.user = user
      req.session.role = user.role[0]
      res.redirect('/restrito/noticias')
    }
    else {
      res.redirect('/login')
    }
  } else {
    res.redirect('/login')
  }
}

exports.logout = (req,res) => {
  req.session.destroy(() => res.redirect('/'))
}
