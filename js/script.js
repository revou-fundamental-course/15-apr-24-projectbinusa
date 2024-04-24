// Input Value Celcius/Fahrenheit
const celciusInput = document.querySelector("section:nth-of-type(1) textarea");
const fahrenheitOutput = document.querySelector(
  "section:nth-of-type(2) textarea"
);

// Function 3 Button
const convertButton = document.querySelector("button:nth-of-type(1)");
const resetButton = document.querySelector("button:nth-of-type(2)");
const reverseButton = document.querySelector("button:nth-of-type(3)");

// Rumus Konversi Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// Rumsu Konversi Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function tombol Konversi
convertButton.addEventListener("click", function (event) {
  event.preventDefault();

  const celciusValue = parseFloat(celciusInput.value);
  const fahrenheitValue = celciusToFahrenheit(celciusValue);
  fahrenheitOutput.value = fahrenheitValue;
});

// Function tombol Reset
resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  celciusInput.value = "";
  fahrenheitOutput.value = "";
});

// Function tombol Reverse
reverseButton.addEventListener("click", function (event) {
  event.preventDefault();
  const fahrenheitValue = parseFloat(fahrenheitOutput.value);
  const celciusValue = fahrenheitToCelcius(fahrenheitValue);
  celciusInput.value = celciusValue;
});

// Menampilkan Cara Perhitungan
const calculationTextarea = document.querySelector(
  "section:nth-of-type(3) textarea"
);

convertButton.addEventListener("click", function (event) {
  event.preventDefault();
  const celciusValue = parseFloat(celciusInput.value);
  const fahrenheitValue = celciusToFahrenheit(celciusValue);
  fahrenheitOutput.value = fahrenheitValue;
  calculationTextarea.value = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celcius (°C) kali 9/5 tambah 32.\n\n`;
  calculationTextarea.value += `S (°F) = (${celciusValue} * 9/5) + 32\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${celciusValue} °C = ${fahrenheitValue} °F`;
});

reverseButton.addEventListener("click", function (event) {
  event.preventDefault();
  const fahrenheitValue = parseFloat(fahrenheitOutput.value);
  const celciusValue = fahrenheitToCelcius(fahrenheitValue);
  celciusInput.value = celciusValue;
  calculationTextarea.value = `Suhu S dalam derajat Celcius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 lalu dikalikan 5/9.\n\n`;
  calculationTextarea.value += `S (°C) = (${fahrenheitValue} - 32) * 5/9\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${fahrenheitValue} °F = ${celciusValue} °C`;
});
