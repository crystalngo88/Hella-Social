// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var interests = ["music", "sports", "food", "movies", "LGBTQ+", "religion/spirituality", "THICC lifestyle", "technology", "academic", "family", "arts and literature","dating"];
// Dependencies
// =============================================================
var path = require("path");
var passport = require('passport')
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index", {});
  });
 
  app.get("/interestForm", function(req, res) {
    res.render("survey", {"interests":interests});
  });

  app.get("/hi", passport.authenticate('basic', { session: false }),function(req, res) {
  
    res.render("index", {user:req.user.userName});
  });
//   // add route loads the add.html page,
//   // where users can enter new characters to the db
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/add.html"));
//   });

//   // all route loads the all.html page,
//   // where all characters in the db are displayed
//   app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/all.html"));
//   });

};
