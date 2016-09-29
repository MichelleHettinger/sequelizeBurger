'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Burgers', [
    {
      name: "Sub Burger",
      devoured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Spaghetti Burger",
      devoured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Chinese Food Burger",
      devoured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Cereal Burger",
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: "Mountain Dew Burger",
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('Burgers')

    return queryInterface.createTable('Burgers', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          name: {
            type: Sequelize.STRING
          },
          devoured: {
            type: Sequelize.BOOLEAN
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        })


  }
};
