var express = require('express');
const { home, detalle } = require('../controllers/indexControler');
var router = express.Router();

/* GET home page. */
router.get('/', home);

router.get('/detalle/:id', detalle);

module.exports = router;
