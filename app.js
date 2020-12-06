const express = require("express");

const app = express();

app.listen(8000);

app.get("/dojos", function (req, res) {
  res.send({
    id: 1,
    name: "KARATÊ DOJO",
    teacher: "JACKSON TANAKA",
  });
});

app.use((req, res, next) => {
  const error = Error("Not found");
  res.statusCode = 404;
  res.send({ error: error.message });
});
