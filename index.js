const express = require('express');
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
const { config } = require('./config/server');
const PeliApi = require('./routers/pelis');
const MongoLib = require('./libs/mongo'); // Importa MongoLib aquí

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    // Conectar a MongoDB
    const mongoLib = new MongoLib();

    // Iniciar API de películas
    new PeliApi(app);

    const port = config.port 
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`.cyan);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

startServer();
