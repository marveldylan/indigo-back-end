// Imports and require() middleware defined:
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const logger = require('morgan');
const db = require('./db');


const app = express();
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.Port || 3001;


// app.use() Middleware:
app.use(cors());

app.use(express.static(`${__dirname}/client/build`));

app.use(express.json());

app.use(bodyParser.json());

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));

app.use('/', AppRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

