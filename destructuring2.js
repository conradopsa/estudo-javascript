//Destructuring com vetores
let vet = [1,2,3,4,5];
console.log(vet);

let [a,b, , ,c] = vet;
console.log(a, b, c);

//Com matrizes
let mat = [ [1, 2, 3], 
            [4, 5, 6],
            [7, 8, 9] ];

let [ [], [,,b2] ] = mat;
console.log(b2);
