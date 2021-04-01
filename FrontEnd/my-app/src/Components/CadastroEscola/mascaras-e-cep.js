  
function mascaraTelefone(){
  var telefone= document.getElementById('telefone').value;
  if(telefone.length==1){
    document.getElementById('telefone').value ='(' + telefone;
  }
  else if (telefone.length==3){
    document.getElementById('telefone').value = telefone +')';
  }

  else if (telefone.length==8){
    document.getElementById('telefone').value = telefone +'-';
  }
}

function mascaraCel(){
  var celular= document.getElementById('cel').value;
  if(celular.length==1){
    document.getElementById('cel').value ='(' + celular;
  }
  else if (celular.length==3){
    document.getElementById('cel').value = celular +')';
  }
  else if (celular.length==9){
    document.getElementById('cel').value = celular +'-';
  }
}

function mascaraCep(){
   var cep = document.getElementById('cep').value;
   if(cep.length==5){
     document.getElementById('cep').value = cep +'-';
    }
  }


function limpaFormulárioCep() {
  document.getElementById('endereco').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('estado').value=("");
}

function meuCallback(conteudo) {
 if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('endereco').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf);
  } 
 else {
   limpaFormulárioCep();
   alert("CEP não encontrado.");
 }
}

function pesquisaCep(valor) {
  var cep = valor;
  if (cep != "") {
    var validacep = /^[0-9]{8}$/;
    if(validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('endereco').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('estado').value="...";
      var script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meuCallback';
      document.body.appendChild(script);
    } 
    else {
      limpaFormulárioCep();
      alert("Formato de CEP inválido.");
    }
  }
  else {
    limpaFormulárioCep();
  }
}
  