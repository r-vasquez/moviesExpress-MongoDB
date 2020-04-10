/*
En este archivo se crea el Schema con el cual se trabajara en la base de datos
rank es un string en el JSON pero es necesario que entre como numero para poder
operar con el
*/

const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  rank: Number,
  id: String
})

// Se crea una clase Movie la cual tiene una funcion estatica que permite buscar qué peliculas no están
// en la lista y agregarlas. Las filtra por ID

class Movie {
  static async findAndInsertMany(moviesJSON) {
    const movies = await this.find({})
    const ids = movies.map(movie => {
      return movie.id
    })

    const filterMovies = moviesJSON.filter(movie => {
      return !ids.some(ID => ID === movie.id)
    })

    return this.insertMany(filterMovies)
  }
}

movieSchema.loadClass(Movie)
module.exports = movieSchema
