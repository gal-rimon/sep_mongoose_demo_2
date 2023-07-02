const db = require('./db');
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/products', require('./routes/productsRoute'));

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
