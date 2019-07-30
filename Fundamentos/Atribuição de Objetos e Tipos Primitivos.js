/* Uma variável que armazena um objeto é, na verdade,
 um endereço que aponta para o objeto. Diferente de tipos primitivos */

//Testando com Objetos
var a = {valor: 10}, b;

/* O 'b' recebe o endereço de 'a', ou seja, 'b' se torna o 'a' propriamente dito */
b = a;
b.valor++;

console.log(a, b);

//Testando com tipos primitivos
var a = 10, b;

b = a;
b++;

console.log(a, b);