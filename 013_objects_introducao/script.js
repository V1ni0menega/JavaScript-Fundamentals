let person ={
  name: 'Vinicius',
  age:19 ,
  weight:70.5
};

console.log(person.name , person.age , person.weight);
//console.log
//console.log
//console.log


//podemos acessar as propriedades de um objeto usando a notação de colchetes
console.log(person['name'] , person[ 'age'], person['weight']);

//console.log(person['age']);
//console.log(person['weight']);

//tambem podemos usar variaveis para acessar propriedades de um objeto

let propertyName = 'name';
console.log(person[propertyName]);
