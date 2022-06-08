function add() {
  var add =
    Number(document.getElementById("number1").value) +
    Number(document.getElementById("number2").value);
  window.alert(add);
}
function subtract() {
  var subtract =
    Number(document.getElementById("number1-").value) -
    Number(document.getElementById("number2-").value);
  window.alert(subtract);
}
function divide() {
  var divide =
    Number(document.getElementById("number1d").value) /
    Number(document.getElementById("number2d").value);
  window.alert(divide);
}
function multiply() {
  var multiply =
    Number(document.getElementById("number1*").value) *
    Number(document.getElementById("number2*").value);
  window.alert(multiply);
}
function square() {
  var square =
    Number(document.getElementById("numbers").value) *
    Number(document.getElementById("numbers").value);
  window.alert(square);
}