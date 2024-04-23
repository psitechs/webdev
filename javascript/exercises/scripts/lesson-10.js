function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    turnOffPreviousButton();
    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function turnOffPreviousButton() {
  const lastButton = document.querySelector(".is-toggled");
  if (lastButton) {
    lastButton.classList.remove("is-toggled");
  }
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}
function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let totalCost = Number(inputElement.value);
  const result = document.querySelector(".js-total-cost");
  result.classList.remove("error");
  if (inputElement.value < 0.01) {
    result.classList.add("error");
    result.innerHTML = "Error: cost cannot be less than $0.01";
    return;
  }
  if (inputElement.value < 40) {
    totalCost += 10;
  }
  result.innerHTML = `$${totalCost}`;
}
//Calculator Exercises
let calculation = "";
function updateCalculation(input = "") {
  calculation += `${String(input)}`;
  document.querySelector('.calculation-output').innerText = calculation;
}
function evalCalculation(){
  calculation = eval(String(calculation))
  document.querySelector('.calculation-output').innerText = calculation;
}