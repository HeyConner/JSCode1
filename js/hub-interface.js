var getUser = require('./../js/hub.js').getUsers;


$(document).ready(function(){
  $('#search').click(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    getUser(username);
  });
});
