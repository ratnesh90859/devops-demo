const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Ratnesh Singh🚀");
});

app.listen(8080);
