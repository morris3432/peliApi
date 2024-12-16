const mongoose = require('mongoose');
const { config } = require('../config/server');

// Construcción de la URI de conexión
const User = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const db_name = config.dbName;
const port = config.dbPort;

const uri = `mongodb://${User}:${password}@${config.dbHost}:${port}/${db_name}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.dbName = db_name;
    this.connect();
  }

  async connect() {
    if (!MongoLib.connection) {
      try {
        await mongoose.connect(uri, {
          user: User,
          pass: password,
        });
        MongoLib.connection = mongoose.connection;
      } catch (err) {
        console.error('Error al conectar con MongoDB:', err);
        throw err;
      }
    }
  }

  static ObjectId(id) {
    return new mongoose.Types.ObjectId(id);
  }
}

module.exports = MongoLib;
