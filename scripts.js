const f = document.getElementById("formulario");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const somar = document.getElementById("somar");

f.addEventListener("submit", function(e) {
    e.preventDefault();
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    const soma = n1 + n2;
    resultado.value = soma;
});