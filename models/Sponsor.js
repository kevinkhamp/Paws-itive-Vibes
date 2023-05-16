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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'human',
        key: 'id',
      },
    },
    pet_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id',
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
