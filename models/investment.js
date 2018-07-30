'use strict';
module.exports = (sequelize, DataTypes) => {
  var Investment = sequelize.define('Investment', {
    txn_date: DataTypes.DATE,
    txn_type: DataTypes.STRING,
    txn_shares: DataTypes.DOUBLE,
    txn_price: DataTypes.DOUBLE,
    fund: DataTypes.STRING,
    investor: DataTypes.STRING,
    sales_rep: DataTypes.STRING
  }, {});
  Investment.associate = function(models) {
    // associations can be defined here
  };
  return Investment;
};