/**
 * Initialiser nodejs avec express, router, morgan, cors, nodemon (commmande npm install [nomDuPackage] à faire avant).
 * Doc : https://www.cril.univ-artois.fr/~boussemart/express/chapter01.html
 *
 * Le fichier router.js contient des informations nécessaires à la contruction du serveur.
 */

/* Déclaration dans des variables de tous les modules nécessaires*/
const express = require('express');
const router = require('./router');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const server = express();

// Configuration du port : le serveur écoutera le port 8000 si la variable d'environnement port n'est pas définie
let port = process.env.PORT;
if (port == null || port == '') {
    port = 8000;
}

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
