const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  id: Number,
  titulo: String,
  director: String,
  año: Number,
  estreno: Number,
  status: String,
  actores: [String],
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
