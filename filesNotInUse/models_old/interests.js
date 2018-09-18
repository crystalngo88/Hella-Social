// Creating our Interest Model
module.exports = function(sequelize, DataTypes) {
  var Interest = sequelize.define("Interest", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    majorInterest: {
      type: DataTypes.STRING,
      allowNull:false
    }
  });

  return Interest;
};