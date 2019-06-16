//Undefined: Variável não inicializada
var valor1;
console.log(valor1);

//Not defined (Erro!)
//console.log(DarthVader);

//Null: ausência de valor (vazio)
valor1 = null;
console.log(valor1);

//atributo de objeto undefined
var obj = {};
console.log(obj.nome);

//Criando atributo
obj.nome = "Teste";
console.log(obj.nome);

//Deletando atributo
delete obj.nome;
console.log(obj.nome);