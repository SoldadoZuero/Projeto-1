/* MODELO 1: EXEMPLO SIMPLES */

var a = 10;
var b = 20;
var c = a + b;
console.log("O resultado da soma é: " + c);

/* MODELO 2: FUNÇÃO SIMPLES */

function somar(x, y) {
    return x + y;
}

var resultado = somar(5, 15);
console.log("O resultado da soma é: " + resultado);

/* MODELO 3: TIPOS DE VARIAVEIS */

var a = 0; // Variável global
let b = 1; // Variável de bloco
const c = 2; // Variável constante

console.log("Variável global a: " + a);
console.log("Variável de bloco b: " + b);
console.log("Variável constante c: " + c);