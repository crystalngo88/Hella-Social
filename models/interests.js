var mongoose = require('mongoose');


// Making the messages schema
var interestsSchema = new mongoose.Schema({
    interestName: {
      type: String,
      unique: true,
      required: true
    }
    
  });



  // Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);