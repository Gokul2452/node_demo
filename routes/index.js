var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  title: 'Express' ,name:'gokul',age:'21',Graduation:'Mca',a:20,b:80,
  achieve:[
    {topic:' UG in Anjac'},
    {topic:'PG in Ymca'}
  ]});
  
});

module.exports = router;
