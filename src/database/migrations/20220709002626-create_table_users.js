'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 

      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },

      username: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
      },

      avatar: {
        type: Sequelize.DataTypes.STRING(255),
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },

      createUpdatedAt: {
        type: Sequelize.DataTypes.DATE,
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
