const express = require('express');


const router = express.Router();

router.get('/', function (_sorov, javob) {
    javob.send('Bosh sahifa');
});

module.exports = router;