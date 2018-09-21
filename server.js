// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
// 
var mysql = require ('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'jl5lz8hk1d6b7xwo',
    password: 'qruouk8hrwow8pzg',
    database: '	ixioxxlp0tzchbfb'
  });
;}
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);
require("./routes/messageboardAPIRoutes.js")(app);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});