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

//Routes
app.use('/users', require('./src/routes/UserRoutes'));

//Connect to MongoDB
require('./src/db/connect.js');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});