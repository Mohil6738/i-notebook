const connectToMongo = require("./db");

const express = require("express");
connectToMongo();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Mohil garg is the best developer in the world and he is the best person in the world and he is the best human being in the world",
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
