// throw new Error('Ocorreu um erro'); 
try {
    console.log(soma(20, new Array(10)));
} catch (error) {
    console.log(error.name);//mostra o nome do erro
    console.log(error.message);//mostra a mensagem do erro
    console.log(error.stack);//mostra os detalhes do erro
}

function soma(a,b){
    return a.exec(20); //tentativa de criar um erro
}