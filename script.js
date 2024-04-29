let number = "3";
console.log(number);

let counterValue = 0;
function updateCounterDisplay() {
  document.getElementById("counter").textContent = counterValue;
}
function increaseCounter() {
  counterValue++;
  updateCounterDisplay();
}
function decreaseCounter() {
  counterValue--;
  updateCounterDisplay();
}
function resetCounter() {
  counterValue = 0;
  updateCounterDisplay();
}
