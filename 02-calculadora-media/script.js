/*
  EXERCÍCIO 02 — CALCULADORA DE MÉDIA
*/

const nomeAluno = "Francisco";

// TODO:
// Crie quatro variáveis/constantes para armazenar as notas.

// TODO:
// Calcule a soma das quatro notas.

// TODO:
// Calcule a média aritmética.

// TODO:
// Exiba no console:
// Nome do aluno
// Notas
// Média final

// DESAFIO:
// Formate a média com duas casas decimais.

var nota1 = 8;
var nota2 = 7;
var nota3 = 9;
var nota4 = 6;

var media = (nota1 + nota2 + nota3 + nota4) / 4;
var status = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`Nome do aluno: ${nomeAluno} \n
  Nota 1: ${nota1} \n
  Nota 2: ${nota2} \n
  Nota 3: ${nota3} \n
  Nota 4: ${nota4}
`);

console.log(`Média final: ${media.toFixed(2)}`);
console.log(`Status: ${status}`);

