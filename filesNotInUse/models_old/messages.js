// Creating our Messages model
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    interestID: {
      type: DataTypes.INTEGER,
      allow: false    },

    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    

  });

  return Messages;
};