var express = require('express');
var router = express.Router();
let Person = require('../models/person');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.route('/addUser').post(function (req, res) {
  console.log("server",req.body);
  let person = new Person(req.body);
  console.log("server",req.body);
  person.save()
    .then(person => {
      res.status(200).json({'person': 'person in added successfully'});
      
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

router.route('/compare').post(function (req, res, next) {
  Person.find({email:req.body.obj.email,password:req.body.obj.password})
    .then(person => {
      console.log(person.length);
      var arrayLength=person.length;
      if(arrayLength === 0){
        object = req.body;
        object.err.error="true";
        console.log('object',object.err.error);
        console.log("empty");
        res.status(200).json({'res': object});
      }
      else{
        object = req.body;
        var adminEmail=object.obj.email;
        console.log(adminEmail);
        if(adminEmail === 'welcome@gmail.com'){
          console.log("am admin");
          object.obj.admin = true;
          console.log(object.obj.admin);
        }
        object.err.error="false";
        console.log("not empty");
        object = req.body;
        res.status(200).json({'res': object});
       }
      })
    .catch(err => {
      res.status(400).json({'error': 'unable to find person'});
    });
});

router.route('/getDetails').get(function (req, res) {
  console.log("server");
  Person.find()
  .then(person => {
    console.log('person', person);
    res.status(200).json({'res': person});
  })
  .catch(err => {
    res.status(400).send("unable to find in the database");
  });
});
module.exports = router;
