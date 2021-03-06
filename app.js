const express = require('express');
const routes = require('./routers/array');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', routes);



module.exports = app;