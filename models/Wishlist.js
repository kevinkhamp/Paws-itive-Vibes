const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wishlist extends Model { }

Wishlist.init(
  {
    wish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id',
      },
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlist',
  });

module.exports = Wishlist;
