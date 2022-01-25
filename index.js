const express = require("express");
const importData = require("./lyrics.json");
let port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/lyrics", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
