var apiKey = require('./../.env').apiKey;

getRepository = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    $('#repo').empty();
    response.forEach(function(repository) {
      var new_item = $("<li><a href=" + repository.html_url + " target='_blank'>" + repository.name + "</a></li>").hide();
      $('#repo').append(new_item);
      new_item.show('slow');
      console.log("It Worked");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
}

exports.getUsers = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userfullname').text(response.name);
    console.log(response.name);
    getRepository(username);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}
