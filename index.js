const express = require('express');
const colors = require('colors');
const { config } = require('./config/server');
const PeliApi = require('./routers/pelis');

const app = express();

PeliApi(app);

app.listen(config.port, () => {
  console.log(
    `Server is running on port 1800`.cyan,
    `http://localhost:${config.port}`.blue,
  );
});
