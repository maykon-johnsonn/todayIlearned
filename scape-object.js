//para escapar alguns caracteres especiais 
//pode-se usar cod unicode e hexadecimal
console.log('para pular \n de linha');
console.log(' esapar a \\ barra');
console.log('escapar aspas \'');
console.log('\u0040');



var corp = "u0040";

console.log(corp.charCodeAt()); //mostra o n binario do conteudo da variavel


// OBJETO
//literais
var iten = {nome: 'Arroz', preco: 12.8, ativo: true, detalhes:{detalhe: 'mais'}};
console.log(iten.detalhes.detalhe);

//construtor
var pessoa = new Object();
pessoa.nome = "maykon";
pessoa.idade = 21;
console.log('nome: ',pessoa.nome,'idade: ', pessoa.idade)
