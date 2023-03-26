var finalValue; // Rezultat
// finalValue === undefined
var currentValue = 0; // Broj koji je trenutni broj kojeg unosimo na digitronu
var op = ""; // Operacija koju smo izabrali

// function showCurrentValues() {
//   console.log("------------------------");
//   console.log("finalValue", finalValue);
//   console.log("currentValue", currentValue);
//   console.log("op", op);
// }

function onNumberClickHandler(number) {
  currentValue = currentValue * 10 + number;
  document.getElementById("result").textContent = currentValue;
  showCurrentValues();
}

function onOperationSelectHandler(selectedOp) {
  switch (op) {
    case "":
      finalValue = currentValue;
      break;
    case "+":
      finalValue = finalValue + currentValue;
      break;
    case "-":
      finalValue = finalValue - currentValue;
      break;
    case "*":
      finalValue = finalValue * currentValue;
      break;
    case "/":
      finalValue = finalValue / currentValue;
      break;
    default:
      break;
  }

  op = selectedOp;
  currentValue = 0;
  document.getElementById("result").textContent = "";
}

document.getElementById("one").addEventListener("click", function () {
  onNumberClickHandler(1);
});

document.getElementById("two").addEventListener("click", function () {
  onNumberClickHandler(2);
});

document.getElementById("three").addEventListener("click", function () {
  onNumberClickHandler(3);
});

document.getElementById("four").addEventListener("click", function () {
  onNumberClickHandler(4);
});

document.getElementById("five").addEventListener("click", function () {
  onNumberClickHandler(5);
});

document.getElementById("six").addEventListener("click", function () {
  onNumberClickHandler(6);
});

document.getElementById("seven").addEventListener("click", function () {
  onNumberClickHandler(7);
});

document.getElementById("eight").addEventListener("click", function () {
  onNumberClickHandler(8);
});

document.getElementById("nine").addEventListener("click", function () {
  onNumberClickHandler(9);
});

document.getElementById("zero").addEventListener("click", function () {
  onNumberClickHandler(0);
});

document.getElementById("delete").addEventListener("click", function () {
  document.getElementById("result").textContent = "";

  // NASE POCETNE VREDNOSTI
  currentValue = 0;
  finalValue = undefined;
  op = "";
});

document.getElementById("equal").addEventListener("click", function () {
  switch (op) {
    case "":
      finalValue = currentValue;
      break;
    case "+":
      finalValue = finalValue + currentValue;
      break;
    case "-":
      finalValue = finalValue - currentValue;
      break;
    case "*":
      finalValue = finalValue * currentValue;
      break;
    case "/":
      finalValue = finalValue / currentValue;
      break;
    default:
      break;
  }

  // ispisivanje rezultati
  document.getElementById("result").textContent = finalValue;

  // vracanje na pocetne vrednosti
  op = "";
  currentValue = 0;
  finalValue = undefined;
});

document.getElementById("plus").addEventListener("click", function () {
  onOperationSelectHandler("+");
});

document.getElementById("minus").addEventListener("click", function () {
  onOperationSelectHandler("-");
});

document.getElementById("times").addEventListener("click", function () {
  onOperationSelectHandler("*");
});

document.getElementById("divide").addEventListener("click", function () {
  onOperationSelectHandler("/");
});