const express = require('express')
const axios = require('axios')
require('dotenv').config()

const { Movies } = require('./db-connection')
const portNumber = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  try {
    res.render('index')
  } catch (error) {
    res.status(500)
    console.error(error)
  }
})

app.listen(portNumber, () => {
  console.log(`Express web server started: ${portNumber}`)
})
