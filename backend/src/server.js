const express = require('express');
const cors = require('cors');
const plantsRoutes = require('./routes/plantsRoutes');
const gardenerRoutes = require('./routes/gardenerRoutes');
const fertilizerRoutes = require('./routes/fertilizerRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
// app.use("/", (req, res) => {
//     res.send("Welcome to the DistOpt API");
//   });

// Routes
app.use('/api/plants', plantsRoutes);
app.use('/api/gardeners', gardenerRoutes);
app.use('/api/fertilizers', fertilizerRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
