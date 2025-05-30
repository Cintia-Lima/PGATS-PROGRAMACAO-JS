/**
 * Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . O texto de entrada conterá 
 * apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
 */


function contarVogais(texto) {
  return (texto.match(/[aeiou]/gi) || []).length;
}

const texto = "'Eu sou brasileira e não desisto nunca!'";

console.log(`O texto: ${texto} contém ${(contarVogais(texto))} vogais`)
