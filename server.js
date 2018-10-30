var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("./public/"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/cat_controllers");

app.use(routes);

app.listen(PORT, function() {
  console.log("Hello and welcome! You are now being served on port #" + PORT + "! Thank you for your service.");
});