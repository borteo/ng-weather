'use strict';

// Note:
// I would create a new Class Temperature with temp and unit,
// with the setter and getter.
// Then I'd create this TemperatureConverter Class which extend Temperature
// and defines the converter methods.

var TemperatureConverter = function() {
  this.temp = 0;
  this.unit = TemperatureConverter.Units.CELSIUS;
};

TemperatureConverter.Units = {
  CELSIUS: 'Celsius',
  FAHRENHEIT: 'Fahrenheit'
};

TemperatureConverter.prototype.isCelsius = function() {
  return this.unit === TemperatureConverter.Units.CELSIUS;
};

TemperatureConverter.prototype.isFahrenheit = function() {
  return this.unit === TemperatureConverter.Units.FAHRENHEIT;
};

TemperatureConverter.prototype.convertToCelsius = function() {
  return (this.temp - 32) * 0.5;
};

TemperatureConverter.prototype.convertToFahrenheit = function() {
  return this.temp * 1.8 + 32;
};

TemperatureConverter.prototype.setCelsiusTemp = function( val ) {
  this.temp = val;
  this.unit = TemperatureConverter.Units.CELSIUS;
  return this;
};

TemperatureConverter.prototype.setFahrenheitTemp = function( val ) {
  this.temp = val;
  this.unit = TemperatureConverter.Units.FAHRENHEIT;
  return this;
};


TemperatureConverter.prototype.getFahrenheit = function() {
  if ( this.isCelsius() ) {
    return this.convertToFahrenheit();
  }
  return this.temp;
};

TemperatureConverter.prototype.getCelsius = function() {
  if ( this.isFahrenheit() ) {
    return this.convertToCelsius();
  }
  return this.temp;
};



