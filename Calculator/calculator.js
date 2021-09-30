number = "";
operatorArr = [];
function storeNum(value) {
  if (value === undefined) value = "";
  number += value;
  displayValue(value, false);

  const operator = document.getElementsByClassName("operator");

  operatorArr = Array.from(operator);

  operatorArr.forEach((el, index) =>
    operatorArr[index].addEventListener("click", () => (number = ""))
  );

  return parseInt(number);
}

function storeOperator(value) {
  displayValue(value, true);
  operator = value;
  num = storeNum();
  storeArr(num, operator);
}
mathFunction = [];

function storeArr(num, operator) {
  if (num !== undefined && operator !== undefined) {
    mathFunction.push(num);
    mathFunction.push(operator);
    console.log("Ich bin das mathFunctionArray" + mathFunction);
    if (operator == "=") {
      calc(mathFunction);
    }
  }
}
mathArr = [];
operatorIndex = 0;

function calc(mathArr) {
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
      console.log(mathArr);
    }
  }
  displayResult(mathArr[0]);
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
  textBox = document.getElementsByClassName("display");
  if (isOperator) textBox[0].textContent += " " + value + " ";
  else textBox[0].textContent += value;

  hiddenBox = document.getElementsByClassName("hidden-span");
  if (value != "=") {
    if (isOperator) hiddenBox[0].textContent += " " + value + " ";
    else hiddenBox[0].textContent += value;
  }
}

function displayResult(value) {
  textBox = document.getElementsByClassName("display");
  textBox[0].textContent = value;

  hiddenBox = document.getElementsByClassName("hidden-span");
  hiddenBox[0].style.visibility = "visible";
}

function clear() {}
