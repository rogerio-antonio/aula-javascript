const IDADE = document.querySelector("#idade");

const VERIFICAR_IDADE = document.querySelector("#verificar_idade");

VERIFICAR_IDADE.addEventListener("click", function() {
    let valor_idade = IDADE.value;

    if(valor_idade >= 16){
        document.write("Você pode votar."); //document.write não é aconselhável pela w3c por questão de acessibilidade.
    }else{
        document.write("Você não pode votar.");
    };      
        
       // alert("Botão clicado!");
       //console.log("Botão clicado!");
});



//Jeito certo de fazer. Não usar o document.write - Criar RESULTADO NO HTML
VERIFICAR_IDADE.addEventListener("click", function() {
    let valor_idade = IDADE.value;

    if(valor_idade >= 16){
        RESULTADO.innerHTML ="Você pode votar."; //document.write não é aconselhável pela w3c por questão de acessibilidade.
    }else{
        RESULTADO.innerHTML("Você não pode votar.");
    };      
        
       // alert("Botão clicado!");
       //console.log("Botão clicado!");
});


