function calcArea(l, a){
    if (l===-1)
        return "doideira";

    return l * a;
}

//Possíveis Chamadas
console.log(calcArea(10, 5));
console.log(calcArea(10, 5, 20, 8, 40));
console.log(calcArea(2));
console.log(calcArea());
console.log(calcArea(-1));