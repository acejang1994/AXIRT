//Require npm modules
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// custom modules
var dbConfig = require('./database/db.js');

// setup things
mongoose.connect(dbConfig.url);

// Initialize express app
var app = express();
var PORT = process.env.PORT || 3000;

//Middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// this sets up all of the routes
var routes = require('./routes/routes.js');
var issues = require('./routes/issues.js');

app.use("/", routes);
app.use("/issues", issues);


app.get("/*", function(req, res) {
  var url = path.resolve(__dirname + '/public/index.html');
  res.sendFile(url);
});

app.listen(PORT);
console.log('Listening on Port', PORT);
