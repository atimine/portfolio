var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Adham Khudayberganov | Backend Developer',
    avatarUrl: 'images/avatar.jpg',
    workStatus: true,
    numberOfExperince: 2,
    currentLocation: 'Urgench, Uzbekistan',
    cvUrl: 'AX - CV.pdf'
  }

  res.render('index', data);
});

module.exports = router;
