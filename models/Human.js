const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Human extends Model { 
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Human.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [8],
      // },
    },
  },
  {
    // hooks: {
    //   async beforeCreate(newHuman) {
    //     newHuman.password = await bcrypt.has(newHuman.password, 10);
    //     return newHuman;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'human',
  });

module.exports = Human;
