let precos = [10.00, 30.90, 11.00, 8.50, 20.00, 13.40, 4.00, 3.80];

/* Preços menores que 10 */

// Sem Callback
let mS = [];
for (let i = 0; i<precos.length; i++){
    if (precos[i] < 10)
        mS.push(precos[i]);
}
console.log(mS);

// Com Callback
let mC = precos.filter((valor) => {return valor < 10});
console.log(mC);