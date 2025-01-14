let displayValue = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function opearate(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else {
        calculate();
    }
    operator = op;
    displayValue = '';
}

function calculate() {
    if (firstOperand !== null && displayValue !== '') {
      const secondOperand = parseFloat(displayValue);
      switch (operator) {
        case '+':
          firstOperand += secondOperand;
          break;
        case '-':
          firstOperand -= secondOperand;
          break;
        case '*':
          firstOperand *= secondOperand;
          break;
        case '/':
          firstOperand /= secondOperand;
          break;
      }
      displayValue = firstOperand.toString();
      operator = '';
      firstOperand = null;
      updateDisplay();
    }
  }
  
function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

