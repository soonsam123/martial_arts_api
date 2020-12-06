"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dojos extends Model {}
  Dojos.init(
    {
      dojo_name: DataTypes.STRING,
      teacher: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dojos",
      timestamps: false,
    }
  );
  return Dojos;
};
