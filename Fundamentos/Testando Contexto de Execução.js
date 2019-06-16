let a = 1;
g = 10; // global

console.log(a);
console.log(global.g)

global.b = 5;
console.log(b);
console.log(global.b);

/* Em node, cada arquivo é um modulo */

//this é definir a variavel para fora do modulo
this.c = 8;
//console.log(c); //erro
console.log(this.c); 

//This === Module.exports
console.log(module.exports.c);
console.log(module.exports === this);

