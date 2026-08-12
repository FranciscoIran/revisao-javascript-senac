/*
  EXERCÍCIO 04 — CLASSIFICADOR DE NÚMEROS
*/

function classificarNumero(numero) {
  // TODO:
  // Descubra se o número é positivo, negativo ou zero.
  If (numero === 0) {
    return "O número é zero."
  } 
  // TODO:
  // Quando o número não for zero, descubra também se ele é par ou ímpar.
  const sinal = numero > 0 ? "Positivo" : "Negativo";
  const tipo = numero % 2 === 0 ? "par" : "ímpar";

  // TODO:
  // Retorne uma mensagem com a classificação.
  return  resultado (`O número ${numero} é ${sinal} e ${tipo}.`)
  
}

// TODO:
// Teste a função com pelo menos cinco valores diferentes.
