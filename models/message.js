//petah
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.json");


// Creating our Messages model
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Message.sync();
  // Message.associate = function(models){
  //   Message.belongsTo(models.Interest, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });

  //petah
  module.exports = Message;
  
  return Message;
 
};




