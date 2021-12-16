function validar(){
    var assunto = form1.assunto.value
    var nome = form1.nome.value
    var email= form1.email.value
    var mensagem = form1.mensagem.value

if (nome == ""){
alert("Preencha o campo corretamente!")
form1.nome.focus()
return false
}
}


