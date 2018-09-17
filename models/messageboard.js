var mongoose = require('mongoose');




// Making the messages schema
var MessagesSchema = new mongoose.Schema({
    interestID: {
      type: Integer,
      unique: true,
      required: true
    },
    userID: {
      type: String,
      unique: true,
      required: true
    }
   
  });








  // Export the Mongoose model
module.exports = mongoose.model('User', MessagesSchema);