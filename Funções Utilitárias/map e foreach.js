//Diferença entre map e foreach

let arr = [1, 2, 3, 4, 5];

let arrForeach = arr.forEach((valor) => { return valor * 2 });
console.log("arrForeach:", arrForeach);

let arrMap = arr.map((valor) => {return valor * 2});
console.log("arrMap:", arrMap);

//Foreach é usado apenas para caso não necessitamos criar um novo array
console.log("Imprimindo o array:");
arr.forEach((valor) => { console.log(valor) });