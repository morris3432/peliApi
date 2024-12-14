const express = require('express');
const Pelicula = require('../models/pelis');
const MongoLib = require('../libs/mongo');

function PeliApi(app) {
  const router = express.Router();
  app.use('/api/pelis', router);

  router.get('/', async (req, res, next) => {
    try {
      const peliculas = await Pelicula.find();
      res.status(200).json({
        data: peliculas,
        message: 'Películas obtenidas exitosamente',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:peliId', async (req, res, next) => {
    const { peliId } = req.params;
    try {
      const pelicula = await Pelicula.findById(MongoLib.ObjectId(peliId));
      if (!pelicula) {
        return res.status(404).json({
          data: null,
          message: 'Película no encontrada',
        });
      }
      res.status(200).json({
        data: pelicula,
        message: 'Película obtenida exitosamente',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: pelicula } = req;
    try {
      const newPeli = await Pelicula.create(pelicula);
      res.status(201).json({
        data: newPeli,
        message: 'Película creada exitosamente',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:peliId', async (req, res, next) => {
    const { peliId } = req.params;
    const { body: pelicula } = req;
    try {
      const updatedPeli = await Pelicula.findByIdAndUpdate(MongoLib.ObjectId(peliId), pelicula, { new: true });
      if (!updatedPeli) {
        return res.status(404).json({
          data: null,
          message: 'Película no encontrada',
        });
      }
      res.status(200).json({
        data: updatedPeli,
        message: 'Película actualizada exitosamente',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:peliId', async (req, res, next) => {
    const { peliId } = req.params;
    try {
      const deletedPeli = await Pelicula.findByIdAndDelete(MongoLib.ObjectId(peliId));
      if (!deletedPeli) {
        return res.status(404).json({
          data: null,
          message: 'Película no encontrada',
        });
      }
      res.status(204).json({
        data: deletedPeli,
        message: 'Película eliminada exitosamente',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = PeliApi;
