// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Message" model that matches up with DB
var Message = sequelize.define("message", {
    user: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
});

// Syncs with DB
Message.sync();

// Makes the Message Model available for other files (will also create a table)
module.exports = Message;
