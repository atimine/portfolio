var express = require('express');
var router = express.Router();

/* GET tabs listing. */
router.get('/skills', (req, res) => {
  res.locals.title = 'Technical Skills'
  res.render('skills',);
});

router.get('/experience', (req, res) => {
  res.render('experience', {title: 'My Experiences'});
});

router.get('/projects', (req, res) => {
  res.render('projects', {title: 'Projects That I built'});
});

router.get('/education', (req, res) => {
  res.render('education', {title: 'Academic Path'});
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact With Me'});
});

module.exports = router;