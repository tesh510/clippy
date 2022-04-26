const express = require('express');
const router = express.Router();
const clipsCtrl = require('../controllers/clips');

router.get('/', clipsCtrl.index);


module.exports = router;
