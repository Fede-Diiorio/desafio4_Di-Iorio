const { Router } = require('express');
const router = Router();

router.get('/', (_, res) => {
    res.render('index', {
        title: 'Websocket',
        style: ['styles.css'],
        useWS: true,
        script: ['index.js']
    })
})

router.post('/', (req, res) => {
    const message = req.body;
    res.send(message);
})

module.exports = router;