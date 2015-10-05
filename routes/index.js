var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');

/* GET home page. */
router.get('/', function(req, res, next) {
  Activity.find(function(err, activitiesList) {
    if (err) console.log(err);
    res.render('index', {activities: activitiesList});
  });
});

router.post('/', function(req, res, next) {
  activity = req.body;
  console.log(activity);
  /* Exercise 4: insert into database */
  res.send({success: true, message: "Success!"});
});

module.exports = router;
