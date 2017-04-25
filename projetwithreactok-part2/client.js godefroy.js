// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  var $messages = $("#messages");
  var addMessage = function(text) {
    $messages.append($("<p></p>").text(text));
  };
  
  var socket = io("/");
  socket.on("connect", function() {
    addMessage("Connecté");
  });
  socket.on("disconnect", function() {
    addMessage("Déconnecté");
  });
  socket.on("msg", function(text) {
    addMessage("Message : " + text);
  });
  
  var $form = $("#form");
  var $message = $("#message");
  $form.on("submit", function(e) {
    e.preventDefault();
    socket.emit("msg", $message.val());
    $message.val("");
  });
});
