require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

//Config JSON and dates
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Config CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

//Routes Users
app.use('/users', require('./src/routes/UserRoutes'));
app.use('/users', require('./src/routes/LoginRoutes'));
app.use('/users', require('./src/routes/RolesRoutes'));
app.use('/users', require('./src/routes/PermissionRoutes'));

//Routes Castration
app.use('/cads', require('./src/routes/CastrationRoutes'));
app.use('/city', require('./src/routes/CityRoutes'));


//Connect to MongoDB
require('./src/db/connect.js');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});