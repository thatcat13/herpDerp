(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(thingName){
  this.thing = thingName;
  //property is named thing
    //eventually, users will create a new object (instance) of Calculator every time they choose a new thing (i.e., "hot pink" or "retro green")
}

Calculator.prototype.herpDerp = function(goal){
  //method that can be called on new instances of the Calculator constructor
  var output = [];
  for (var i = 1; i <= goal; i++){
    if (i % 15 === 0) {
      output.push("herp-derp");
    } else if (i % 3 === 0) {
      output.push("herp");
    } else if (i % 5 === 0) {
      output.push("derp");
    } else {
      output.push(i);
    }
  }
  return output;
};

//CALCULATOR METHODS
Calculator.prototype.addThings = function(a,b){
  return a + b;

};

Calculator.prototype.subtractThings = function(a,b){
  return a - b;

};

Calculator.prototype.multiplyThings = function(a,b){
  return a * b;

};

Calculator.prototype.divideThings = function(a,b){
  return a / b;

};

exports.calculatorModule = Calculator;
//this is how you store the Calculator declaration into a module
//property added to empty export object named 'calculatorModule' with Calculator value assigned to it
//the object Calculator constructor function is now converted into a MODULE
//module is a big ol' gian JS global object

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/herpDerp.js":1}]},{},[2]);
