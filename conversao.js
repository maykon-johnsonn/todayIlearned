//conversão automatica
console.log(25 + "tres");
console.log(55 + "10"); //quando for uma adição entre um numero e uma string ele ira contatenar ao inves de realizar a soma
console.log(10 / "2");
console.log("2"*"2");// no caso de uma divisão ou multiplicação seja de duas strings que possuem numero no conteudo ou um numero em um dos casos, sera realizado o calculo

//conversão de forma explicita por construtor

console.log(new Number("23")); //dentro da chamada colocar o tipo de dado que quer converter para number, no caso uma string
console.log(typeof Number("20")); // neste caso verifica o tipo para validar se a conversão realmente resulta em um numero