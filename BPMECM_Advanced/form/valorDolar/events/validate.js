function validateForm(form){

    var mensagem = "";

    if(form.getValue(valorDolar) == ""){
        mensagem += "Você esqueceu de colocar o valor do dólar!";
    }

    if(mensagem != ""){
        throw mensagem;
    }
}