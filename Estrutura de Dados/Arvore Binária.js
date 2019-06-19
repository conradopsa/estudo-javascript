class No{
    valor;
    esq;
    dir;

    constructor(valor, esq, dir){
        this.valor = valor;
        this.esq = esq;
        this.dir = dir;
    }  
}

function printPercurso(raiz, ordem = 0){
    //0 = preordem  1 = simetrico   2 = posordem

    ordem === 0 && console.log(raiz.valor);
    
    raiz.esq && printPercurso(raiz.esq, ordem);

    ordem === 1 && console.log(raiz.valor);

    raiz.dir && printPercurso(raiz.dir, ordem);

    ordem === 2 && console.log(raiz.valor);
}

/*
    Exemplo:
          50
        /    \
       20     60
      /  \      \
    40    80     10
    
    Genéricamente:
            A
          /   \
         B     C
        / \     \
       D   E     F
*/

//Definindo a arvore
let F = new No(10),
    E = new No(80),
    D = new No(40),
    C = new No(60, undefined, F),
    B = new No(20, D, E),
    A = new No(50, B, C); //Raíz

console.log("Pre-Ordem:");
printPercurso(A, 0);

console.log("Simetrico:");
printPercurso(A, 1);

console.log("Pos-Ordem:");
printPercurso(A, 2);