require("dotenv").config();
const express = require("express");
const connetToDb = require("./database/db");

const app = express();
const port = process.env.PORT || 3000;

connetToDb();

app.get("/", (req, resp) => {
  resp.send("Hello Word");
});

app.listen(port, () =>
  console.log(`servidor rodando em https://localhost:${port}`)
);
