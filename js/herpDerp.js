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
