const express = require("express");
const dojosController = require("../controllers/dojos");

const router = express.Router();

router.get("/", (req, res) => {
  dojosController.getAll(req, res);
});

module.exports = router;
