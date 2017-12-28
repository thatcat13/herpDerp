var Calculator = require('./../js/herpDerp.js').calculatorModule;
//uppercase because it is an object constructor function

$(document).ready(function(){
  $('#herp-derp-form').submit(function(event){
    event.preventDefault();
    var inputNum = $('#goal').val();
    var simpleCalculator = new Calculator("string");
    var output = simpleCalculator.herpDerp(inputNum);
    output.forEach(function(element){
      $('#solution').append('<li>' + element + '</li>')
    });
  });
});
