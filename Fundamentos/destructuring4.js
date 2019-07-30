/*  */

function rand([min, max]){
    //troca se min > max
    if (min>max) [min, max] = [max, min];

    let val = Math.random() * (max - min) + min;
    return val.toFixed();
}

console.log(rand([10,20]));