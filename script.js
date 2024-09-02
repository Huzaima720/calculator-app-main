let buttonContainer = document.querySelector(".buttons-container");
let buttons = buttonContainer.querySelectorAll("button");

let results = document.querySelector(".screen h1");
let resultsValues = [];

let calculation = document.querySelector(".calculation");
let calculationValue = 0;
let operator = undefined;
buttons.forEach((button) => {
  button.addEventListener("click", () => {

    if (button.classList.contains("number") || (button.classList.contains("decimal") && !resultsValues.includes('.'))) {
      resultsValues.push(button.innerHTML);
      displayresults(resultsValues);
    }

    if (
      calculationValue &&
      operator == undefined &&
      button.classList.contains("operator")
    ) {
      resultsValues = calculationValue.toString().split("");
    }

    if (resultsValues.length > 0 && button.classList.contains("operator")) {
    
      calculationValue = generateCalculationValue(calculationValue, operator);
      operator = button.innerHTML;
      calculation.innerHTML = calculationValue + " " + operator;
      resultsValues = [];
      displayresults(resultsValues);
    }
    if (button.innerHTML === "DEL") {
      if (resultsValues.length > 0) {
        resultsValues.pop();
        displayresults(resultsValues);
      }
    }
    if (button.innerHTML === "RESET") {
      resultsValues = [];
      calculationValue = 0;
      operator = undefined;
      results.innerHTML = 0;
      calculation.innerHTML = "";
      displayresults(results);
    }
    if (button.innerHTML === "=") {
      results.innerHTML = calculationValue;
      calculation.innerHTML = "";
      operator = undefined;
      // resultsValues = calculationValue.toString().split('')
      console.log(resultsValues);
    }
  });
});

function generateCalculationValue(calculationValue, operator) {
  if (operator === undefined) {
    return parseFloat(resultsValues.join(""));
  }
  if (operator === "+") {
    return calculationValue + parseFloat(resultsValues.join(""));
  }
  if (operator === "-") {
    return calculationValue - parseFloat(resultsValues.join(""));
  }
  if (operator === "x") {
    return calculationValue * parseFloat(resultsValues.join(""));
  }
  if (operator === "/") {
    return calculationValue / parseFloat(resultsValues.join(""));
  }
  return calculationValue;
}

function displayresults(resultsValues) {
  if (resultsValues.length > 0) {
    
    results.innerHTML = resultsValues.join("");
  } else {
    results.innerHTML = 0;
  }
}
