const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sponsor extends Model { }

Sponsor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    human_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'humans',
        key: 'first_name',
      },
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'pets',
        key: 'pet_name',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sponsor',
  });

module.exports = Sponsor;
