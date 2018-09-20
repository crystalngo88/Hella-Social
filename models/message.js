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
  
  // Message.associate = function(models){
  //   Message.belongsTo(models.Interest, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  
  return Message;
 
};
