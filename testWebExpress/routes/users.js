var express = require('express');
var router = express.Router();
var User = require('../models/users');
var db = require('../bin/db');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/addInfo');
});
router.post('/', function(req, res, next) {
  let name = req.body.name;
  let lastName = req.body.lastName;
  let Nationality = req.body.Nationality;
  let City = req.body.City;
  let email = req.body.email;
  let NumberPhone = req.body.NumberPhone;
  let Password = req.body.Password;
  console.log(name + lastName + email);
  let hash = bcrypt.hashSync(Password, 10);
  User.create({
    firstName:name,
    lastName:lastName,
    Nationality:Nationality,
    City:City,
    Email:email,
    NumberPhone:NumberPhone,
    Password:hash,
    
  }).then(() =>{
    alert("user created")
  })
  
  res.redirect("/users");

});




///////////////////


const Vol = require('../models/admin/vol')

router.get('/vol', function(req, res, next) {
  res.render('admin/vol');
});
router.post('/vol', function(req, res, next) {
  let Aname = req.body.Aname;
  let Pname = req.body.Pname;
  let Price = req.body.Price;
  let Number = req.body.Number;
  let Date = req.body.Date;
  console.log(Aname + Pname + Price + Date);
  Vol.create({
    Aname:Aname,
    Pname:Pname,
    Price:Price,
    Number:Number,
    Date:Date,
  }).then(() =>{
    alert("user created")
  })
  
  res.redirect("/users/vol");

});








module.exports = router;
