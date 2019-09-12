const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("frontend"));

app.get("/", function(req, res) {
  var full_path = path.join(__dirname, "frontend/html/index.html");
  res.sendFile(full_path);
});

app.get("/about", function(req, res) {
  var full_path = path.join(__dirname, "frontend/html/about.html");
  res.sendFile(full_path);
});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("MSU Website listening at http://%s:%s", host, port);
});
