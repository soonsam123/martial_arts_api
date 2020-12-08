const express = require("express");
const bodyParser = require("body-parser");

const dojosRoutes = require("./api/routes/dojos");

const app = express();
const jsonParser = bodyParser.json();

app.listen(8000);

app.use(jsonParser);
/**
 * Adding headers to our requests.
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
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

app.use("/dojos", dojosRoutes);

app.use((req, res, next) => {
  const error = Error("Not found");
  res.statusCode = 404;
  res.send({ error: error.message });
});
