function operate(num1, operator, num2) {
  switch (operator) {
    case " + ":
      return num1 + num2;
    case " - ":
      return num1 - num2;
    case " * ":
      return num1 * num2;
    case " / ":
      return num1 / num2;
    default:
      alert(
        "You need to select a correct operator. Press AC and start over again."
      );
  }
}

num1 = [];
num2 = [];
isOperand = false;

function calc(value) {
  textBox = document.getElementsByClassName("display");
  textBox[0].textContent += value;

  if (isOperand != true) {
    isOperand = isOperator(value);
  }

  if (isOperand == false) {
    num1.push(value);
  } else {
    num2.push(value);
    if (value == "=") {
      displayValue(num1, num2);
    }
  }
}

function isOperator(value) {
  operators = [" + ", " - ", " / ", " * "]; // nicht den typ hinschreiben
  return operators.includes(value);
}

function displayValue(num1, num2) {
  num1Str = parseInt(num1.join(""));
  operator = num2[0];
  num2 = num2.slice(1);
  num2Str = parseInt(num2.join(""));

  value = operate(num1Str, operator, num2Str);
  textBox = document.getElementsByClassName("display");
  textBox[0].textContent = value;
}

function clear() {
  textBox = document.getElementsByClassName("display");
  textBox[0].textContent = "";
}
