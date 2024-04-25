// Variable
const temperatureForm = document.getElementById("temperatureForm");
const celciusInput = document.getElementById("celciusInput");
const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const calculationTextarea = document.getElementById("calculationTextarea");
const convertButton = document.getElementById("convertButton");
const resetButton = document.getElementById("resetButton");
const reverseButton = document.getElementById("reverseButton");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const celciusOutput = document.getElementById("celciusOutput");
const convertButton1 = document.getElementById("convertButton1");
const resetButton1 = document.getElementById("resetButton1");
const reverseButton1 = document.getElementById("reverseButton1");

//-------------------------------------------------
// Function Rumus
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

function fahrenheitToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

//-------------------------------------------------
// Konversi ctof
convertButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Alert Validasi ctof
  const celciusValue = parseFloat(celciusInput.value);
  if (isNaN(celciusValue)) {
    alert("Masukkan suhu dalam bentuk angka.");
    return;
  }

  // Konversi dan tampilkan hasil ctof
  const fahrenheitValue = celciusToFahrenheit(celciusValue);
  fahrenheitOutput.value = fahrenheitValue;

  calculationTextarea.value = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celcius (°C) kali 9/5 tambah 32.\n\n`;
  calculationTextarea.value += `S (°F) = (${celciusValue} * 9/5) + 32\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${celciusValue} °C = ${fahrenheitValue} °F`;
});

// Function Tombol Reset ctof
resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  temperatureForm.reset();
  calculationTextarea.value = "";
  fahrenheitOutput.value = "";
});

// Button Reverse ctof ke ftoc
reverseButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Tampilakan ftoc section
  document.getElementById("ctof").style.display = "none";
  document.getElementById("ftoc").style.display = "block";
});

// ------------------------------------------------
// Konversi ftoc
convertButton1.addEventListener("click", function (event) {
  event.preventDefault();

  // Alert Validasi ftoc
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (isNaN(fahrenheitValue)) {
    alert("Masukkan suhu dalam bentuk angka.");
    return;
  }

  // Konversi dan tampilkan hasil ftoc
  const celciusValue = fahrenheitToCelcius(fahrenheitValue);
  celciusOutput.value = celciusValue;

  calculationTextarea.value = `Suhu S dalam derajat Celcius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 lalu dikalikan 5/9.\n\n`;
  calculationTextarea.value += `S (°C) = (${fahrenheitValue} - 32) * 5/9\n\n`;
  calculationTextarea.value += `Hasil Konversi:\n${fahrenheitValue} °F = ${celciusValue} °C`;
});

// Function Tombol Reset ftoc
resetButton1.addEventListener("click", function (event) {
  event.preventDefault();
  temperatureForm1.reset();
  calculationTextarea.value = "";
  celciusOutput.value = "";
});

// Button Reverse ftoc ke ctof
reverseButton1.addEventListener("click", function (event) {
  event.preventDefault();

  // Tampilkan ctof section
  document.getElementById("ftoc").style.display = "none";
  document.getElementById("ctof").style.display = "block";
});
