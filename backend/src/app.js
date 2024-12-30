const express = require('express');
const bodyParser = require('body-parser');
const plantsRoutes = require('./routes/plantsRoutes');
const gardenerRoutes=require('./routes/gardenerRoutes');
const fertilizerRouters=require('./routes/fertilizerRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/plants', plantsRoutes);
app.use('/gardener', gardenerRoutes);
app.use('/fertilizer',fertilizerRouters);

module.exports = app;
