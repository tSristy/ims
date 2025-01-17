const { DataTypes } = require('sequelize');
const config = require('../Server/config');
const Category = require('./categoryModel');

const Product = config.define('products', {
    Product_Id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Product_Type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Product_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Depreciation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Model_No:{
    type: DataTypes.STRING,
    allowNull:false
  },
  Category_Id:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  Created_By:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'System'
  },
  Created_Date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  Modified_By: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'System'
  },
  Modified_Date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});
Product.belongsTo(Category, { foreignKey: 'Category_Id' });

module.exports = Product;
