const path = require('path');
const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const cors = require('cors');

// We define the default port.
const PORT = 3000;
const app = express();

const creationRouter = require('./routes/creationRouter.js');

// <-- Views Data -->
app.set('views', path.join(__dirname, '../Frontend/views'));
app.set('view engine', 'ejs');

// <-- App Parameters -->
app.use(express.urlencoded( { extended: false } ));
app.use(express.json());
app.use(express.static(path.join(__dirname, './../Frontend')));
app.use(cors());

// <-- Router Data -->
app.use('/create', creationRouter);
// Home 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/Home/Home.html'));
});

// Start Port
app.listen(PORT, () => {
    console.log(`Express server is running at: http://localhost:${PORT}`);
});

