const express = require('express');
const app = express();
const indexRoute = require('./routes/index.route');

require('dotenv').config();
const { PORT } = process.env || 3000;

//init dbs
require('./configs/dbs/mongo.db');

//init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init routes
app.use('/api/v1', indexRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});