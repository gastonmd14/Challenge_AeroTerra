var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Challenge AeroTerra Javascript' });
});

router.post('/', function(req, res) {
  res.json(req.body)
})

module.exports = router;
