let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 20) {
  alert("No puede usar esta calculadora");
} else if (edad >= 20) {
  alert(nombre + " Sigue adelante para calcular tu IMC");
}

let peso = parseInt(prompt("Ingresa tu peso en kg"));
let estatura = parseInt(prompt("Ingresa tu estatura en cm"));

function calcularIMC() {
  let resultado = peso / ((estatura / 100) * (estatura / 100));
  return resultado;
}

let imcResultado = calcularIMC();

if (imcResultado < 18.5) {
  alert("Tu peso es bajo");
} else if (imcResultado >= 18.5 && imcResultado < 25) {
  alert("Tu peso es saludable");
} else if (imcResultado >= 25 && imcResultado < 30) {
  alert("Sobrepeso");
} else if (imcResultado >= 30) {
  alert("Obesidad");
}

alert(`Tu IMC es: ${imcResultado}`);
