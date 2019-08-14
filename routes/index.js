// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


var express = require('express')
var router = express.Router()
var mssqldb = require('../mssqldb')
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  var arr = []
  mssqldb.sql('select * from UserList', function(err, result) {
    if (err) {
      console.log(err)
      return
    }
    let response = {
      status: 200,
      message: '成功',
      returnValue: result.returnValue,
      data: result.recordsets[0]
    }
    return res.send(response)
    return next()
  })
})
module.exports = router;
