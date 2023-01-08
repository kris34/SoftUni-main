function convert(celsius) {
  let result = [];
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32;
  result.push(kelvin.toFixed(5), fahrenheit.toFixed(5));

  return result
}

convert(36.5);
