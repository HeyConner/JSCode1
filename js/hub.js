var apiKey = require('./../.env').apiKey;

getRepository = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    $('#publicRepository').empty();
    response.forEach(function(repository) {
      $('#repoResponse').append("<li><a href=" + repository.html_url + " target='_blank'>" + repository.name + "</a></li>");
      console.log("It Worked");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};

exports.getUsers = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#userResponse').text(response.name);
    console.log(response.name);
    getRepos(username);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
