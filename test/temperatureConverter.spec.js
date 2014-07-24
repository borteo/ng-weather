
describe('Temperature converter', function () {
  var tc;
  beforeEach(function () {
    tc = new TemperatureConverter();
  });

  it('should convert celsius to fahrenheit', function () {
    var result = tc.setCelsiusTemp(32).getFahrenheit();
    expect(result).toBe(89.6);
  });
  
  it('should convert fahrenheit to celsius', function () {
    var result = tc.setFahrenheitTemp(32).getCelsius();
    expect(result).toBe(0);
  }); 

});