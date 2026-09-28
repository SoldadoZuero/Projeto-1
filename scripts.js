const f = document.getElementById("formulario");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

f.addEventListener("submit", function(e) {

    if (num1.value === "" || num2.value === "") {
        alert("Preencha todos os campos!");
        return;
    }
    if (isNaN(num1.value) || isNaN(num2.value)) {
        alert("Digite apenas números!");
        return;
    }
    e.preventDefault();
    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let soma = n1 + n2;
    resultado.value = soma;
});