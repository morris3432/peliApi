const express = require('express');
const PelisServices = require('../services/pelis_services');

function PeliApi(app) {
  const router = express.Router();
  app.use('/api/pelis', router);

  const pelisServices = new PelisServices();

  router.get('/', async (req, res, next) => {
    try {
      const etiquetica = req.query;
      const peliculas = await pelisServices.getPelis({ etiquetica });
      res.status(200).json({
        data: peliculas,
        message: 'Petición exitosa',
      });
    } catch (error) {
      next(error);
    }
  });
  router.get('/:pelisId', async (req, res, next) => {
    const { pelisId } = req.query;
    try {
      const pelicula = await pelisServices.getPeli({ pelisId });
      res.status(200).json({
        data: pelicula,
        message: 'Petición exitosa',
      });
    } catch (error) {
      next(error);
    }
  });
  router.post('/', async (req, res, next) => {
    const { body: pelicula } = req;
    try {
      const newPeli = await pelisServices.createPeli({ pelicula });
      res.status(201).json({
        data: newPeli,
        message: 'peli creaada',
      });
    } catch (error) {
      next(error);
    }
  });
  router.put('/:pelisId', async (req, res, next) => {
    const { pelisId } = req.params;
    const { body: pelicula } = req;
    try {
      const updatedPeli = await pelisServices.updatePeli({ pelisId, pelicula });
      res.status(200).json({
        data: updatedPeli,
        message: 'peli actualizada',
      });
    } catch (error) {
      next(error);
    }
  });
  router.delete('/:pelisId', async (req, res, next) => {
    const { pelisId } = req.params;
    try {
      const deletePeli = await pelisServices.deletePeli({ pelisId });
      res.status(204).json({
        data: deletePeli,
        message: 'Petición exitosa',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = PeliApi;
