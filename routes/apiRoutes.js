var User = require("../models/Users");

module.exports = function(app) {
  // Get all examples
  
  // Create a new example
  app.post("/api/user", function(req, res) {
    
    var user = new User({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email
    });

    user.save(function(err) {
      if (err)
        return res.send(err);
  
      res.json({ message: 'added' });
    });
  });
  
  var interests = ["music", "sports", "food", "movies", "LGBTQ+", "religion/spirituality", "THICC lifestyle", "technology", "academic", "family", "arts and literature","dating"];

  
};