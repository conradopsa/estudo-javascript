//Objetos em Javascript
var produto = {};

//Declarando atributos
produto.nome = "Computador";
produto.valor = 1500.00;

console.log(produto);

console.log("Nome:", produto.nome, "\nValor:", produto.valor);

console.log(produto.naodefinido);

//Outra forma de declaração de atributos
produto['detalhes'] = "Processador 8 nucleos";
console.log(produto['detalhes']);

//Outra forma
var produto2 = {
    nome: 'Celular',
    preco: 800.00,
    descricao: {
        memoriaPrincipal: '8 gb',
        processador: 'Quad-Core'
    }
}

console.log("\nProduto 2:");
console.log(produto2);

console.log(produto2.nome, "R$" + produto2.preco.toFixed(2));
console.log(produto2.descricao.memoriaPrincipal, produto2.descricao.processador);