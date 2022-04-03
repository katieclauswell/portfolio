const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/api/string', (req, res) => {
    res.json(process.env.STRING);
})

app.listen(3001, () => {
    console.log('listening on 3001');
})