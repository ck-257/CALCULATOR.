let display = document.getElementById('display');
let isCalculatorClosed = false;

window.onload = function() {
  display.value = '0';
};

function appendToDisplay(value) {
  if (!isCalculatorClosed || value === 'C') {
    if (display.value === '0' && value !== '.') {
      display.value = ''; // Clear initial '0' when a button is pressed
    }
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculateResult() {
  if (!isCalculatorClosed) {
    try {
      let result = eval(display.value);
      if (result === undefined || isNaN(result)) {
        display.value = 'Error';
      } else {
        display.value = result;
      }
    } catch (error) {
      display.value = 'Error';
    }
  }
}

function closeCalculator() {
  display.value = '';
  isCalculatorClosed = true;
}

function reopenCalculator() {
  display.value = '0';
  isCalculatorClosed = false;
}
