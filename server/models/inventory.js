'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Inventory.init({
    imageUrl: {
      type      : DataTypes.STRING,
      validate  : { notEmpty: true }
    },
    name: {
      type: DataTypes.STRING,
      validate  : { notEmpty: true }
    },
    buyPrice: {
      type      : DataTypes.INTEGER,
      validate  : { 
        notEmpty: true,
        min     : 0
      }
    },
    sellPrice: {
      type      : DataTypes.INTEGER,
      validate  : { 
        notEmpty: true,
        min     : 0
      }
    },
    stock: {
      type      : DataTypes.INTEGER,
      validate  : { 
        notEmpty: true,
        min     : 0
      }
    }
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};