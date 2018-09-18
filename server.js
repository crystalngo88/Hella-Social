// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var exphbs = require("express-handlebars");
var passport = require('passport');
  , LocalStrategy = require('passport-local').Strategy;
var BasicStrategy = require('passport-http').BasicStrategy;
var db = require("./models_old");
var mongoose = require("mongoose");
var User = require("./models/Users");
var app = express();
var PORT = process.env.PORT || 3000;
// mongoose.connect('mongodb://localhost:27017/hella_socialdb')
=======
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
>>>>>>> 7681d6fbfc83a2e5fcc005775ae600a1593141f3


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});