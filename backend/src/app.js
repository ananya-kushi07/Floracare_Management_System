const express = require('express');
const bodyParser = require('body-parser');
const plantsRoutes = require('./routes/plantsRoutes');
const gardenerRoutes=require('./routes/gardenerRoutes');
const fertilizerRouters=require('./routes/fertilizerRoutes');
const toolsRoutes = require('./routes/toolsRoutes');
const containersRoutes = require('./routes/containersRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/plants', plantsRoutes);
app.use('/gardener', gardenerRoutes);
app.use('/fertilizer',fertilizerRouters);
app.use('/tools', toolsRoutes);
app.use('/containers', containersRoutes);

module.exports = app;
