var Calculator = require('./../js/herpDerp.js').calculatorModule;
//specify which property of exports we are interested in via 'require'
//store it in a new variable called Calculator; uppercase because it is an object constructor function

$(document).ready(function(){
  $('#herp-derp-form').submit(function(event){
    //for now, herp derp form will trigger instantiating a new Calculator object
    //and have thingName property hard-coded to "string"
    event.preventDefault();
    var inputNum = $('#goal').val();
    var simpleCalculator = new Calculator("string");
    //need to create a Calculator object here so that the herpDerp **method** can be called on it
    var output = simpleCalculator.herpDerp(inputNum);
    //passed inputNum variable into herpDerp method to return an array that's stored in output variable
    output.forEach(function(element){
      $('#solution').append('<li>' + element + '</li>');
    });
  });//submit

  $("#add").click(function(){
  var number1 = parseInt($('#number1').val());
  var number2 = parseInt($('#number2').val());
  //without parseInt the output would be concatinated numbers instead
  var thing = new Calculator("string");
  var answer = thing.addThings(number1, number2);
  console.log(answer);
  $('#solution2').append(answer);
  });

  $("#subtract").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.subtractThings(number1, number2);
    console.log(answer);
    $('#solution2').append(answer);
  });

  $("#multiply").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.multiplyThings(number1, number2);
    console.log(answer);
    $('#solution2').append(answer);
  });

  $("#divide").click(function(){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var thing = new Calculator("string");
    var answer = thing.divideThings(number1, number2);
    console.log(answer);
    $('#solution2').append(answer);
  });

});//document ready

//"test": "echo \"Error: no test specified\" && exit 1"
