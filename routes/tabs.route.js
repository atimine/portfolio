var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/skills', (req, res) => {
  res.render('skills');
});

router.get('/experience', (req, res) => {
  res.render('experience');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/education', (req, res) => {
  res.render('education');
});

module.exports = router;