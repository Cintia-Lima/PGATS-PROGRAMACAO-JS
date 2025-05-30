/*
  Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . 
  O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
  Letras acentuadas não fazem parte desse desafio.  
 */


function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 1;

  
  for (let char of texto) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

const texto = "'Eu vi a curiosidade do açougueiro no aerporto'";
console.log(`O texto: ${texto} contém ${(contarVogais(texto))} vogais`)