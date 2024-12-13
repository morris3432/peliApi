const { pelis } = require('../utils/pelis');

class PelisServices {
  async getPelis() {
    const peliculas = await Promise.resolve(pelis);
    return peliculas || [];
  }

  async getPeli() {
    const pelicula = await Promise.resolve(pelis[0]);
    return pelicula || {};
  }

  async createPeli() {
    const createPeliId = await Promise.resolve(pelis[0]._id);
    return createPeliId;
  }

  async updatePeli() {
    const updatePeliId = await Promise.resolve(pelis[0]._id);
    return updatePeliId;
  }

  async deletePeli() {
    const deletePeliId = await Promise.resolve(pelis[0]._id);
    return deletePeliId;
  }
}

module.exports = PelisServices;
