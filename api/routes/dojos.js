const express = require("express");
const dojosController = require("../controllers/dojos");

const router = express.Router();

router.get("/", (req, res) => {
  dojosController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  dojosController.getById(req, res);
});

router.post("/", (req, res) => {
  dojosController.create(req, res);
});

router.put("/:id", (req, res) => {
  dojosController.update(req, res);
});

router.delete("/:id", (req, res) => {
  dojosController.delete(req, res);
});

module.exports = router;
