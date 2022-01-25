const express = require("express");
const fs = require("fs");
const importData = require("./lyrics.json");
let port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/lyrics", (req, res) => {
  res.send(importData);
});

app.get("/randomlyrics", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  const random = Math.floor(Math.random() * (importData.length - 1));
  res.send(importData[random]);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
