//describe() defines a suite, which allows us to group and organize tests
//within the describe() block there's a spec, beginning with it()
//spec has a set of expectations
//matchers provide a boolean value for each expectation; true passes, false fails

//you might want to instatiate the same object in different specs--can use the beforeEach() to dry up the code


var Calculator = require('./../js/herpDerp.js').calculatorModule;

describe('Calculator', function() {
  var newRound;
  //declare newRound variable in top-level scope
  beforeEach(function(){
    newRound = new Calculator();
  });
  //beforeEach() assigns an instatiated object to the newRound variable; now this object will be made available to each spec inside the suite

  it('should test whether inputting numbers divisible by 15 returns herp-derp ', function() {
    expect(newRound.herpDerp(15)).toBeNumber();
  });
});
