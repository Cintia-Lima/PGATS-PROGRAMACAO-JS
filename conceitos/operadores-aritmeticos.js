/* Aula 2

 Operadores - Aritméticos

 + - Adição
 - - Subtração
 * - Multiplicação
 / - Divisão
 % - Resto
 ** - Exponencial

 */

 console.log (`1 + 1 = ${1 + 1 }`) // 2
 console.log (`10 - 7 = ${10 - 7 }`) // 3
 console.log (`2 * 2  = ${ 2 * 2  }`) // 4


 console.log (`11 / 2  = ${ 11 / 2  }`) // 5.5
 console.log (`11 % 2 = ${11 % 2}`) // 1

 console.log (`4 ** 4 = ${4 ** 4}`) // 256

 console.log (`1 + 1 * 2 = ${1 + 1 * 2}`) // precedência (Ordem em que os cálcuos serã feitos - Primeiro multiplicação em seguida a adição)
 console.log (`((1 + 1) * 2) = ${((1 + 1) * 2)}`) // 4

 console.log (`+"5" * 2 = ${+"5" *2 }`) // 10

 console.log(11/2) // 5.5 
 console.log(parseInt(11/2)) // 5.5 -> 5

 //arredondamento
 console.log(Math.floor(5.8)) // arredondamento para baixo
 console.log(Math.round (5.8)) // arredondamento para o mais próximo
 console.log(Math.round(5.4))
 console.log(Math.round(5.5))
 console.log(Math.ceil(5.8)) // arredondamento para cima

 //definir quantdade de casas decimais
 const valorDecimal = 2.123123
 console.log(valorDecimal.toFixed(3))
