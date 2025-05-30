/**
 * Console API
 */

console.log("Aula Inicial JS") 
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Cintia',
    turma: '02',
    disciplina: 'prog JS'
},
{ 
nome: 'Prof Samuel',
    turma: '02',
    disciplina: 'prog JS'

}])

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

//informações de um dog que não mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

//informações que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

//hoisting = içamento ou elevação (Quem faz esse processo é o Var. Não muito utilizado, mas serve para o node içar a varável 
//                       no inicio da execução, quando declarada ao longo do código. É içada como Undefinied, ou seja, vai ser valor)


/**
 * Tipos de Dados 
 * Lógica de programação = Cadeia, inteiro, real, lógico, vetor, matriz
 * Java Scrit:
 *     cadeia = String
 *     Inteiro/real = Number
 *     Lógico = Boolean
 *     Vetor/matriz = Array
 *     Undefined = não sabemos o valor que virá, ou seja, uma variável sem atribuição de valor
 *     null = variável com valor nulo.
 *     BigInt = Number para números extremente grandes
 *     Symbol = Identificador único
 *   
 */

// Typescript = Validação de tipos
// Na declaração de variáveis não é preciso informar o tipo, pois o java script já define automaticamente qual tipo será.
// se quisermos definir um valor, usamos o Typescript


/**
 * STRINGS
 */
   
// Posso declara uma strings das seguintes forma:
// 'Turma 02 do PGATS'  (aspas simples ou single quote)
// "Turma 02 do PGATS" ( aspas duplas ou double quote)
// `Turma 02 do PGATS` (template strings)

//Concatenação das strings
// const turma = "02"
// console.log ("Aula 03 da Turma " + turma + " \n no Sábado dia 05 de Abril")

//Interpolação de strings (Não precisamos usar o sinal de + para utilizar texto concatenado com a varável)
// const numeroAula = "03"
// const turma = "02"
// let data = "05 de abril"
//console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`)

//lenght (para saber o tamanho de uma determinada cadeia de caracteres. Se for vetor ele retornar a quantidade de itens na lista)
//console.log(data.length)

//split (serve para separar a string)
//const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"
//const nomesDeAlunosSplit = nomesDeAlunos.split(" ") >> Separa sempre que achar um espaço
//console.log(nomesDeAlunosSplit)

//toLowerCase e toUpperCase (servem para passar todas a string para letra maiúscula ou minúscula)
//console.log(nomesDeAlunos.toLowerCase) >> Minúsculo
//console.log(nomesDeAlunos.toUpperCase) >> maiúsculo

//Includes (retorna um boaleano)
//console.log(nomesDeAluno.includes("Goku")) >> retorna true, pois nessa string possui o nome Goku

//replaceAll (para fazer uma substituição em uma string)
//console.log(nomesDeAlunos.replaceAll('a', 'i') >> tudo que tiver a letra 'a' será substituido por 'i'.

//trim (retirar espaços desnecessário do inicio e do final da string)
//const conceitosLogica = "             inteiro real cadeia de caracteres....              "
//console.log(conceitosLogica.trim())

//slice e substring (servem para fazer um recorte em uma string / pegar uma porção da string a partir uma posição)
//let dataParaCortar = "05 de Abril"
//const cpf = '86189924611'
//"05 de Abril"
// 0123456789 (posições)
//console.log(dataParaCortar.slice(0,2)) >> vai pegar apenas o número da data
//console.log(cpf.slice(0,3))  >> vai pegar apenas os três primeiros dígitos do CPF







