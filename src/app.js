const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT||8080);

app.use (morgan('dev'));
app.use(express.json());

app.use("/api/carro", require("./routes/carro.route"));

module.exports = app;

