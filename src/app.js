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
app.use("/api/cliente",require("./routes/cliente.route"));
//app.use("/api/usuario",require("./routes/user.route"));
app.use("/api/tarea",require("./routes/tarea.route"));
app.use("/api/servicios",require("./routes/servicio.route"));

module.exports = app;

