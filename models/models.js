const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  id: {
    type: String, // Cambiado de Number a String para coincidir con el `movieIdSchema` en Joi
    required: true,
    match: /^[0-9a-fA-F]{24}$/, // Coincide con el esquema de Joi
  },
  titulo: {
    type: String,
    required: true,
    maxlength: 80,
  },
  año: {
    type: Number,
    required: true,
    min: 1900,
    max: 2029,
  },
  cover: {
    type: String,
    required: true,
    match: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i, // Comprobar URL de imagen
  },
  description: {
    type: String,
    required: true,
    maxlength: 300,
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 300,
  },
  content: {
    type: String,
    required: true,
    maxlength: 5,
  },
  source: {
    type: String,
    required: true,
    match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, // Comprobar URL de video
  },
  tags: [
    {
      type: String,
      maxlength: 50,
    },
  ],
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
