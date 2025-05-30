/*
 tentar {
 // conexao com o banco (exemplo)
} pegar (erro/excecao){
 // salvar a exceção de algum lugar...
 // exibir
}

lançar = throw

*/

try {
    console.log(`Tentando alimentar o Pet...`)
    //throw new Error('pet não quis alimento')

   //TENTAR CONECTAR NO BANCO
   //EXECUTAR UMA QUERY
} catch (excecao){
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    //CAPTURAR A EXCEÇÃO

} finally{
    console.log(`SEMPRE SEREI EXECUTADO`)

    // FECHAR A CONEXAO COM O BANCO (AO MENOS GARANTIR QUE FOI FECHADA)
}


