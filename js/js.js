var nomeBootInputText = window.document.getElementById("nomeBoot"); //faz referencia ao input do html cujo o Id é passado por referencia
var estadoSelect = document.getElementById("estadoSelectBoot");
//onload = function(){alert("Carregou")}; //um tente meu de curiosidade

function selecionaCampos() {
    console.log("typeof: " + typeof nomeBootInputText); // mostra o tipo 
    console.log("Object call: " + Object.prototype.toString.call(nomeBootInputText)); //mostra o tipo de objeto
    console.log("Recuperar valor do campo: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true; // desabilita o campo
    console.log("Disabled  + nomeBootInputText.disabled = true");
    nomeBootInputText.readOnly = true;
    console.log("ReadyOnly  + nomeBootInputText.readOnly = true");
    console.log("tagName " + nomeBootInputText.tagName);
    console.log("tagName " + nomeBootInputText.type); //mostra o tipo da tag
    nomeBootInputText.value = "Johnsonn"; // muda o valor no input
}

function selecionarCamposSelect() {
    console.log("Object call: " + Object.prototype.toString.call(estadoSelect)); //mostra o tipo de objeto
    console.log(estadoSelect.selectedOptions[0]); // quando for multiple para verifiar o indice dos itens selecionados
    //estadoSelect.disabled = true; // desabilita o campo select
    //estadoSelect.options; mostra um html select como um html colection
}
//Obs para todos os campos ira utilizar o mesmo principio porem com as peculiaridades de cada um
//FORMAS DE REFERENCIA
 // var inputElement = document.getElementById(''); //para referenciar atraves do id 
 // var nameElement = document.getElementsByClassName('') //busca pela classe 
 // var inputElement = document.getElementsByTagName('input')[0] pode buscar atraves das tags, se tiver mais de um pode especicicar pois ele retorna um vetor
  //var inputElement = document.getElementsByClassName('nomeDaClasse')// tambem retorna um vetor pois classes e names não são unicos como os IDs.
//  var inputElement = document.querySelector('div#id input[name=nome]'); fazendo referencia pelo queryselector
