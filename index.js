// const http = require("http");

// const server = http.createServer((req, res) => {
//   if ((req.url = "/")) {
//     res.end("Hello from this side");
//   } else if ((req.url = "/userapi")) {
//     res.end("Hello from the userapi side");
//   }
// });

// server.listen(8080, "127.0.0.1", () => {
//   console.log("listening to the port no. 8080");
// });
const express = require("express");
const app = express();
// const data = express("./userapi.json");
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Server is running");
  res.end();
});

app.get("/userapi", (req, res) => {
  //   res.json(data);
  fs.readFile("./userapi.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
    // console.log(data);
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
