var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud Day Demo ID 2022' });
});

const btnIncrease = document.getElementById('increase');
btnIncrease.addEventListener('click',function(e){
  console.log('increase clicked')
});
const btnDecrease = document.getElementById('decrease');
btnIncrease.addEventListener('click',function(e){
  console.log('decrease clicked')
});


module.exports = router;
