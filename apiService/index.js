var flights = require("./data.json");
var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.get("/flights", (req, res) => {
  res.json(flights);
});
app.listen(3001, () => {
  console.log("Server running on port 3000");
});
