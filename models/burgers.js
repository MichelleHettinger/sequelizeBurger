//created with:$ sequelize model:create --name Burgers --attributes "name:string, devoured:boolean"



'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    name: {type: DataTypes.STRING, allNull: false},
    devoured: {type: DataTypes.BOOLEAN, allNull: false, defaultValue: true}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burgers;
};