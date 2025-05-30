/* Aula 2

 Operadores - Comparação

 > - Maior que 
 >= - Maior ou igual que
< - Menor que
<= Menor ou igual que
== - Igualdade somente de valores
!= - Diferença somente de valores
=== - Igualdade de valores e tipo de dado
*/

//Maior que
console.log(10 > 5) // verdadeito = true
console.log (`10 > 5 = ${10 > 5}`)
console.log (`10 > 20 = ${10 > 20}`) // Falso

// Maior ou igual 
console.log (`10 >= 10 = ${10 >= 10}`) // verdadeiro
console.log (`10 >= 9 = ${10 >= 9}`) // verdadeiro

// Menor que
console.log (`10 < 5 = ${10 < 5}`) // falso
console.log (`10 < 20 = ${10 < 20}`) // verdadeiro

//Menor ou igual
console.log (`10 <= 10 = ${10 <= 10}`) // verdadeiro
console.log (`10 <= 9 = ${10 <= 9}`) // falso

//Igualdade somente de valores
console.log (`1 =='1' = ${1 =='1'}`) // verdadeiro
console.log (`true == 1 = ${true == 1}`) // verdadeiro
console.log (`false == 1 = ${false == 1}`) // falso

//Igualdade de valores e tipo de dado
console.log (`1 === '1' = ${1=== '1'}`) // falso
console.log (`true === 1 = ${true === 1}`) // falso
console.log (`false === 1 = ${false === 1}`) // falso

// Diferença de valores
console.log (`1 != 2 = ${1 != 2}`) // verdadeiro
console.log (`1 !== 2 = ${1 !== 2}`) // verdadeiro
