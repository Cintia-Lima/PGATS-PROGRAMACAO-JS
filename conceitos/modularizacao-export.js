/*
Sintaxe CommonJs: 
    **Mais antigo, quase não utilizado mais**
  Exportar módulo = module.exports = {}
  Importar módulos = module.require('')

ESM - Ecmascript Standart Modules
   export {} = Sempre utiizado para módulos que eu quero exportar um módulo ou arquivo
   import = empre utiizado para módulos que eu quero importar um módulo ou arquivo
   Comando utilizado para iniciar o gerenciador de pacote JS =  npm init -y
    npm init -y  -> é usado no terminal para inicializar rapidamente um projeto Node.js, criando automaticamente um arquivo package.json 
                    com valores padrão, que armazena as informações do projeto, como nome, versão, dependências, scripts, autor etc.
   NPM
     init = Inicializa um projeto nmp - forma de exportar/importar módulos ou pacotes
                                      - Instalar pacotes no projeto
                                      - executar pacotes de projeto
                                      - organizar pacotes que vão para produção ou somente local
     install = adicionar um pacote no projeto
     npx = executar um pacote já instalado (Node Package eXecutor)                                 

*/

const brinquedos = [
    'Osso',
    'Peteca',
    'Chocalho'
]

function exibirNomePet(paramNomePet){
    console.log(`O nome do pet é: ${paramNomePet}`)
}

function exibirIdadePet(paramIdadePet){
    console.log(`A Idade do pet é: ${paramIdadePet}`)
}

exibirNomePet (`Pipoca`)
exibirNomePet (`Pantera`)
exibirNomePet (`Peggy`)


//Palavra chave para exportar uma função para fora desse arquivo
export{
    exibirNomePet, 
    exibirIdadePet,
    brinquedos
}
