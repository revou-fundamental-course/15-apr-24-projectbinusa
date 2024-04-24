// Variable
const temperatureForm = document.getElementById("temperatureForm");
const celciusInput = document.getElementById("celciusInput");
const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const calculationTextarea = document.getElementById("calculationTextarea");
const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");

// Function Rumus
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function fahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

convertButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Alert Validasi
  const celciusValue = parseFloat(celciusInput.value);
  if (isNaN(celciusValue)) {
    alert("Masukkan suhu dalam bentuk angka.");
    return;
  }

  // Konversi dan tampilkan hasil
  const fahrenheitValue = celciusToFahrenheit(celciusValue);
  fahrenheitOutput.value = fahrenheitValue;

  calculationTextarea.value = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celcius (°C) kali 9/5 tambah 32.\n\n`;
  calculationTextarea.value += `S (°F) = (${celciusValue} * 9/5) + 32\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${celciusValue} °C = ${fahrenheitValue} °F`;
});

reverseButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Alert Validasi
  const fahrenheitValue = parseFloat(fahrenheitOutput.value);
  if (isNaN(fahrenheitValue)) {
    alert("Masukkan suhu dalam bentuk angka.");
    return;
  }

  // Reverse Konversi dan tampilkan hasil
  const celciusValue = fahrenheitToCelcius(fahrenheitValue);
  celciusInput.value = celciusValue;

  calculationTextarea.value = `Suhu S dalam derajat Celcius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 lalu dikalikan 5/9.\n\n`;
  calculationTextarea.value += `S (°C) = (${fahrenheitValue} - 32) * 5/9\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${fahrenheitValue} °F = ${celciusValue} °C`;
});

// Function Tombol Reset
resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  temperatureForm.reset();
  calculationTextarea.value = "";
  fahrenheitOutput.value = "";
});
