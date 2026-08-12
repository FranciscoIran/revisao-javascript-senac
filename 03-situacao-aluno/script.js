/*
  EXERCÍCIO 03 — SITUAÇÃO DO ALUNO
*/

const nomeAluno = "Aluno Exemplo";

// Defina as faixas de classificação.
// Exemplo:
// Aprovado: média >= ...
// Recuperação: média >= ... e < ...
// Reprovado: média < ...

// TODO:
// Crie uma variável para armazenar a situação final.

// TODO:
// Utilize if / else if / else para classificar o aluno.

// TODO:
// Exiba uma mensagem contendo nome, média e situação.


var nota1 = 8;
var nota2 = 7;
var nota3 = 9;
var nota4 = 6;

var media = (nota1 + nota2 + nota3 + nota4) / 4;
let status;

if (media>=7){
   status = "Aprovado"
}else{
  status = "Reprovado"
}

console.log(`Nome do aluno: ${nomeAluno} \n
  Nota 1: ${nota1} \n
  Nota 2: ${nota2} \n
  Nota 3: ${nota3} \n
  Nota 4: ${nota4}
`);

console.log(`Média final: ${media.toFixed(2)}`);
console.log(`Status: ${status}`);

