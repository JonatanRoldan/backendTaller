const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT||8080);

app.use (morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/carro", require("./routes/carro.route"));
app.use("/api/marca",require("./routes/marca.route"));
app.use("/api/categoria",require("./routes/categoria.route"));

module.exports = app;

