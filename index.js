
const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Server is running");
  res.end();
});

app.get("/userapi", (req, res) => {
  fs.readFile("./userapi.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
    // console.log(data);
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
