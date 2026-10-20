// o nulish coalescing operator e uma forma de escrever um if/else mais compacto //
// a sintaxe e a seguinte: //
//  x ?? y  //
// ou seja, se x for null ou undefined, executa y, senão executa x //
// ele e similar ao operador OR (||), mas ele nao considera 0, false ou '' como null ou undefined //

let nome = null;
let nomePadrao = nome || "Visitante";
console.log(nomePadrao); // Visitante

let nomePadraoNulish = nome ?? "Visitante";
console.log(nomePadraoNulish); // Visitante