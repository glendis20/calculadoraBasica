function calcular(simbolo) {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  switch (simbolo) {
    case "+":
      alert("El resultado es " + suma(num1, num2));
      break;

    case "-":
      alert("El resultado es " + resta(num1, num2));
      break;

    case "*":
      alert("El resultado es " + multiplicacion(num1, num2));
      break;

    case "/":
      alert("El resultado es " + division(num1, num2));
      break;
  }
}

function suma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

function divisiom(num1, num2) {
  return num1 / num2;
}
