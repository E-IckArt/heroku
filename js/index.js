/**
 * Initialiser nodejs avec express
 * Doc : https://www.cril.univ-artois.fr/~boussemart/express/chapter01.html
 */

const express = require('express');
const router = require('../router');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();
const port = process.env.PORT || 8000;

server.use(morgan('combined'));
server.use(cors());
server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

server.use(router); // Requests processing will be defined in the file router
server.listen(port, () => console.log('Server app listening on port ' + port));
