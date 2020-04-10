var regExpLiteral = /Johnsonn/; // declaração de forma literal
var regExpConsturtor = new RegExp('John'); // declaração pelo contrutor

var nome = "Maykon Johnsonn";

console.log(regExpLiteral.test(nome)); // verifica se o que esta na expressão literal há na minha variavel nome
console.log(regExpConsturtor.exec(nome));