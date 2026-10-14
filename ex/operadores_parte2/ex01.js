/*
  1. ana , carlos e joao tem respectivamente,22,34 e 43 anos
  2. calcule a media das idades e exiba o resultado no console


*/

let idades =['22' ,'34' , '43']

const totalidades = Number(idades[0]) +Number(idades[1]) + Number(idades[2])

const Media = totalidades / 3

console.log(`a média das idades é ${Media}`);

//ou console.log ('a média das idades é',media);

// a diferença é que no primeiro  usa-se as crases para  delimitar a string e interpolar variaveis ... e no segundo concatena-se a string com a variavel