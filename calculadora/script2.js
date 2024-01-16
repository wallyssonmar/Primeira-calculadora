
var operacao = false;
var expressao = document.getElementById('primeiroN').value;



function rolartexto(){
   var primeiroN = document.getElementById('primeiroN');

   primeiroN.scrollLeft = primeiroN.scrollWidth;
}




function calculo() {
   var expressao = document.getElementById('primeiroN').value;

 try {
    var result = eval(expressao);

    document.getElementById('teste1').innerHTML= "Resultado: " + result;

 } catch (error){
    document.getElementById('teste1').innerHTML="Expressão invalida";
 }
}

function numeros(value){
   var primeiroN = document.getElementById('primeiroN');
   if(!operacao){
      primeiroN.value += value;
   }

   rolartexto();
}

function apagar(){
   primeiroN.value = ''
   teste1.innerHTML ='Resultado'
   operacao = false;
   
}



