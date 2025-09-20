function toFahrenheit(celsius) {
  const celsiusNum = Number(celsius); 

  if (isNaN(celsiusNum)) {
    return "Invalid input: Not a number";
  }
  if (celsiusNum < -273.15 || celsiusNum > 1e9) {
    return "Invalid input: Out of range";
  }

  result =  (celsiusNum * 9 / 5) + 32;
  return result.toFixed(2)
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
