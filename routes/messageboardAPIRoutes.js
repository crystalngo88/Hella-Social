// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var addMessage = require("./js/addMessage");
var Message = require("../models/message");



// Routes
// =============================================================
module.exports = function (app) {

    // Get all chirps
    app.get("/api/all", function (req, res) {
    console.log(req)
        // Finding all messages, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
       Message.findAll({}).then(function (result) {
            // results are available to us inside the .then
            res.json(result);
        });

    });

    // Add a message to message board
    app.post("/api/new", function (req, res) {
//take the request
       

       //add a message to the database using sequelize 
        Message.create({
            
            user: req.body.user,
            message: req.body.message,
        }).then(function (results) {
            // `results` here would be the newly created message'post'
            res.end();
        });

    });

};