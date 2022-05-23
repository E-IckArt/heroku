const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

router.use('/css', express.static(__dirname + '/css'));
router.use('/img', express.static(__dirname + '/img'));
router.use('/js', express.static(__dirname + '/js'));
router.use('/node_modules', express.static(__dirname + '/node_modules'));
router.use((req, res) => {
    res.status(404);
    res.json({
        error: 'Page not found',
    });
});
