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
      $('#solution').append('<li>' + element + '</li>')
    });
  });
});
