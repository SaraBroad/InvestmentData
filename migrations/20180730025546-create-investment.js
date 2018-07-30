'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Investments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      txn_date: {
        type: Sequelize.STRING
      },
      txn_type: {
        type: Sequelize.STRING
      },
      txn_shares: {
        type: Sequelize.STRING
      },
      txn_price: {
        type: Sequelize.STRING
      },
      fund: {
        type: Sequelize.STRING
      },
      investor: {
        type: Sequelize.STRING
      },
      sales_rep: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Investments');
  }
};