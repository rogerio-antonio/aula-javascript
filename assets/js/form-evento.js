const MEU_FORMULARIO = document.querySelector("#meu_formulario");
    MEU_FORMULARIO.addEventListener("submit", function(event) {
        event.preventDefault();//Evita o envio padrão do formulário
        alert("Formulário enviado!")
    })