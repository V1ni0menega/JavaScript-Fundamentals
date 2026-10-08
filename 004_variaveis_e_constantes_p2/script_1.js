//uma variavel podem ter um valor inicial e depois serem alteradas

let myName = "vinicius";
console.log(myName);

myName = "Nicolas";
console.log(myName);

// uma variavel pode ter um valor inicial e depois sofrer alteração, para outro tipo
// este é um dos "maus" principios de programação em JavaScript:as variaveis não tem um tipo fixo

let variable = 50;
console.log(variable);

variable = "Steve";
console.log(variable);

variable = true;
console.log(variable);

//alterar o tpo de um valor de uma variavel é uma ma pratica e dificulta a depuração do codigo depois
//é sempre bom evitar mudanças no tipo de dados. Ex:numero para texto, texto para booleanos etc.