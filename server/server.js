require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');

//connecting to databse
connectDb();

app.get('/AWS', (req, res) => {
    res.status(200).json({ message: 'Hello Guys!'});
})

app.listen(8080, () => {
    console.log('Server is running in port 8080');
})