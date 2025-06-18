const MEU_BOTAO = document.querySelector("#meu_botao");
    MEU_BOTAO.addEventListener("click", function() {
        alert("Botão clicado!");
    });


const MEU_INPUT = document.querySelector("#meu_input"); //Capturar no html
    MEU_INPUT.addEventListener("keydown", function(event) {
        console.log(`A tecla que o usuário digitou foi, ${event.key}`); //Template string

        //if(event.key == ) ver no discord
    });
