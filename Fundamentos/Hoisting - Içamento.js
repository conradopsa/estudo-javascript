/*Hoisting (içamento) é a propriedade de jogar
 a declaração da variável para o topo do bloco*/

/*Em javascript o var possui essa propriedade,
 enquanto que o let não*/

//Com hoisting (Funciona!)
console.log(a);
var a = 10;
console.log(a);

/* A declaração é jogada para cima, 
mas não a atribuição do valor 10. 
Por isso undefined */

//Sem hoisting (Erro!)
console.log(b);
let b = 10;
console.log(b);