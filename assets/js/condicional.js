const IDADE = document.querySelector("#idade");

const VERIFICAR_IDADE = document.querySelector("#verificar_idade");

VERIFICAR_IDADE.addEventListener("click", function() {
    let valor_idade = IDADE.value;

    if(valor_idade > 17){
        document.write("Você é maior de idade."); //document.write não é aconselhável pela w3c por questão de acessibilidade.
    }else{
        document.write("Você é menor de idade.");
    };      
        
        alert("Botão clicado!");
        console.log("Botão clicado!");
});






