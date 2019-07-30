// Função em JS é uma First-Class Object (Citizens),
// Higher-order Function
// Ou seja, a função pode ser tratada como um dado

// Função de forma literal
function fun1() { }

// Função em uma variável
let fun2 = function() { return "pao de batata"}

// Função em um Array
let arr = [function () { }, function () { }, fun1, fun2];

// Armazenar em um atributo de objeto
let obj = {
    falar: function() { return "Eai galiera" }
}
obj.reclamar = function() { return "QUERO CAFÉEE!" }

console.log(obj.falar());
console.log(obj.reclamar());

// Função como parâmetro
function fun3(fun){
    fun();
}
fun3(function(){ console.log("Oloco, funciona mesmo!") });
//fun3(fun2); não funfa :(

// Função como retorno
function fun4(texto){
    return function(texto2) { console.log(texto, texto2); };
}
fun4("Roméro britu")("vem tranquilo");
