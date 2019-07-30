//Funções em variáveis
var soma = function (a, b){
    return a + b;
}

console.log(soma(10, 5));

//Outra forma (Arrow Function)
var subtrai = (a, b) => { 
    return a - b
};

console.log(subtrai(10, 5));

//Arrow Function reduzida
var multiplica = (a, b) => a * b;

console.log(multiplica(10, 5));

//Arrow Function mais reduzida
var imprime = texto => console.log(texto);

imprime("teste");