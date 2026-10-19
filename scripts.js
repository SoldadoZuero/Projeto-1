var f = document.getElementById("formulario");

f.addEventListener("submit", function(e) {
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");
    let valor3 = document.getElementById("valor3");
    let subtotal = document.getElementById("subtotal");
    let desconto = document.getElementById("desconto");
    let total = document.getElementById("total");

    if (valor1.value === "" || valor2.value === "" || valor3.value === "") {
        alert("Preencha todos os campos!");
        return;
    }
    if (isNaN(valor1.value) || isNaN(valor2.value) || isNaN(valor3.value)) {
        alert("Digite apenas números!");
        return;
    }
    e.preventDefault();
    let n1 = parseFloat(valor1.value);
    let n2 = parseFloat(valor2.value);
    let n3 = parseFloat(valor3.value);
    let soma = n1 + n2 + n3;

    let descontoAplicado;
    subtotal.value = `R$ ${soma.toPrecision(4)}`;
    if (soma > 500) {
        alert("Desconto de 10% aplicado!");
        descontoAplicado = soma * 0.1;
        soma -= descontoAplicado;
    } else if (soma > 100) {
        alert("Desconto de 5% aplicado!");
        descontoAplicado = soma * 0.05;
        soma -= descontoAplicado;
    } else {
        alert("Nenhum desconto aplicado!");
        descontoAplicado = 0;
    }
    desconto.value = `R$ ${descontoAplicado.toPrecision(4) || 0}`;
    total.value = `R$ ${soma.toPrecision(4)}`;
});