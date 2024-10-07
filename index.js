const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');

const port = process.env.PORT


const ContactsRoutes = require('./src/routes/contactsRoutes')

var CorsOption={
  origin: 'http://127.0.0.1:8000',
  optionsuccessStatus: 200
}
app.use(cors(CorsOption));

//Rutas de contactos
app.use('/contactos', ContactsRoutes)
//rutas de adress

app.listen(port, ()=> {
  console.log(`example app listening on port ${port}`)
})