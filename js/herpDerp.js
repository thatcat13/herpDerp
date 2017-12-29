function Calculator(thingName){
  this.thing = thingName;
  //property is named thing
    //eventually, users will create a new object (instance) of Calculator every time they choose a new thing (i.e., "hot pink" or "retro green")
};

Calculator.prototype.herpDerp = function(goal){
  //method that can be called on new instances of the Calculator constructor
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
//this is how you store the Calculator declaration into a module
//property added to empty export object named 'calculatorModule' with Calculator value assigned to it
//the object Calculator constructor function is now converted into a MODULE
//module is a big ol' gian JS global object
