let guitarras = ['SG', 'LP', 'Strato Caster', 'Explorer', 'Flying V'];

function imprimir(valor, indice){
    console.log(`${indice + 1}. ${valor}`);
}

//Com Callback
guitarras.forEach(imprimir);

console.log();

//Sem Callback
for (let i=0; i<guitarras.length; i++){
    console.log(`${i + 1}. ${guitarras[i]}`);
}