/*
  Crie uma função que pega uma lista de inteiros e strins e retorna uma nova lista sem as strings
 */

function removerStrings(lista) {
    return lista.filter(item => typeof item === 'number')
}

const listaComStrings = [
    42, 
    "Lua", 
    5, 
    "estrela", 
    76,
    "montanha", 
     89, 
     9,
    "neve",    
    "sol",
    "vento"
]
const listaSemStrings = removerStrings(listaComStrings)
console.log(listaSemStrings)
