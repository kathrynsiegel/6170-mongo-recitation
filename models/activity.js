var mongoose = require("mongoose");

var activitySchema = mongoose.Schema({
  /* Exercise 1: Declare schema here */
  type: String,
  duration: Number,
  intensity: String
});

activitySchema.methods.getDescription = function(callback) {
  return this.type + '-' + this.intensity;
}

activitySchema.path('intensity').validate(function(value) {
    return /Low|Medium|High/i.test(value);
}, 'Invalid intensity');

// When we 'require' this model in another file (e.g. routes),
// we specify what we are importing form this file via module.exports.
// Here, we are 'exporting' the mongoose model object created from
// the specified schema.
module.exports = mongoose.model("Activity", activitySchema);
