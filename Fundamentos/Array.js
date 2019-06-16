

var arr = [10, 50, 80, 30, 40];

//Imprimindo alguns valores
console.log(arr[0], arr[1], arr[2]);

//Imprimindo todos os valores
console.log(arr);

//Valor não existente
console.log(arr[5]);

//Valor existe?
console.log(!!arr[5]);

//O array em Javascript é flexível
arr[5] = 2;
console.log(arr[5]);

//Array heterogêneo
arr = [5, true, "teste", 8.5, {nome: "n"}];
console.log(arr);

//Deletação
delete (arr[0]);
console.log(arr);

//Deleta ultimo
arr.pop();
console.log(arr);

//Add valor
arr.push(70);
console.log(arr);

//Tipo do array
console.log(typeof(arr));