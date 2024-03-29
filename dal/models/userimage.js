'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models["User"]);
    }
  };
  UserImage.init({
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserImage',
  });
  return UserImage;
};