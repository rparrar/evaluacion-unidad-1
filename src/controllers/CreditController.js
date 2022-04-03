class CreditController {
  constructor () {
    this.getSimpleRate = this.getSimpleRate.bind(this)
  }

  renderCreditForm (req, res) {
    const simpleRate = 0
    res.render('credit-form' , {
      title : 'Cálculo de interés simple'
    })
  }

  getSimpleRate (req, res) {
    const ammount = parseInt(req.body.ammount)
    const rate = parseInt(req.body.rate)
    const years = parseInt(req.body.years)
    const simpleRate = ammount * (rate / 100) * years
    
    res.render('credit-form', {
      simpleRate
    })
  }
}

module.exports = CreditController
