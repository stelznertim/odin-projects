let number = "";
let operatorArr = [];
let mathFunction = [];
let mathArr = [];

const operator = document.getElementsByClassName("operator");
const textBox = document.getElementsByClassName("display");
const hiddenBox = document.getElementsByClassName("hidden-span");
const allClearBtn = document.getElementsByClassName("clearButton");

function storeNum(value) {
  if (value === undefined) value = "";
  number += value;

  operatorArr = Array.from(operator);
  operatorArr.forEach((el, index) =>
    operatorArr[index].addEventListener("click", () => (number = ""))
  );

  displayValue(value, false);

  allClearBtn[0].addEventListener("click", () => {
    clearDisplay();
    number = "";
    hiddenBox[0].style.visibility = "hidden";
  });
  return parseInt(number);
}

function storeOperator(operator) {
  displayValue(operator, true);

  num = storeNum();

  calc(num, operator);
}

function calc(num, operator) {
  allClearBtn[0].addEventListener("click", () => {
    clearStore(mathArr, 0, mathArr.length);
    clearDisplay();
    hiddenBox[0].style.visibility = "hidden";
  });

  if (num !== undefined && operator !== undefined) {
    if (mathArr.length % 2 == 0) {
      mathArr.push(num);
    } else {
      hiddenBox[0].textContent = mathArr[0] + " " + operator + " ";
      hiddenBox[0].style.visibility = "hidden";
    }
    mathArr.push(operator);
  }
  if (operator == "=") {
    operatorIndex = 0;
    while (operatorIndex != -1) {
      operatorIndex = mathArr.findIndex(
        (element) => element == "*" || element == "/"
      );
      if (operatorIndex == -1) {
        operatorIndex = mathArr.findIndex(
          (element) => element == "+" || element == "-"
        );
      }
      if (operatorIndex != -1) {
        result = operate(
          mathArr[operatorIndex - 1],
          mathArr[operatorIndex],
          mathArr[operatorIndex + 1]
        );
        mathArr.splice(operatorIndex - 1, 3, result);
      }
    }
    clearStore(mathArr, 1, mathArr.length);
    displayResult(mathArr[0]);
  }
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      alert(
        "You need to select a correct operator. Press AC and start over again."
      );
  }
}

function displayValue(value, isOperator) {
  if (isOperator) textBox[0].textContent += " " + value + " ";
  else textBox[0].textContent += value;

  if (value != "=") {
    if (isOperator) hiddenBox[0].textContent += " " + value + " ";
    else hiddenBox[0].textContent += value;
  }
}

function displayResult(value) {
  textBox[0].textContent = value;
  hiddenBox[0].style.visibility = "visible";
  return value;
}

function clearDisplay() {
  clearFirstDisplay();
  clearSecondDisplay();
}
function clearFirstDisplay() {
  textBox[0].textContent = "";
}

function clearSecondDisplay() {
  hiddenBox[0].textContent = "";
}
function clearStore(arr, index, length) {
  arr.splice(index, length);
}
