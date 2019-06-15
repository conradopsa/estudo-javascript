console.log('1)', '1' == 1); 
console.log('2)', '1' === 1); //Estritamente igual (valor e tipo devem ser iguais)
console.log('3)', '3' != 3);
console.log('4)', '3' !== 3); //Estritamente diferente

console.log('5)', 3 < 2); 
console.log('6)', 3 > 2); 
console.log('7)', 3 <= 2);
console.log('8)', 3 >= 2);

console.log('9)', undefined == null); 
console.log('10)', undefined === null); 

let [d1, d2] = [new Date(0), new Date(0)];

//Comparação de endereço de objetos
console.log('11)', d1 == d2);
console.log('12)', d1 === d2);

console.log('13)', d1.getTime() === d2.getTime());