/* global moment */

// When user clicks add-btn
$("#message-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newMessage object
    var newMessage = {
      user: $("#user").val().trim(),
      message: $("#message-box").val().trim(),
    };
  
    console.log(newMessage);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newMessage)
  
      // On success, run the following code
      .then(function(data) {
  console.log(data);
        var row = $("<div>");
        row.addClass("message");
  
        row.append("<p>" + data.user + ": </p>");
        row.append("<p>" + data.message + "</p>");
    
  
        $("#message-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#user").val("");
    $("#message-box").val("");
  });
  
  // When the page loads, grab all of our messages
  // $.get("/api/all", function() {
  //   Message.findAll({}).then(function (data) {
  //   if (data.length !== 0) {
  
  //     for (var i = 0; i < data.length; i++) {
  
  //       var row = $("<div>");
  //       row.addClass("message");
  
  //       row.append("<p>" + data[i].user + " added... </p>");
  //       row.append("<p>" + data[i].message + "</p>");
  
  //       $("#message-area").prepend(row);
  
  //     }
  
  //   }
  
  // });
  // });

