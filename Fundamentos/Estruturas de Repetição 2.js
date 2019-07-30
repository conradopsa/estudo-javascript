/*Usando o For in*/

//Com array
let valores = [1, 2, 3, 4, 5];

for (let i in valores){
    console.log(`Indice: ${i}, Valor:${valores[i]}`);
}

//Com objetos: percorrendo atributos de objetos

let guitarra = {
    cor: 'Dourada',
    modelo: 'LP',
    marca: 'Gibson',
    peso: 5
}

for (let atributo in guitarra){
    console.log(atributo, guitarra[atributo]);
}