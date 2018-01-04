var Calculator = require('./../js/herpDerp.js').calculatorModule;

var newRound = new Calculator();

describe('Calculator', function() {

  it('should test whether inputting numbers divisible by 15 returns herp-derp ', function() {
    expect(newRound.herpDerp(15)).toEqual(0);
  });
});
