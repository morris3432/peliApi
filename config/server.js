require('dotenv').config({ path: '../.env' });

const config = {
  dev: process.env.NODE_ENV.trim() !== 'production',
  port: process.env.PORT || 1800,
  cors: process.env.CORS,

  // Database configuration
  dbUser: process.env.DB_USER || 'cris',
  dbPassword: process.env.DB_PASSWORD || '1234',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '27017',
  dbName: process.env.DB_NAME || 'video',
};

module.exports = { config };
