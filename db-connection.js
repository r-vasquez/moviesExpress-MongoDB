const { model, connect, connection } = require('mongoose')
const MoviesSchema = require('./db-schema')
require('dotenv').config()

//Conectandome a DB en mongoDB Atlas
connect(process.env.URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error('Error'))

connection.on('open', () => {
  console.log('DB is connected to', process.env.URI)
})

const Movies = model('MoviesCollection', MoviesSchema)
