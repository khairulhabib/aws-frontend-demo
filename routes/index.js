var express = require('express');
var router = express.Router();
var url = "https://4d8lzogr7j.execute-api.ap-southeast-1.amazonaws.com/dev/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud Day Demo ID 2022' });
});
router.post('/', function (req, res) {
  var control = req.body.control;
  postData();
  res.send(req.body.control);
});

async function postData(){
  const response = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.json();
}

module.exports = router;
