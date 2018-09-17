//what is this?
var express = require("express");
var bodyParser = require("body-parser");
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


passport.use(new BasicStrategy(
  function(username, password, done) {
<<<<<<< Updated upstream
    User.findOne({ userName: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { 
        return done(null, false);
       }else{
        return done(null, user);
       }
    });
  }
));
=======
    db.User.findAll({
      limit: 1,
      where: {
          email:username
      }
       }).then(function(entries){

        // if (err) { return done(err); }
        if (!entries[0].userName) { return done(null, false); }
        if (entries[0].password != password) { return done(null, false); }
        return done(null, entries[0]);
    }); 
  }));
>>>>>>> Stashed changes
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;

