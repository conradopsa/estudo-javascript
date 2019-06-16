/* A função assume o papel de classe */
console.log(typeof Object);
console.log(typeof new Object);

let cliente = function() {};
console.log(typeof cliente);
//É possível instanciar funções
console.log(typeof new cliente);

//Outra forma
class Funcionario {}
console.log(typeof Funcionario);
console.log(typeof new Funcionario);