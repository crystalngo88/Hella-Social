// Creating our Interest Model
module.exports = function(sequelize, DataTypes) {
  var Interest = sequelize.define("Interest", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  });

  return Interest;
};


