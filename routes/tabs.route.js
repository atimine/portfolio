var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/skills', (req, res) => {
  res.render('skills');
});

router.get('/experience', (req, res) => {
  res.render('experience');
});

module.exports = router;