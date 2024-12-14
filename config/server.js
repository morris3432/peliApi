require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 1800,
  cors: process.env.CORS,

  // Database configuration
  dbUser: 'cris',
  dbPassword: '1234',
  dbHost: 'localhost',
  dbPort: '27017',
  dbName: 'video',
};

module.exports = { config };
