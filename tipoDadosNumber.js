var numero = 20;
var nome = "maykon";
// ou
var sobreNome = 'Johnsonn'; // para declar string pode-se usar tanto aspas simples como duplas

numero = 20 + "23"; // não sera realizada uma soma, pois não ira somar a string com o numero

var outroNumero = 20 + +"25"; // se eu adicionar um "+" antes da string aí sim o valor dela (no caso o numero) sera somando com a variavel do tipo numerico

console.log(typeof nome); // o "typeof" serve para verificar o tipo da variável
console.log(Number.MAX_VALUE); 
console.log(Number.MIN_VALUE);
console.log(outroNumero.toString(2)); //transforma em objeto e mostra em base binaria
console.log(outroNumero.toString(10));
console.log(outroNumero.toString(16));
console.log(numero);
console.log(outroNumero);
console.log(nome+" "+sobreNome);