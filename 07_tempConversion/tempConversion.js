const convertToCelsius = function(temperature) {
  let conversion = (temperature - 32) * 5 / 9
  // let oneDecimal = Math.round(conversion * 10) / 10;
  let oneDecimal = parseFloat(conversion.toFixed(1))
  return oneDecimal;
};

const convertToFahrenheit = function(temperature) {
  let conversion = (temperature / 5 ) * 9 + 32
  let oneDecimal = Math.round(conversion * 10) / 10;
  return oneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
