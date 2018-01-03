$(document).ready(function(){
  $('#signup').submit(function(event){
    console.log('i been clicked!');
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
