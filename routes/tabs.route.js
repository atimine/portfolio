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

router.get('/contact', (req, res, next) => {
  connection.query(
    'SELECT * FROM contact',
    (err, results) => {
      if (err) {
        console.error('MYSQL ERROR:', err);
        return next(err);
      }

      res.render('contact', {title: 'Contact With Me'});
    }
  );
});

/* POST tabs listing. */

router.post('/contact', (req, res, next) => {
  const {firstname, lastname, email, message} = req.body

  if (!firstname?.trim() || !lastname?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).render('contact', {title: 'Contact With Me', formError: 'Please fill the form correctly'});
  }

  connection.query(
    `INSERT INTO contact (firstname, lastname, email, message) VALUES (?, ?, ?, ?)`,
    [
      firstname.trim(),
      lastname.trim(),
      email.trim(),
      message.trim()
    ],
    (err, result) => {
      if (err) {
        return next(err);
      }

      console.log(result);

      res.status(201).render('contact', {
        title: 'Contact With Me',
        formMessage: 'Message sent successfully.'
      });
    }
  );
})


module.exports = router;