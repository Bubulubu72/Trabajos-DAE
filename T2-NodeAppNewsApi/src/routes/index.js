const express = require('express');
const router = express.Router();

const serch = require('./search')

router.get('', (req, res) => {
    res.render('index');
});

router.use('', express.json());
router.use('', serch);

module.exports = router;