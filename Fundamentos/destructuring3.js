//Destructuring de objeto em parâmetros

/*O parâmetro pega uma cópia das
 variáveis de nome min e max de um objeto*/
function rand({ min, max }){
    //troca se min > max
    if (min>max){
        let aux = min;
        min = max;        
        max = aux;
    }

    let val = Math.random() * (max-min) + min;
    return val.toFixed();
}

console.log(rand({ min: 25, max: 20 }))