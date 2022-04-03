class PageController {
  renderNotFound (req, res) {
    res.render('404', {
      title: 'Página no encontrada!'
    })
  }
}

module.exports = PageController
