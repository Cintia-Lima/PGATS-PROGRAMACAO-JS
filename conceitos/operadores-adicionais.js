/* Aula 2

 Operadores - Adicionais

 -- decremento >> diminuiu em um o valor de uma variável numérica
 ++ incremento >> aumenta em um o valor de uma variável numérica
 ? ternário (condicional) >> ele significa o "se"

 */


//Incremento
 let pesoDoDog = 10
 console.log(pesoDoDog)

 pesoDoDog ++
 console.log(pesoDoDog)

 //Decremento
 let pesoDoTutor = 100
 console.log(pesoDoTutor)

 pesoDoTutor --
 console.log(pesoDoTutor)


 // ? ternário
 const porte1 = pesoDoDog <= 10 ? 'pequeno' : 'médio'
 console.log(porte1)
 {/*<condição> / <ação se verdadeiro> : <ação se falso>*/}

 const pesoDoDogOperadorTernario = 21
 const porte = pesoDoDogOperadorTernario <= 10 // se if
             ? 'pequena'
             : pesoDoDogOperadorTernario <= 20 // senao se / senao else
             ? 'médio'
             : 'grande'
