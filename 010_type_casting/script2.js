let score = '100';

console.log(Number(score));

console.log(parseInt(score));

let score1 = 100;
let score2 = '100';


//exemplo de conversão implicita automaticamente quando necessário
console.log(score1 + score2); //100100 - converte score1 para string e faz uma concatenção com score2
//esse é um exemplo de conversão explicita

console.log(score1 + Number(score2))
// converte o score2 para numero e faz uma soma, exemplo de conversão explicita 

