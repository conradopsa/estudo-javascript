//Forma padrão
let pessoa = {
    nome: 'Dio',
    idade: 67,
    endereco: {
        rua: 'Holy Diver',
        numero: 1
    }
}

//Destructuring: cria um novo atributo visível no escopo atual
let { nome } = pessoa;
console.log(nome);

//Alterando a variável
nome = 'Ozzy'
console.log(nome, pessoa.nome);

//Erro
//console.log(idade);

let { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

//Erro
//console.log(endereco);

//Outra forma, com novo identificador
let { nome: A } = pessoa;
console.log(A);

