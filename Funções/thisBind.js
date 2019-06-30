let pessoa = {
    nome : 'Dom Pedro',
    falar : function() { console.log('Eu sou ', this.nome); }
};

pessoa.falar();

//Conflito entre paradigmas (OO e Funcional)
let pfalar = pessoa.falar;
pfalar();


//Solução: Definindo o responsável pelo método
let pfalar2 = pessoa.falar.bind(pessoa);
pfalar2();

//Teste
global.nome = 'Dom João VI'
pfalar();