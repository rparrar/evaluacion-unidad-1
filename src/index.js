require('dotenv').config()

const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`La aplicación Cálculo de interés simple está activa, debes abrir tu navegador en http://localhost:${PORT}`)
})
