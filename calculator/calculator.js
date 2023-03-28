let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let add = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum = " + add;
}
function subtract() {
  let subtract = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum = " + subtract;
}
function divide() {
  let divide = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum = " + divide;
}
function multiply() {
  let multiply = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum = " + multiply;
}
