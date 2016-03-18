var getUser = require('./../js/repos.js').getUsers;


$(document).ready(function(){
    $(#search).click(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      getUser(username);
    });
  });
