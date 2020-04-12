const express = require('express')
const axios = require('axios')
require('dotenv').config()
const methodOverride = require('method-override')

const { Movies } = require('./db-connection')
const portNumber = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method')) //Using methodOverride with query Params

app.get('/', async (req, res) => {
  try {
    const queryResult = await Movies.find({})
    res.render('index', { queryResult })
  } catch (error) {
    res.status(500)
    console.error(error)
  }
})

app.post('/', async (req, res) => {
  try {
    const { data: moviesList } = await axios.get(
      //the list is in data (Axios documentation)
      'https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json'
    )
    const result = await Movies.findAndInsertMany(moviesList)
  } catch (error) {
    console.error(error)
  }
  res.redirect('/') //Default status: 302
})

app.delete('/dform', async (req, res) => {
  const result = await Movies.deleteMany({})
  res.redirect('/') //Default status: 302
})

app.listen(portNumber, () => {
  console.log(`Express web server started: ${portNumber}`)
})
