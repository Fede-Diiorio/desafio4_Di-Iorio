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

module.exports = router;