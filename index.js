require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const session = require('express-session');
const passport = require('./oauth');
const { config } = require('./config/server');
const PeliApi = require('./routers/pelis');
const MongoLib = require('./libs/mongo');
const {
  LogErrors,
  errorHandler,
  wrapError,
} = require('./utils/middlewares/headerror');
const notFoundHandler = require('./utils/middlewares/notFound');

const app = express();

app.use(
  cors({ origin: process.env.ALLOWED_ORIGINS || 'http://localhost:1800' }),
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'clave_secreta',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  },
);

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).send('No autenticado');
};

app.get('/profile', ensureAuthenticated, (req, res) => {
  res.send(`Hola, ${req.user.displayName}`);
});

app.get('/', (req, res) => {
  req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
  res.send(`Has visitado ${req.session.cuenta} veces`);
});

async function startServer() {
  try {
    const mongoLib = new MongoLib();

    // app.use(LogErrors);
    // app.use(errorHandler);
    // app.use(wrapError);
    // app.use(notFoundHandler);


    PeliApi(app);

    const port = config.port || 3000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`.cyan);
    });

    process.on('SIGINT', async () => {
      console.log('Cerrando servidor...');
      await mongoLib.disconnect();
      process.exit(0);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

startServer();
