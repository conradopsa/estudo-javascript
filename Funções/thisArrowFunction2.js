//O this de uma function tradicional aponta para o global

function comparaComThis(valor){
    console.log(valor === this);
}

//Verdade
comparaComThis(global);

//Falso
comparaComThis(this);

//O bind altera a função tradicional
comparaComThis = comparaComThis.bind(this)

//Falso
comparaComThis(global);

//Verdade
comparaComThis(this);

console.log();

/* Em arrow function não é possível usar o bind,
  ele será inútil. No caso ele irá apontar sempre
  para o module.exports (this do arquivo, contexto 
  o qual ele foi escrito) */

let comparaComThisArrow = (valor) => {
    console.log(valor === this);
}

//Falso
comparaComThisArrow(global);

//Verdade
comparaComThisArrow(this);

comparaComThisArrow = comparaComThisArrow.bind(this)

//Falso
comparaComThisArrow(global);

//Verdade
comparaComThisArrow(this);