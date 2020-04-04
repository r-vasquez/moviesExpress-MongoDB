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

module.exports = movieSchema
