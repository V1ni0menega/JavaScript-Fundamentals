// uma função dentro de outra função é chamada de aninhada tem um escopo local

function mostrarNome() {
    let nome = "Matheus";
    function mostrarSobrenome() {
        let sobrenome = "Camargo";
        console.log(`${nome}  ${sobrenome}`);
    }
    mostrarSobrenome();
}
mostrarNome();

// uma closure é uma função que "lembrou" do escopo onde foi criada

function CriarContador(){
    let contador = 0;

    return function (){ // função interna (closure) que pode acessar variaveis de uma função externa mesmo que a fun(x) xterna ká foi executada
        contador +=1;
        return contador;
    }
}

const comecar_contador = CriarContador()

console.log(comecar_contador()); // 1
console.log(comecar_contador()); // 2





