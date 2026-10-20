// uma funcao pode ser atribuida a uma variavel, e ela pode ser chamada como uma funcao normal //

let soma = function(a, b) {
    return a + b;
};

console.log(soma(1, 2));

// nesse caso ela não tem nome, sendo assim uma funcao anonima

function myfunc(nome) {
    console.log(`Olá ${nome}`);
}

myfunc("Gabriel");



function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let x = 10;
let y = 5;

console.log(sum(x, y));
console.log(sub(x, y));
console.log(multi(x, y));
console.log(div(x, y));

// outra forma de usar a funcao anonima é atribuindo ela a uma variavel 