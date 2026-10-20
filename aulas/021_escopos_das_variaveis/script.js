// uma variavel declarada fora de uma função é chamada de global

let var_global = "global";

function mostrarNome() {
   let var_local = "local";
    console.log(var_local);
}

console.log(var_global);
mostrarNome();



// a avariavel local tem precedencia sobre a global, ou seja, se uma variavel tiver o mesmo nome dentro de uma função e fora dela, a variavel local será usada