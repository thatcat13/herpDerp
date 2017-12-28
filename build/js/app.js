(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(thingName){
  this.thing = thingName;
};

Calculator.prototype.herpDerp = function(goal){
  var output = [];
  for (var i = 1; i <= goal; i++){
    if (i % 15 === 0) {
      output.push("herp-derp")
    } else if (i % 3 === 0) {
      output.push("herp")
    } else if (i % 5 === 0) {
      output.push("derp")
    } else {
      output.push(i);
    }
  }
  return output;
}

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/herpDerp.js":1}]},{},[2]);
