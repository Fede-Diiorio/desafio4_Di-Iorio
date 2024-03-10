const { Router } = require('express');
const router = Router();

router.get('/', (_, res) => {
    res.render('index', {
        title: 'Websocket',
        style: ['styles.css']
    })
})

module.exports = router;