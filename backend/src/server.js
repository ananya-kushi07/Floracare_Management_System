const express = require('express');
const cors = require('cors');
const plantsRoutes = require('./routes/plantsRoutes');
const gardenerRoutes = require('./routes/gardenerRoutes');
const fertilizerRoutes = require('./routes/fertilizerRoutes');
const toolsRoutes = require('./routes/toolsRoutes');
const containersRoutes = require('./routes/containersRoutes');
const userRouter = require('./routes/userRouter');


const app = express();
const PORT = 5000;
// Middleware
app.use(cors({ origin:"http://localhost:5173", credentials:true}));
app.use(express.json());
// app.use("/", (req, res) => {
//     res.send("Welcome to the DistOpt API");
//   });

// Routes
app.use('/api/plants', plantsRoutes);
app.use('/api/gardeners', gardenerRoutes);
app.use('/api/fertilizers', fertilizerRoutes);
app.use('/api/tools', toolsRoutes);
app.use('/api/containers', containersRoutes);
app.use('/api/users', userRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
