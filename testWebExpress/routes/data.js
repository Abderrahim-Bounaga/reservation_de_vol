var express = require('express');
var router = express.Router();
var app = express();
// var db = require('../bin/db');
var Offer = require('../models/admin/vol');
// var search = require('../models/serach');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const session = require('express-session')






// app.use(session({
//   'secret': '343ji43j4n3jn4jk3n'
// }))
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/search', (req, res) => {
  let { Aname, Pname , SDate} = req.query;

  // Make lowercase
  // term = term.toLowerCase();
  // Session.save(callback)
  Offer.findAll({ where: 
              { Aname: { [Op.like]: '%' + Aname + '%' }, Pname: { [Op.like]: '%' + Pname + '%' }  },
              
          })
      .then(offers => res.render('search', { offers }))
      .catch(err => res.render('error', { error: err }));
      
});





module.exports = router;
