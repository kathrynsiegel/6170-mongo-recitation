var express = require('express');
var router = express.Router();
var db = require('../models/activitylog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { activities: db.activities });
});

router.post('/', function(req, res, next) {
  activity = req.body;
  console.log("activity: " + activity);
  db.activities.push(activity);
  console.log("activities: " + db.activities);
  res.send({success: true, message: "Success!"});
});

module.exports = router;
