const { Sequelize } = require("sequelize");
const Dojos = require("../models/dojos");

module.exports = {
  async getAll(req, res) {
    const sequelize = new Sequelize("martial_arts", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
    });

    try {
      const dojos = await Dojos(sequelize, Sequelize.DataTypes).findAll();
      res.status(200).send(dojos || {});
    } catch (error) {
      // TODO: Errors
    }
    res.send({
      id: 1,
      name: "KARATÊ DOJO",
      teacher: "JACKSON TANAKA",
    });
  },
};
