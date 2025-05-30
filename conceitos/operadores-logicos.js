/* Aula 2

 Operadores - Comparação

 && -  E / AND
 || - OU / OR
 ! - NÃO / NOT

 SERVE PARA FAZER COMPARAÇÕES LÓGICAS ENTRE EXPRESSÕES QE RETORNAN VALORES BOLEANOS

 */

 // && -  E / AND
 console.log (`true && true = ${true && true }`) // verdadeiro

 const nomeDog = "Pipoca"
 const nomePossuiApenasUmaPalavra = nomeDog.split (" ").length === 1
 const nomePossuiAteDezCaracteres = nomeDog.length <= 10
 console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)


 // || - OU / OR
const dog = {
    adotado: false,
    peso: 5.3
}


console.log(dog.adotado || dog.peso < 10) // verdadeiro

console.log (`true || true = ${true || true }`) // verdadeiro
console.log (`true || false = ${true || false }`) // verdadeiro
console.log (`false || true = ${false || true }`) // verdadeiro
console.log (`false || false = ${false || false }`) // falso


 //  ! - NÃO / NOT

 console.log (`true = ${true}`) // verdadeiro
 console.log (`!true = ${!true}`) // falso
