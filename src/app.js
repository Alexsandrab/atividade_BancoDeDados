const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/senac", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Conexão feita com sucesso!");
});

const index = require("./routes/index");
const tarefas = require("./routes/tarefasRoute");

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/tarefas", tarefas);

module.exports = app;
