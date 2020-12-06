const express = require("express");

const app = express();

app.listen(8000);

/**
 * Adding headers to our requests.
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // TODO: Pesquisar se precisa tirar em produção
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

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
