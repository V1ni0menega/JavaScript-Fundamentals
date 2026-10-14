// ====================================================================
// CONCATENAÇÃO AVANÇADA E TEMPLATE LITERALS (INTERPOLAÇÃO)
// ====================================================================

// 1. Template Literals (Crase / Backticks) - ES6+
// Permite interpolar (injetar) variáveis diretamente dentro do texto usando ${}
let cliente = "Ana";
let idade = 25;
let profissao = "Desenvolvedora";

// Modo tradicional antigo (com +):
let fraseAntiga = "A cliente " + cliente + " tem " + idade + " anos e é " + profissao + ".";
console.log(fraseAntiga);

// Modo moderno com Interpolação (muito mais limpo e legível):
let fraseModerna = `A cliente ${cliente} tem ${idade} anos e é ${profissao}.`;
console.log(fraseModerna);


// --------------------------------------------------------------------
// 2. Expressões e cálculos diretos dentro de ${}
// Dentro de ${} você pode colocar qualquer expressão válida em JavaScript!
let preco = 50;
let quantidade = 3;

console.log(`Valor unitário: R$ ${preco}`);
console.log(`Total a pagar: R$ ${preco * quantidade}`); // Realiza o cálculo diretamente!

// Também podemos chamar métodos de string dentro de ${}:
console.log(`Nome em maiúsculas: ${cliente.toUpperCase()}`);


// --------------------------------------------------------------------
// 3. Strings de múltiplas linhas (Multiline)
// Com aspas comuns (' ou "), quebrar linha exige o caractere especial \n:
let textoComQuebraAntigo = "Linha 1\nLinha 2\nLinha 3";
console.log(textoComQuebraAntigo);

// Com crases, você pode simplesmente dar Enter direto no código:
let textoComQuebraModerno = `
Relatório do Usuário:
---------------------
Nome: ${cliente}
Idade: ${idade}
Status: Ativo
`;
console.log(textoComQuebraModerno);


// --------------------------------------------------------------------
// 4. ATENÇÃO: Pegadinha da soma com concatenação (Avaliação da esquerda para a direita)
// O operador + serve tanto para somar quanto para concatenar:

console.log("Total: " + 10 + 20);    // Imprime "Total: 1020" (concatenou tudo!)
console.log("Total: " + (10 + 20));  // Imprime "Total: 30" (parênteses forçam a soma primeiro)
console.log(10 + 20 + " é o total"); // Imprime "30 é o total" (somou os números antes de achar a string)


// --------------------------------------------------------------------
// 5. Método nativo .concat() (Alternativa menos comum)
let saudacao = "Olá";
let mundo = "Mundo";
let resultado = saudacao.concat(" ", mundo, "!");
console.log(resultado); // "Olá Mundo!"
