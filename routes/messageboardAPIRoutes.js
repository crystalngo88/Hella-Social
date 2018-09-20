// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");



// Routes
// =============================================================
module.exports = function (app) {

    // Get all chirps
    app.get("/api/all", function (req, res) {
    console.log(req);
        // Finding all messages, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
       db.Message.findAll({}).then(function (result) {
            // results are available to us inside the .then
            res.json(result);
        });

    });

    // Add a message to message board
    app.post("/api/new", function (req, res) {
//take the request
        var message = req.body;
        //not creating dynamic routes
        console.log("Message Data:");
        console.log('req.body',req.body);

       //add a message to the database using sequelize 
        db.Message.create({
            user: message.user,
            message: message.message,
        }).then(function (results) {
            // `results` here would be the newly created message'post'
            res.json(results);
        });

    });

};