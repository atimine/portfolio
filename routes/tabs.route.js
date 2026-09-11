var express = require('express');
const { connection } = require('../config/db');
var router = express.Router();

/* GET tabs listing. */
router.get('/skills', (req, res) => {
  res.render('skills', {title: 'Technical Skills'});
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
  connection.query(
    'SELECT * FROM contact',
    (err, results) => {
      if (err) {
        return next(err);
      }

      res.render('contact', {title: 'Contact With Me', result: results[0]});
    }
  );

});

module.exports = router;