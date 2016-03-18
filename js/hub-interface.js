$(document).ready(function(){

  $('git').click(function(){
    var username = $('#username').val();
    var repositories = $('#repo')
    $('#username').val("");
    $.get('http://dinoipsum.herokuapp.com/api/',
    {
      format: 'html',
      paragraphs: paragraphs,
      words: wordcount
    },
    function(data, _status, _xhr){
      $('#result').html(data);
    });
  });
});
