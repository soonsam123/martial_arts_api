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
    } finally {
      sequelize.close();
    }
  },

  async getById(req, res) {
    const sequelize = new Sequelize("martial_arts", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
    });

    try {
      const dojo = await Dojos(sequelize, Sequelize.DataTypes).findOne({
        where: { id: req.params.id },
      });
      res.status(200).send(dojo);
    } catch (error) {
      // TODO: Errors
    } finally {
      sequelize.close();
    }
  },

  async create(req, res) {
    const sequelize = new Sequelize("martial_arts", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
    });

    try {
      const newDojo = await Dojos(sequelize, Sequelize.DataTypes).create({
        dojo_name: req.body.dojo_name,
        teacher: req.body.teacher,
      });
      res.status(200).send({
        message: "Dojo created successfully",
        id: newDojo.id,
      });
    } catch (error) {
      console.log(error);
      // TODO: Errors
    } finally {
      sequelize.close();
    }
  },

  async update(req, res) {
    const sequelize = new Sequelize("martial_arts", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
    });

    try {
      const updatedDojo = await Dojos(sequelize, Sequelize.DataTypes).update(
        {
          dojo_name: "NEW DOJO NAME",
          teacher: "NEW TEACHER NAME",
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).send({
        message: "Dojo edited successfully",
      });
    } catch (error) {
      // TODO: Errors
    } finally {
      sequelize.close();
    }
  },

  async delete(req, res) {
    const sequelize = new Sequelize("martial_arts", "root", "password", {
      host: "127.0.0.1",
      dialect: "mysql",
    });

    try {
      await Dojos(sequelize, Sequelize.DataTypes).destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({
        message: "Dojo removed successfully",
      });
    } catch (error) {
      // TODO: Errors
    } finally {
      sequelize.close();
    }
  },
};
