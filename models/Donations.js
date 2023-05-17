const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Donations extends Model { }

Donations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    donator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'human',
        key: 'id',
      },
    },
    donation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'donations',
  });

module.exports = Donations;
