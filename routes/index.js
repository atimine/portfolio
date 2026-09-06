var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adham Khudayberganov | Backend Developer' });
});

module.exports = router;
