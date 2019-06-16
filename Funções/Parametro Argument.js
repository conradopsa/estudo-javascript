//Função com parametro não declarado
function areaTriangulo(){
    return arguments[0] * arguments[1] / 2;
}

console.log(areaTriangulo(10,5));

//Acessando cada argumento
function imprimeParametro(){
    for (let i in arguments){
        console.log(arguments[i]);
    }
}

imprimeParametro(1, 2, 3, "Naruto");