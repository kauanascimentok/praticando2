let peso = prompt("insira seu peso")
let altura = prompt("insira sua altura")
const imc = peso / (altura * altura)

if (imc < 18.5) {
    alert("abaixo do peso")
} else if (imc >= 18.5 && imc < 24.9) {
    alert("peso normal")
} else if (imc >= 25.0 && imc < 29.9) {
alert("Sobrepeso")
} else if (imc >= 30.0 && imc < 34.9) {
  alert("Obesidade grau 1")
} else if (imc >= 35.0 && imc < 39.9) {
    alert("Obesidade grau 2")
} else {
    alert("Obesidade grau 3 (mórbida)")
}