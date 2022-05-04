var peso = document.getElementById('imcPeso');
var altura = document.getElementById('imcAltura');
var idade = document.getElementById('imcIdade');
var nivelFisico = document.getElementById('imcNivelFisico');
var mensagemResultado = document.getElementById('mensagemFinal')



function calculaImc(e){
  var imc= peso.value / (altura.value*altura.value).toFixed(2);
  imc= imc.toFixed(2);
  var mensagem = 'Por favor, diligencie todos los datos.'
  
  
    if(imc <= 16.9){
      mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por debajo del peso adecuado."
    }else if(imc > 16.9 && imc <= 18.4 ){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por debajo del peso adecuado."
    }else if(imc > 18.4 && imc <= 24.9){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Dentro del peso adecuado."
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value != 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por encima del peso adecuado."
    }else if(imc > 24.9 && imc <= 29.9 && nivelFisico.value == 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2,' + "<DIV> Dentro del peso adecuado <DIV> (Debido a la actividad física)."
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value != 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por encima del peso adecuado."
    }else if(imc > 29.9 && imc <= 34.9 && nivelFisico.value == 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2,' + "<DIV> Dentro del peso adecuado <DIV> (Debido a la actividad física)."
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value != 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por encima del peso adecuado."
    }else if(imc > 34.9 && imc <= 40 && nivelFisico.value == 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2,' + "<DIV> Dentro del peso adecuado <DIV> (Debido a la actividad física)."
    }else if(imc > 40 && nivelFisico.value != 'intenso'){
    mensagem = 'IMC ' + imc + 'kg/m2' + "<DIV> Por encima del peso adecuado."
    }else if(imc > 40 && nivelFisico.value == 'intenso'){
    mensagem = 'IMC '+ imc + 'kg/m2,' + "<DIV> Dentro del peso adecuado <DIV> (Debido a la actividad física)."
    }
  
  mensagemResultado.innerHTML = mensagem;
  e.preventDefault()
}
