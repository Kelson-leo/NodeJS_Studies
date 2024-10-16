const meuModulo = require('./meu_modulo')
const soma = meuModulo.soma //não usa parênteses sem argumentos, pois aí estaria invocando. Aqui estou apenas encapsulando

soma(2,3) //mais enxuto
soma(5,10)


meuModulo.soma(10, 15) //forma mais extensa