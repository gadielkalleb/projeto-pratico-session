exports.index = async ({ Noticias }, req, res) => {
  const noticias = await Noticias.find({ category: 'public'})
  res.render('noticias/index', { noticias })
}

exports.restrito = async ({ Noticias },req, res) => {
  const noticias = await Noticias.find({ category: 'private'})
  res.render('noticias/restrito', { noticias })
}

exports.admin = async ({ Noticias }, req, res) => {
  const noticias = await Noticias.find({})
  res.render('noticias/admin', { noticias })
}
