function imprimirResultado(nota){
    switch (Math.round(nota)){
        case 10: case 9:
            console.log("Medalha de Ouro");
            break;
        case 8: 
            console.log("Medalha de Prata")
            break;
        case 7:
            console.log("Medalha de Bronze");
            break;
        default:
            console.log("Sem medalha");
    }
}

imprimirResultado(4);
imprimirResultado(7);

imprimirResultado(8.5);
imprimirResultado(8.4);