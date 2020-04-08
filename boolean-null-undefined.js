var nome = "maykon";

var contaAtiva = true;

if(contaAtiva){// se verdadeiro ---- ou pode fazer a verificação colocando == false
    console.log("A conta esta ativa");
}else{//se falso executa aqui
    console.log("A conta não esta ativa");
}

console.log(contaAtiva);
console.log(!!nome);

// tipos que serão sempre null
console.log('-------');
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!'');
console.log(!!undefined);
console.log(!!null);

//null e undefined

var nome; // se uma variavel é declarada sem ser informada o valor o javascript por padrão aplica undefined
var nome = null; //se você deseja zerar os dados da variavel usa-se null