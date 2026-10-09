/*
  1.remova o ultimo estudante da coleção e coloque numa variavwel
  2.remova o primeiro estudante da coleção e coloque numa variavel

*/

let estudantes = ['Vinicius' , 'João' , 'Pablo' , 'Luiz' , 'John']


let lastEstudante = estudantes.pop();
console.log(lastEstudante);

let firstEstudante = estudantes.shift();
console.log(firstEstudante);