const router = require('express').Router();
const { connection } = require('../config/db');

/* GET tabs listing. */
router.get('/skills', (req, res) => {

  const data = {
    title: 'Technical Skills',
    webSkills: [
     {iconUrl: 'https://cdn.simpleicons.org/html5/e34f26', skillName: 'HTML'},
     {iconUrl: 'https://cdn.simpleicons.org/css/1572b6', skillName: 'CSS'},
     {iconUrl: 'https://cdn.simpleicons.org/javascript/f7df1e', skillName: 'JavaScript'},
     {iconUrl: 'https://cdn.simpleicons.org/handlebarsdotjs/000000', skillName: 'HBS'},
    ],
    backendSkills: [
     {iconUrl: 'https://cdn.simpleicons.org/nodedotjs/339933', skillName: 'Node.js'},
     {iconUrl: 'https://cdn.simpleicons.org/express/ffffff', skillName: 'Express'}
    ],
    databaseSkills: [
     {iconUrl: 'https://cdn.simpleicons.org/mongodb/47A248', skillName: 'MongoDB'},
     {iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1', skillName: 'MySQL'},
     {iconUrl: 'https://cdn.simpleicons.org/mongoose/880000', skillName: 'Mangoose'}
    ],
    otherSkills: [
     {iconUrl: 'https://cdn.simpleicons.org/git/f05032', skillName: 'Git'},
     {iconUrl: 'https://cdn.simpleicons.org/github/ffffff', skillName: 'Github'},
     {iconUrl: 'https://cdn.simpleicons.org/postman/ff6c37', skillName: 'Postman'},
     {iconUrl: 'https://cdn.simpleicons.org/vercel/ffffff', skillName: 'Vercel'},
     {iconUrl: 'https://cdn.simpleicons.org/alwaysdata/E9568E', skillName: 'Alwaysdata'},
     {iconUrl: 'https://cdn.simpleicons.org/ubuntu/E95420', skillName: 'Ubuntu'}
    ]
  }

  res.render('skills', data);
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
  res.render('contact', {title: 'Contact With Me'});
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