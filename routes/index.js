var express = require('express');
const https = require('https');
const options = {
  method: 'POST'
}

var router = express.Router();
var url = "https://4d8lzogr7j.execute-api.ap-southeast-1.amazonaws.com/dev/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smart Control' });
});
router.post('/', function (req, res) {
  var control = req.body.control;
  if(control==='increase'){
    postData('high');
  }else{
    postData('low');
  }
  
  res.status(204).send();
});

async function postData(power){
  let request = https.request(url,options,(res) => {
    if(res.statusCode!==200){
      console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
      res.resume();
      return;
    }

    let data = ''

    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('close', () => {
      console.log('Retrieved all data');
      console.log(JSON.parse(data));
    });

  });

  let body = JSON.stringify({"power":power,"room":0})
  request.write(body)
  request.end();
  
}

module.exports = router;
