let botaoGerar = document.querySelector("#gerarLink");
let caixaTexto = document.querySelector("#caixaTexto");
let caixaNumero = document.querySelector("#caixaNumero");
var linkTemplate = "https://wa.me/55numeroTemplate?text=texto%20template";
var areaCopy = document.querySelector(".areaCopy");

const buttonCopy = document.querySelector(".buttonCopy");



buttonCopy.addEventListener('click', () => {

  
  const textoCopy = document.querySelector("#linkPronto");
  textoCopy.select();
  document.execCommand("copy");
  
   areaCopy.innerHTML = "Copiado!";
 areaCopy.classList.toggle("active");
 
  setInterval(hiddenMessage, 2000)
  
})

function hiddenMessage()
{
  areaCopy.classList.remove("active");
  areaCopy.style.display = "none";
}




botaoGerar.addEventListener('click', () =>{
  
  
    if(caixaNumero.value.length > 0)
    {
      gerador();
    }
    else{
      alert("digite um número");
    }
 
  
}
)


function gerador()
{
 
  var linkCompleto = LinkNumero();
  imprimeTela(linkCompleto);
  
  return(linkCompleto);

}



function LinkNumero(texto)
{
  if(caixaNumero.value.length > 0){
   
  
  numero = caixaNumero.value 
  var numeroFormatado = linkText().replace('numeroTemplate', numero );
 
 return numeroFormatado;

  }
  else{
    alert("por favor, insira um número de telefone.")
  }
}
function linkText(){
  var texto = caixaTexto.value;
  if(caixaTexto.value.length > 0){
  var addEspaco = texto.replaceAll(' ', '%20');
  var textoLink = linkTemplate.replace('texto%20template', addEspaco);
  return textoLink;
  }
  else{
    let versaoFinal = linkTemplate.replace('e?text=texto%20template',"e");
    return versaoFinal;
  }
  
  
  
}

function imprimeTela(link)
{
  let linkPronto = document.querySelector("#linkPronto");
  areaCopy.style.display = "block";
  linkPronto.value = link;
}
