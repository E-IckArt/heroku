const express = require('express');
const router = express.Router();

/* Dire d'exporter le contenu du fichier pour pouvoir l'utiliser dans le fichier index.js*/
module.exports = router;

/**
 * Déclaration du processus des requêtes
 */

/**
 * Dire au serveur qu'il doit renvoyer le fichier 'index.html' au navigateur lorsqu'il reçoit une requête sur le port indiqué.
 * (Port indiqué dans le fichier index.js)
 * */
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

/**
 * Dire au router d'utiliser tous les modules pour afficher le css, les images, les fichiers js et les node_modules nécessaires
 * */
router.use('/css', express.static(__dirname + '/css'));
router.use('/img', express.static(__dirname + '/img'));
router.use('/js', express.static(__dirname + '/js'));
router.use('/node_modules', express.static(__dirname + '/node_modules'));

/* Si la réponse du serveur est 404 : renvoyer une erreur */
router.use((req, res) => {
    res.status(404);
    res.json({
        error: 'Page not found',
    });
});
